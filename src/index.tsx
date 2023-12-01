import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import * as elements from "typed-html";
// import { date } from "drizzle-orm/mysql-core";
import { Nav } from "./components/nav";
import { HomePage } from "./templates/home";

import { db } from "./db/db";
import { Posts } from "./components/posts";

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

app.get("/posts", () => <Posts posts={db}/>);

app.listen(PORT);
console.log(
  `Elysia is running at http://${app.server?.hostname}:${
    app.server?.port
  }, updated on ${new Date().toLocaleString()}`
);
