const mail = require('../handlers/mail');

exports.homePage = (req, res) => {
  res.render(req.query.done === "1" ? 'booking/booking-success' : 'booking/booking-inactivated', { title: "Request an appointment |", slug: '/booking' });
};

exports.email = async (req, res) => {
  const data = req.body;

  // abort if spam bot
  if (data.spamCheck != "") {
    console.log("spam detected, redirecting back to booking form");
    return res.redirect('/booking');
  }
  else {
    console.log("emailing form...");
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
      to: `Anthropawlogy Veterinary Care <booking@anthropawlogy.com>`,
      subject: 'New Booking Request',
    }
    )
    //  req.flash('success', `Thank you! We will contact to confirm your appointment time within the business day.`);
    const nextPage = '/booking?done=1';
    res.redirect(nextPage);
  }
};
