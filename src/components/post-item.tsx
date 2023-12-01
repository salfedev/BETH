import * as elements from "typed-html";

export const PostItem = ({ post }: { post: any }) => {
  return (
  <div class="p-2">
    <span class="inline font-thin  text-gray-600 px-2">1</span><p class="inline"># {post.name || "ghdgklghkg"}</p>
    <br />
    <span class="inline font-thin text-gray-600 px-2">2</span><p class="inline">{post.updated ? "Updated on" : "Published on"}</p>
    <p class="inline">{post.date || ""}</p>
    <br />
    {
      post.content.split("\n").map((line: string, index: number) => {
        return (
          <div class="flex">
            <span class="inline font-thin text-gray-600 px-2">{index + 3}</span><p class="inline">{line}</p>
          </div>
        )
      })
    }
  </div>
  )
}
