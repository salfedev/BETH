// import file from "fs";

export const posts = [
  {
    name: "home.md",
    type: "markdown",
    content: `# Hello World!\n
      For the longest time, I held onto my domain and email server without much thought of creating a working website. The motivation simply wasn't there.\n
      However, things have changed recently, and I've found myself with compelling reasons to dive into this endeavor. I needed an online presence, a digital space to document my journey, projects, and a playground for experimentation. This won't be just another static resume platform; it's meant to be genuinely useful, like a personal file-sharing service, for example.\n
      Now, a website feels like the practical and appealing answer to these evolving needs.
    `,
  },
  {
    name: "latest_post.md",
    type: "markdown",
  },
  {
    name: "about_me.md",
    type: "markdown",
  },
  {
    name: "blog",
    type: "directory",
  },
  {
    name: "about",
    type: "directory",
  },
  {
    name: "contact",
    type: "directory",
  },
  {
    name: "projects",
    type: "directory",
  },
  {
    name: "resume",
    type: "directory",
  },
  {
    name: "static",
    type: "directory",
  },
  {
    name: "file_sharing.js",
    type: "javascript",
    content: `import * as elements from "typed-html";`,
  },
  // "latest_post.md",
  // "about_me.md"
];

// export const list_of_icon_files = file.readdirSync("../../../public/icons");
// console.log(list_of_icon_files, "list_of_icon_files");
// export const list_of_icon_names = list_of_icon_files.map((file) => {
//   return file.split(".")[0];
// });
