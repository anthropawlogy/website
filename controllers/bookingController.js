const mail = require('../handlers/mail');

exports.homePage = (req, res) => {
  res.render(req.query.done === "1" ? 'booking/booking-success' : 'booking/booking', { title: "Request an appintment |", slug: '/booking' });
};

exports.email = async (req, res) => {
  const data = req.body;

  // extract variables
  // email out booking to client
  await mail.send({
    filename: 'bookingRequestClient',
    data,
    to: data.contactEmail,
    subject: 'Booking request with Anthropawlogy Veterinary Care',
  })
  await mail.send({
    filename: 'bookingRequest',
    data,
    to: `Anthropawlogy Veterinary Care <booking@anthropawlogyvet.com>`,
    subject: 'New Booking Request',
  }
  )
  //  req.flash('success', `Thank you! We will contact to confirm your appointment time within the business day.`);
  res.redirect('/booking?done=1');
};
