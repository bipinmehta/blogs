//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let blogs = [];
let blog_headings = [];

app
  .get('/', (req, res) => {
    res.status(200).render('blogs', {
      title: 'Blogs',
      newBlog: blogs,
      newBlogHeading: blog_headings,
    });
  })
  .get('/home', (req, res) => {
    res.status(200).render('home', {
      title: 'You are at home',
      msg: 'Welcome',
    });
  })
  .get('/about', (req, res) => {
    res.status(200).render('about', {
      title: 'Who we are',
      msg: 'Hello',
    });
  })
  .get('/contact', (req, res) => {
    res.status(200).render('contact', {
      title: 'We are available at:',
      msg: 'Welcome',
    });
  })
  .get('/compose', (req, res) => {
    res.status(200).render('compose', {
      title: 'Compose your blog',
    });
  });
app.post('/update', (req, res) => {
  const blog_heading = req.body.heading;
  const blog = req.body.blog;
  blogs.unshift(blog);
  blog_headings.unshift(blog_heading);
  // console.log('1' + blog_headings);
  // console.log('2' + blogs);
  res.status(200).redirect('/');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on port 3000');
});
