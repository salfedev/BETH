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
    content: String.raw`
# Hello World!
For about 10 years, I held onto my domain name and email server without much thought of creating a working website. The motivation simply wasn't there.

I had a need for personal email but couldn't justify spending the time on building a website. I couldn't stomach using an 'off-the-shelf' solution either! After all, I'm a software engineer, right?

However, things have changed recently, and I've found myself with really compelling reasons to dive into this endeavour. I needed an online presence! More importantly, I needed a digital space to document my learning, projects, and a playground for experimentation. This won't be just another static shrine for my CV where no one would ever care to view it. It's meant to be genuinely useful. I could host a personal file-sharing service or keep my notes safe instead of paying Google to go through them for ads. As my dissatisfaction with social media addiction grew, I realized my true affinity is for occasional journaling and documenting, reminiscent of the golden days of blogging platforms like WordPress and Blogger. I don't care about having an audience, so adding a blog to my new website makes total sense.

Now, a website feels like the practical and appealing answer to these evolving needs.

There's one more hurdle that's always tripped me up: design! Oddly enough, I'm fairly adept at crafting interfaces, but it becomes a stumbling block. I tend to procrastinate excessively when it comes to design, expending considerable effort in pursuit of perfection.

This time, I'm determined to break free from that cycle. I won't dwell on aesthetics. I'll embrace the first _**ugly**_ design that delivers the functionality I need without a moment's hesitation!

In addition to these considerations, there are other criteria and demands that must be met for this website project:

**Ease of Maintenance and Updates**: It's imperative that the website remains easy to maintain and update. I want to ensure that I can effortlessly keep it current without extensive time investments.

**Cost-Efficiency**: Affordability is key. I'm steering clear of shared hosting options with clunky control panels and no SSH access. This project should be cheap! Dirt cheap!

**Cutting-Edge Technology**: I'm excited about the prospect of experimenting with new technologies while building this website. It's an opportunity for continuous learning, so I'm seeking a platform that embraces the cutting edge.

**Reliability and Community Support**: While I'm eager to explore the latest tech trends, I also value reliability. I want this website to be built on a foundation of reliable technology with a strong community and comprehensive documentation. After all, if I'm creating something for long-term use, I don't want to be caught off guard by deprecated technology that no one cares to update or maintain. So, while I'll embrace cutting-edge tech, I'll be meticulous in my choices.

**App Deployment Flexibility**: The solution should facilitate the straightforward deployment of small applications and enable their sharing through the website. I will likely utilize Docker and a hosting service that supports it, such as fly.io.
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


export const db: Post[] = posts.map((post) => ({
  ...post,
  title: post.title ?? "", // Add a default empty string value for the title property
}));
