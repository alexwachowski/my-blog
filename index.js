// import express from "express";
// import bodyParser from "body-parser";
// import path from "path";



// const app = express();
// const port = 3000;

//  app.get("/", (req, res) => {
//      res.render("index.ejs");
//    });

// //   app.get('/posts', (req, res) => {
// //   res.json(posts);
// // });


// app.get("/create-post", (req, res) => {
//   res.render("forms.ejs");
// });

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// const posts = [];

// app.post('/submit-post', (req, res) => {
//   const title = req.body["title"];
//   const content = req.body["content"];
//   const newPost = { title, content };
//   posts.push(newPost);
//   var indexToExtract = 0 + (posts.length -1);
  
  

//   const titleToExtract = posts[indexToExtract].title;
//   const contentToExtract = posts[indexToExtract].content;


  
//   res.redirect(`/?title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}`);
//  });

//  app.get('/posts', (req, res) => {
//   // Extract query parameters from the URL
//   const titleToExtract = req.query.title;
//   const contentToExtract = req.query.content;

//   // Now you can use titleToExtract and contentToExtract as needed
//   // ...

//   // Render your view or send a response
//   res.redirect('/', { titleToExtract, contentToExtract, posts });
// });


// app.get("/blog1", (req, res) => {
//     res.render("blog1.ejs");
//    });

//   app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
//   });

import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const port = 3000;

//app.set("views", path.join(__dirname, "views"));
//app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // Pass posts data to the view
  res.render("index.ejs", { posts });
});

app.get("/create-post", (req, res) => {
  res.render("forms.ejs");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const posts = [];

app.post('/submit-post', (req, res) => {
  const title = req.body["title"];
  const content = req.body["content"];
  const newPost = { title, content };
  posts.push(newPost);
  
  
  // Redirect to "/" without passing query parameters
  res.redirect('/');
});

app.get('/cards', (req, res) => {
  // Extract query parameters from the URL
  const titleToExtract = req.query.title;
  const contentToExtract = req.query.content;
  var counter = 0; 
  counter++; 
  const name = "posts" + counter; 

  // Render your view or send a response
  res.render('index.ejs', { titleToExtract, contentToExtract, posts, name });
});

app.get('/blog-post', (req, res) => {
  const titleToExtract = req.query.title;
  const contentToExtract = req.query.content;
  res.render('blog1.ejs' , { titleToExtract, contentToExtract, posts}); // Assuming you have a "blog1" view file
});


app.get('/delete-post/:index', (req, res) => {
  const postIndex = req.params.index;

  // Check if the index is valid
  if (postIndex >= 0 && postIndex < posts.length) {
    // Remove the post at the specified index
    posts.splice(postIndex, 1);
  }

  // Redirect back to the main page or render a response
  res.redirect('/');
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
