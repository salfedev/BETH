import * as elements from "typed-html";
import { posts } from "../db/db";
import { list_of_icon_names } from "./tabs";
export const FileTree = () => {
  return (
    <div class="w-64 border-r-2 border-r-indigo-500/50 bg-[#0f142e] p-1">
      {/* &gt;<span class="text-blue-200 text-sm font-extrabold">  File Tree</span> */}
      &#9660;
      <span class="text-blue-200 text-sm font-extrabold"> File Tree</span>
      {
        posts.map((page: { type: string; name: any; }) => {
          if (list_of_icon_names.includes(page.type)) {
            return (<div class="text-blue-200 text-sm font-light px-6">
              <img
                  src={`/public/icons/${page.type}.svg`}
                  class="h-8 w-8 p-1 inline"
                /><a href="#">{page.name}</a>
            </div>)
          }
        })
      }
    </div>
  );
};
