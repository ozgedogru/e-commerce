import PostCard from "../../components/PostCard";

import post1 from "../../assets/posts/post1.png";
import post2 from "../../assets/posts/post2.png";

const Blog = () => {
  const posts = [post1, post2];

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-center w-6/7 py-20">
        <div className="flex flex-col py-20">
          <h6 className="text-primary font-bold font-sm">Practice Advice</h6>
          <h3 className="text-black font-bold text-5xl">Featured Posts</h3>
        </div>
        <div className="flex justify-center flex-wrap gap-4 sm:w-full w-5/6">
          {posts.map((post, index) => (
            <PostCard posts={post} key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blog;
