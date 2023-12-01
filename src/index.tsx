import { swagger } from "@elysiajs/swagger";
import { Elysia } from 'elysia';
import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import { date } from "drizzle-orm/mysql-core";

const Template = ({ children }: elements.Children) => {
  return `
        <html>
            <head>
                <title>BETH</title>
                <script src="https://unpkg.com/htmx.org@1.9.3" integrity="sha384-lVb3Rd/Ca0AxaoZg5sACe8FJKF0tnUgR2Kd7ehUOG5GCcROv5uBIZsOqovBAcWua" crossorigin="anonymous"></script>
                <script src="https://cdn.tailwindcss.com"></script>
                <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
            </head>
            ${children}
        </html>
    `;
};

type Post = {
  id: number;
  title: string;
  content: string;
  publisheed: boolean;
  date: string;
}

const db: Post[] = [
  { id: 1, title: 'Brand new stack!', content: 'Hello World', publisheed: true, date: new Date().toLocaleString() },
  { id: 2, title: 'Brand new site', content: 'Hello World', publisheed: true, date: new Date().toLocaleString() },
];

const PostItem = ({ post }: { post: Post }) => {
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.date}</p>
      <p>{post.publisheed ? 'Published' : 'Not published'}</p>
    </div>
}

const PORT = 3000;
const app = new Elysia()
                .use(html())
                .use(swagger());


app.get("/", ({ html }) => {
  return html(
    <Template>
      <body>
        <p>Hello World</p>
        <button hx-post="/test" hx-swap="outerHTML">
          Click me
        </button>
      </body>
    </Template>
  );
})

app.post('/test', ({html}) => {
  return html(
    <Template>
      <body>
        <p>Clicked World!</p>
      </body>
    </Template>
  );
})








app.listen(PORT);
console.log(
  `Elysia is running at http://${app.server?.hostname}:${app.server?.port}, updated on ${new Date().toLocaleString()}`
)