const Booking = require('../models/booking');
const dateFns = require('date-fns');

exports.getAll = async (req, res, next) => {
  const bookings = await Booking.find();
  res.json(bookings);
};

exports.create = async (req, res, next) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.status(201).json(booking);
};

exports.update = async (req, res, next) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) {
    return res.status(404).json({
      err: 'Booking not found',
    });
  }
  booking.set(req.body);
  await booking.save();
  res.json(booking);
};

exports.delete = async (req, res, next) => {
  await Booking.findByIdAndDelete(req.params.id);
  res.status(200).send();
};

exports.getBookedDates = async (req, res, next) => {
  const accommodation = req.params.accommodation;
  const bookings = await Booking.find({accommodation});

  const timestamps = new Set();
  bookings.forEach(booking => {
    dateFns.eachDay(booking.arrivalDate, booking.departureDate)
      .forEach(day => timestamps.add(day.valueOf()));
  });
  res.send(Array.from(timestamps, timestamp => dateFns.parse(timestamp)));
};