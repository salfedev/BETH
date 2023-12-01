import * as elements from "typed-html";
import file from "fs";
const list_of_icon_files = file.readdirSync("./public/icons");
export const list_of_icon_names = list_of_icon_files.map((file) => {
  return file.split(".")[0];
});

import { posts } from "../db/db";

export const Tabs = () => {
  return (
    <ul class="flex flex-row space-x-1 py-1 bg-[#141a3b]  border-b-2 border-b-indigo-500/50 text-white">
      {posts.map((page) => {
        if (list_of_icon_names.includes(page.type)) {
          return (
            <li>
              <a
                href={page.name}
                class="hover:bg-slate-500 text-orange-400 text-sm py-2 px-5  border-r-2 border-r-black"
              >
                <img
                  src={`/public/icons/${page.type}.svg`}
                  class="h-8 w-8 p-1 inline"
                />{" "}
                {page.name}
              </a>
            </li>
          );
        }
      })}
    </ul>
  );
};
