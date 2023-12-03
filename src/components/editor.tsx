import * as elements from "typed-html";
import { Tabs } from "./tabs";
import { PostItem } from "./post-item";


export const Editor = ({data}: any) => {
  // const firstItem = data[0];
  return (
    <div class="flex-auto w-full h-full border-r-2 border-r-indigo-500/50 bg-[#141a3b]">
      <Tabs />
      <div
        class="p-2 h-full"
        hx-get="latest-post"
        hx-trigger="load"
        hx-swap="innerHTML"
      ></div>
      {/* <PostItem post={firstItem} />         */}
    </div>
  );
};
