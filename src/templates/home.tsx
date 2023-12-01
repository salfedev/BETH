import * as elements from "typed-html";
import { Editor } from "../components/editor";

export const HomePage = () => {
  return (
    <main class="grid min-h-full bg-white text-white">
      <div class="flex">
        <div class="flex-none w-14 border-r-2 border-r-indigo-500/50 bg-[#141a3b]">
          .
        </div>
        <div class="flex-auto w-64 border-r-2 border-r-indigo-500/50 bg-[#0f142e]">
          .
        </div>
        <Editor />
      </div>
    </main>
  );
};
