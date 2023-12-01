// import file from "fs";
type Post = {
  id: number;
  name: string;
  title: string;
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
    title: "Hello World",
    type: "markdown",
    content: `
    For the longest time, I held onto my domain and email server without much thought of creating a working website.
    The motivation simply wasn't there.
    However, things have changed recently, and I've found myself with compelling reasons to dive into this endeavor.
    I needed an online presence, a digital space to document my journey, projects, and a playground for experimentation. This won't be just another static
    resume site! it's meant to be genuinely useful, and expandable and I can use it for stuff like deploying a personal file-sharing service, for example.

    As my dissatisfaction with social media addiction grew, I realized my true affinity for occasional journaling and documenting, reminiscent of the golden days of blogging
    platforms like WordPress and Blogger, so why not build a blog too?

    Now, a website feels like the practical and appealing answer to these evolving needs.

    There's one more hurdle that's always tripped me up: design!
    Oddly enough, I'm fairly adept at crafting interfaces, but it becomes a stumbling block. I tend to procrastinate excessively when it comes to design, expending considerable
    effort in pursuit of perfection. This time, I'm determined to break free from that cycle.

    I won't dwell on aesthetics. I'll embrace the first design that delivers the functionality I need without a moment's hesitation!.
    `,
    id: 1,
    updated: true,
    published: true,
    updated_at: new Date().toLocaleString(),
    date: new Date().toLocaleString(),
  },
  {
    name: "latest_post.md",
    title: "Latest Post",
    type: "markdown",
    content: "glksdhgklskgs;r",
    id: 2,
    updated: true,
    published: true,
    updated_at: new Date().toLocaleString(),
    date: new Date().toLocaleString(),
  },
  {
    name: "about_me.md",
    title: "About Me",
    type: "markdown",
    content: "dhdjtjtjwtrjtrjtjtj",
    id: 3,
    updated: true,
    published: true,
    updated_at: new Date().toLocaleString(),
    date: new Date().toLocaleString(),
  },
  {
    name: "blog",
    type: "directory",
    content: "jfgdjfdjhdfjfjjfjfj",
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
    title: "Simple personal file sharing",
    type: "javascript",
    content: `import * as elements from "typed-html";`,
    id: 5,
    updated: true,
    published: true,
    updated_at: new Date().toLocaleString(),
    date: new Date().toLocaleString(),
  },
];

// export const list_of_icon_files = file.readdirSync("../../../public/icons");
// console.log(list_of_icon_files, "list_of_icon_files");
// export const list_of_icon_names = list_of_icon_files.map((file) => {
//   return file.split(".")[0];
// });


export const db: Post[] = posts;