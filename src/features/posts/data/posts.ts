const posts = [
{
    id: 1,
    title: "allowing access to node server on ec2",
    body: "PORT 5001<code>console.log()</code>",
    published: true,
    created: "2018-01-01",
    lastEdited: "2018-10-01",
    slug: "hello-world",
  },
  {
    id: 2,
    title: "Hello World 2",
    body: "<p>This is my second post<p><p>This is my second post<p><p>This is my second post<p>",
    published: true,
    created: "2018-01-02",
    lastEdited: "2020-01-02",
    slug: "hello-world-2",
  },
  {
    id: 3,
    title: "How to check an age in javascript",
    body: `
    This is my third post<code>const age = 23\n\nif(age > 18) { \n  console.log("you can drink") }\nelse { \n  console.log("you are under age") \n}</code>`,
    published: true,
    created: "2018-01-03",
    lastEdited: "2019-01-03",
    slug: "hello-world-3",
    tags: ["tag1", "tag2"],
  },
];

export default posts;
