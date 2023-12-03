import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import * as elements from "typed-html";
// import { date } from "drizzle-orm/mysql-core";
import { Nav } from "./components/nav";
import { PostItem } from "./components/post-item";
import { HomePage } from "./templates/home";

import { markdownToHtml } from "./utils/md2html";

import { db } from "./db/db";
// import { InsertPost, SelectPost } from "./db/schema";

// import { Posts } from "./components/posts";

// logger
import { green, red } from "./utils/logger"

const Template = ({ children }: elements.Children) => {
  return `
        <html>
            <head>
                <title>My Site</title>
                <script src="https://unpkg.com/htmx.org@1.9.3" integrity="sha384-lVb3Rd/Ca0AxaoZg5sACe8FJKF0tnUgR2Kd7ehUOG5GCcROv5uBIZsOqovBAcWua" crossorigin="anonymous"></script>
                <script src="https://cdn.tailwindcss.com"></script>
                <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
                <style type="text/css" src="/public/index.css"></style>
            </head>
            ${children}
        </html>
    `;
};

const PORT = 3000;
const app = new Elysia().use(html()).use(staticPlugin()).use(swagger());

app.get("/", async ({ html }) => {
  green("GET /");
  // console.log(db, "db");
  return html(
    <Template>
      <body>
        <div class="h-screen">
          <Nav />
          {/* load home */}
          <div hx-get="/home" hx-swap="innerHTML" hx-trigger="load"></div>
        </div>            
      </body>
    </Template>
  );
});

app.get("/home", async ({ html }) => {
  green("GET /home");
  // console.log(db, "db");
  return html(
    <HomePage data={db} />
  );
})

app.get("/latest-post", async ({ html }) => {
  green("GET /latest-post");
  // console.log(db, "db");
  // const data = await db.select().from(posts).all();
  const content = await markdownToHtml(String(db[0].content));
  // console.log('---------------------------------------------------------')
  // console.log('content: ', content)
  return (
    <PostItem post={{...db[0], content}} />
  )
});

// app.get("/posts", async () => {
//   // const data = await db.select().from(posts).all();
//   // console.log(data);
//   // const data = await db.select().from(posts).all();
//   return <Posts />
// });

app.listen(PORT);
console.log(
  `Elysia is running at http://${app.server?.hostname}:${
    app.server?.port
  }, updated on ${new Date().toLocaleString()}`
);
