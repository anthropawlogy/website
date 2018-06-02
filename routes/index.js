const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
const bookingController = require('../controllers/bookingController');

// Do work here
router.get('/landing', (req, res) => {
  req.flash('success', `What do you think about this?`);
  res.render('home');
});

router.get('/', (req, res) => {
  res.render('homecare', { title: "", slug: '/' });
});

router.get('/homecare', (req, res) => {
  res.render('homecare', { title: "Home Care |", slug: '/homecare' });
});

router.get('/hospice', (req, res) => {
  res.render('hospice', { title: "Hospice Care and Home Euthanasia |", slug: '/hospice' });
});

router.get('/services', (req, res) => {
  res.render('pricing', { title: "Services |", slug: '/pricing' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: "About us |", slug: '/about' });
});

router.get('/booking', bookingController.homePage);

router.post('/booking',
  catchErrors(
    bookingController.email
  )
);

module.exports = router;
