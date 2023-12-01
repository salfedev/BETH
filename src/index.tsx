import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import * as elements from "typed-html";
// import { date } from "drizzle-orm/mysql-core";
import { Nav } from "./components/nav";
import { HomePage } from "./templates/home";

const Template = ({ children }: elements.Children) => {
  return `
        <html class="h-full">
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
  name: string;
  type: string;
  content: string;
  published: boolean;
  updated: boolean;
  updated_at: string;
  date: string;
};

const db: Post[] = [
  {
    id: 1,
    name: "Brand new stack!",
    type: "markdown",
    content: "Hello World",
    updated: true,
    published: true,
    updated_at: new Date().toLocaleString(),
    date: new Date().toLocaleString(),
  },
  {
    id: 2,
    name: "Brand new site",
    type: "markdown",
    content: "Hello World",
    published: false,
    updated: false,
    updated_at: "",
    date: new Date().toLocaleString(),
  },
];

const PORT = 3000;
const app = new Elysia().use(html()).use(staticPlugin()).use(swagger());

app.get("/", ({ html }) => {
  return html(
    <Template>
      <body class="h-full">
        <Nav />
        <HomePage data={db}/>
      </body>
    </Template>
  );
});

app.post("/post", ({ html }) => {
  return html(
    <Template>
      <body>
        <p>Clicked World!</p>
      </body>
    </Template>
  );
});

app.listen(PORT);
console.log(
  `Elysia is running at http://${app.server?.hostname}:${
    app.server?.port
  }, updated on ${new Date().toLocaleString()}`
);
