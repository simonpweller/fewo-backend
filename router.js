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
  app.put('/bookings/:id', requireAuth, catchErrors(bookings.update));
  app.delete('/bookings/:id', requireAuth, catchErrors(bookings.delete));

  app.post('/bookings', catchErrors(bookings.create));
  app.get('/booked-dates', catchErrors(bookings.getBookedDates));
}