let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('home', { title: 'Home' });
});

router.get('/about', (req, res, next) => {
  res.render('about/content', { title: 'About Me' });
});



router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact' });
});

router.get('/projects', (req, res, next) => {
  res.render('projects', { title: 'Projects' });
});

router.get('/services', (req, res, next) => {
  res.render('services', { title: 'Services' });
});

module.exports = router;
