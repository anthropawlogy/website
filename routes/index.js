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
  res.render('homecare');
});

router.get('/homecare', (req, res) => {
  res.render('homecare');
});

router.get('/hospice', (req, res) => {
  res.render('hospice');
});

router.get('/services', (req, res) => {
  res.render('pricing');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/booking', bookingController.homePage);

router.post('/booking',
  catchErrors(
    bookingController.email
  )
);

module.exports = router;
