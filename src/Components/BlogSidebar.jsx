import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const BlogSidebar = () => {
  const instance = axios.create({
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    },
  });
  const router = useRouter();
  const [comments, setComments] = useState([]);
  const url = "https://api.diginums.com/api" + "/blog/posts";
  const [recentPosts, setRecentPosts] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await instance.get(url, {
        timeout: 30000,
      });
      console.log(response.data.post);
      setRecentPosts(response.data.post);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getComments = async () => {
    const data = await instance.get(
      "https://api.diginums.com/api" + "/blog/post",
      {
        timeout: 30000,
        params: {
          post_id: router?.query?.id || 1,
        },
      }
    );
    setComments(data?.data?.comments);
  };

  // useEffect(() => {
  //   getComments();
  // }, [router?.query?.id, instance]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <aside className="h-full border-l-0 pt-14 lg:w-1/3 lg:border-l lg:border-gray-400/20 lg:px-6">
      <div className=" mb-2 border-b border-gray-400/20">
        <h1 className="mb-5 font-bold">RECENT POSTS</h1>
      </div>
      {recentPosts
        .sort(function (a, b) {
          return b.id - a.id;
        })
        .slice(0, 5)
        .map((post) => (
          <div key={post.id} className=" mb-2 border-b border-gray-400/20">
            <h1 className="mb-2">
              {new Date(post.date_created).toDateString()}
            </h1>
            <p className=" pb-3 text-color-primary">{post.title}</p>
          </div>
        ))}
      {/* <div className=" mb-2 border-b border-gray-400/20">
        <h1 className="mb-5 font-bold">RECENT COMMENTS</h1>
        <p className="pb-3 text-color-primary">
          How do I recover my password on Instagram: we act quickly and easily
        </p>
      </div>
      <div className=" mb-2 border-b border-gray-400/20">
        <p className="pb-3 text-color-primary">
          How do I recover my password on Instagram: we act quickly and easily
        </p>
      </div>
      <div className=" mb-2 border-b border-gray-400/20">
        <p className="pb-3 text-color-primary">
          How do I recover my password on Instagram: we act quickly and easily
        </p>
      </div>
      <div className=" mb-2 border-b border-gray-400/20">
        <p className="pb-3 text-color-primary">
          How do I recover my password on Instagram: we act quickly and easily
        </p>
      </div> */}
      {/* <h1 className="p-5">ARCHIVES</h1>
      <Dropdown /> */}
    </aside>
  );
};

export default BlogSidebar;
