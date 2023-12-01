import * as elements from "typed-html";

const tabs = [
  {
    name: "home.md",
    type: "markdown",
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
  // "latest_post.md",
  // "about_me.md"
];
export const Tabs = () => {
  return (
    <div class="flex flex-row space-x-1 py-1 bg-[#141a3b]  border-b-2 border-b-indigo-500/50 text-white">
      {tabs.map((page) => {
        // if (page.type === "directory") {
        //   return (
        //     <a
        //       href={page.name}
        //       class="hover:bg-slate-500 text-orange-400 text-sm py-1 px-10  border-r-2 border-r-black"
        //     >
        //       {page.name}
        //     </a>
        //   );
        // }

        if (page.type === "markdown") {
          return (
            <li>
              <a
                href={page.name}
                class="hover:bg-slate-500 text-orange-400 text-sm py-1 px-5  border-r-2 border-r-black"
              >
                <img
                  src="/public/icons/markdown.svg"
                  class="h-8 w-8 p-1 inline"
                />{" "}
                {page.name}
              </a>
            </li>
          );
        }
        // return (
        //   <a
        //     href={page}
        //     class="hover:bg-slate-500 text-orange-400 text-sm py-1 px-10  border-r-2 border-r-black"
        //   >
        //     {page}
        //   </a>
        // );
      })}
    </div>
  );
};
