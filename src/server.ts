import path from 'path'
import express, { Request, Response } from 'express'
import posts from './features/posts/data/posts';
import {getCode, highlightCode} from './features/posts/services/syntax-highlighter';

// highlightCode('console.log()', 'javascript');
// const code = highlightCode('console.log()', 'javascript');
// console.log(code);
getCode(posts);

const app = express()
const PORT = 5001
app.use(express.static(path.join(__dirname, '../public')))
console.log(path.join(__dirname, 'public'))

app.set('view engine', 'ejs');
app.set('views', './src/views')

app.get("/", (req: Request, res: Response) => {
  // const people = ['Javascript', 'Typescript', 'React'];
  
  res.render("pages/index", { posts });
})

app.get("/about", (req: Request, res: Response) => {
  res.render("pages/about");
})

app.get("/posts/:slug", (req: Request, res: Response) => {
  const slug = req.params.slug;
  const post = posts.find(post => post.slug === slug);

  res.render("pages/post", {post});
})

app.get("*", (req: Request, res: Response) => {
  res.render("pages/404");
})

app.listen(PORT, () => {
  console.log(" app running on port:", PORT)
})