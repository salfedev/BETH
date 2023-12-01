import * as elements from "typed-html";
import { Tabs } from "./tabs";
export const Editor = () => {
  return (
    <ul class="flex-auto w-full border-r-2 border-r-indigo-500/50 bg-[#141a3b]">
      <Tabs />
    </ul>
  );
};
