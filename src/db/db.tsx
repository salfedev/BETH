// import file from "fs";
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

export const posts = [
  {
    name: "home.md",
    type: "markdown",
    content: `# Hello World!\n
      For the longest time, I held onto my domain and email server without much thought of creating a working website. The motivation simply wasn't there.\n
      However, things have changed recently, and I've found myself with compelling reasons to dive into this endeavor. I needed an online presence, a digital space to document my journey, projects, and a playground for experimentation. This won't be just another static resume platform; it's meant to be genuinely useful, like a personal file-sharing service, for example.\n
      Now, a website feels like the practical and appealing answer to these evolving needs.
    `,
    id: 1,
    updated: true,
    published: true,
    updated_at: new Date().toLocaleString(),
    date: new Date().toLocaleString(),
  },
  {
    name: "latest_post.md",
    type: "markdown",
    id: 2,
    updated: true,
    published: true,
    updated_at: new Date().toLocaleString(),
    date: new Date().toLocaleString(),
  },
  {
    name: "about_me.md",
    type: "markdown",
    id: 3,
    updated: true,
    published: true,
    updated_at: new Date().toLocaleString(),
    date: new Date().toLocaleString(),
  },
  {
    name: "blog",
    type: "directory",
    id: 4,
    updated: true,
    published: true,
    updated_at: new Date().toLocaleString(),
    date: new Date().toLocaleString(),
  },
  // {
  //   name: "about",
  //   type: "directory",
  // },
  // {
  //   name: "contact",
  //   type: "directory",
  // },
  // {
  //   name: "projects",
  //   type: "directory",
  // },
  // {
  //   name: "resume",
  //   type: "directory",
  // },
  // {
  //   name: "static",
  //   type: "directory",
  // },
  {
    name: "file_sharing.js",
    type: "javascript",
    content: `import * as elements from "typed-html";`,
    id: 5,
    updated: true,
    published: true,
    updated_at: new Date().toLocaleString(),
    date: new Date().toLocaleString(),
  },
  // "latest_post.md",
  // "about_me.md"
];

// export const list_of_icon_files = file.readdirSync("../../../public/icons");
// console.log(list_of_icon_files, "list_of_icon_files");
// export const list_of_icon_names = list_of_icon_files.map((file) => {
//   return file.split(".")[0];
// });


export const db: Post[] = [
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