import * as elements from "typed-html";
import { Editor } from "../components/editor";
import { FileTree } from "../components/filetree";
import { Sidebar } from "../components/sidebar";
export const HomePage = ({ data }: any) => {
  // console.log("data[0]: ", data[0]);
  return (
    <main class="grid min-h-full bg-white text-white">
      <div class="flex">
        <Sidebar />
        <FileTree />
        <Editor data={data} />
      </div>
    </main>
  );
};
