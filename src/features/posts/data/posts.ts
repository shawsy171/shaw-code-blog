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
    body: "This is my third post" + 
      "<code>" + 
      "const age = 23" + 
      "\n\n" + 
      "if(age > 18) { " + 
      "\n" + 
      "\tconsole.log(\"you can drink\") }" + 
      "\n" + 
      "else { " + 
      "\n" + 
      "\tconsole.log(\"you are under age\") " + 
      "\n}" + 
      "</code>",
    published: true,
    created: "2018-01-03",
    lastEdited: "2019-01-03",
    slug: "hello-world-3",
    tags: ["tag1", "tag2"],
  },
  {
    id: 4,
    title: "How would one securely access a private subnet from a public network",
    body: `
      <p>Use a Bastion host within AWS to access private subnet from public network (e.g. the internet)</p>
      <p>but what else is needed?</p>
    `,
    published: true,
    created: "2018-01-03",
    lastEdited: "2019-01-03",
    slug: "hello-world-4",
    tags: ["AWS", "tag2"],
  },
];

export default posts;
