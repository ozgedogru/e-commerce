import PostCard from "../../components/PostCard";

import post1 from "../../assets/posts/post1.png";
import post2 from "../../assets/posts/post2.png";

const Blog = () => {
  const posts = [post1, post2];

  return (
    <div className="flex flex-col items-center py-20">
      <div className="flex flex-col py-20 gap-2">
        <h6 className="text-primary font-bold font-sm">Practice Advice</h6>
        <h3 className="text-black font-bold text-5xl">Featured Posts</h3>
      </div>
      <div className="flex gap-4">
        {posts.map((post, index) => (
          <PostCard posts={post} index={index} />
        ))}
      </div>
    </div>
  );
};
export default Blog;
