const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  guest: {
    firstName: String,
    lastName: String,
    streetAddress: String,
    zipCode: String,
    city: String,
    email: String,
    phone: String,
  },
  accommodation: {
    type: String,
    enum: ['apartment', 'house'],
  },
  arrivalDate: Date,
  departureDate: Date,
  comments: String,
  confirmed: Date,
}, { timestamps: true });

module.exports = mongoose.model('booking', bookingSchema);