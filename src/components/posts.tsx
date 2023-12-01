import * as elements from "typed-html";
import { PostItem } from "./post-item";
export const Posts = ({ posts }: { post: any }) => {
  return (
  <div>
    {
      posts.map((post: any) => {
        if(post.type !== "directory") {
          return (
            <PostItem post={post}/>
          )
        }
      })
    }
  </div>
  )
}
