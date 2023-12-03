import * as elements from "typed-html";

export const PostItem = ({ post }:  any) => {
  return (
  <div class="p-2">
    <span class="inline font-thin text-gray-600 px-2">1</span><p class="inline">{post.updated ? "Updated on" : "Published on"}</p>
    <p class="inline">{post.date || ""}</p>
    <br />
    {
      post.content.split("\n").map((line: string, index: number) => {
        return (
          <div class="flex">
            <span class="inline font-thin text-gray-600 px-2">{index + 2}</span>{line}
          </div>
        )
      })
    }
  </div>
  )
}
