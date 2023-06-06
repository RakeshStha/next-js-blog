import { Fragment } from "react";
import BlogForm from "@/components/blogForm/BlogForm";
import { useRouter } from "next/router";
import axios from "axios";

function AddBlog() {
  const router = useRouter();

  const addBlogHandler = async (data) => {
    await axios.post("/api/new-blog", data).then((res) => {
      if (res?.status === 200) {
        return router.push("/");
      } else {
        alert("something went wrong");
      }
    }),
      (err) => {
        console.log(err);
      };
  };

  return (
    <Fragment>
     <div className="flex align-center justify-center">
     <div>
     <h1 className="text-center font-bold font-lg my-4">Add Blog</h1>
      <BlogForm addBlogHandler={addBlogHandler} />
     </div>
     </div>
    </Fragment>
  );
}

export default AddBlog;
