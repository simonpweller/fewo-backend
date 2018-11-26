const catchErrors = require('./errorHandlers').catchErrors;
require('./services/passport');
const passport = require('passport');

const authentication = require('./controllers/authentication');
const bookings = require('./controllers/bookings');

const requireSignin = passport.authenticate('local', { session: false });
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = app => {
  app.post('/signin', requireSignin, authentication.signin);
  app.get('/bookings', requireAuth, catchErrors(bookings.getAll));
  app.post('/bookings', requireAuth, catchErrors(bookings.create));
  app.put('/bookings/:id', requireAuth, catchErrors(bookings.update));
  app.delete('/bookings/:id', requireAuth, catchErrors(bookings.delete));

  app.get('/booking-dates', catchErrors(bookings.getDates));
}