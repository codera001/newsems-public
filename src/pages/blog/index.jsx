import BlogComponent from "@/Components/BlogComponent";
import BlogSidebar from "@/Components/BlogSidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Blog = () => {
  const url = "https://api.diginums.com/api" + "/blog/posts";
  const [allBlogs, setAllBlogs] = useState([]);
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(url, {
        timeout: 30000,
      });
      console.log(response.data);
      setAllBlogs(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className="my-10">
      <div className="mx-auto flex max-w-7xl flex-col px-3 lg:flex-row lg:justify-between lg:gap-5">
        <div className="lg:w-2/3">
          {allBlogs?.post?.map((blog) => {
            return (
              <BlogComponent
                key={blog.id}
                title={blog.title}
                description={blog.description}
                Author={blog.author}
                date={new Date(blog.date_created).toDateString()}
                id={blog.id}
                image={blog.image}
                socialLinks={JSON.parse(blog.social_media_link)}
                content={blog.blog_content}
              />
            );
          })}
        </div>
        <BlogSidebar />
      </div>
    </section>
  );
};

export default Blog;
