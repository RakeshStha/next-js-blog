import { Fragment } from "react"
import BlogForm from "@/components/blogForm/BlogForm"
import { useRouter } from 'next/router'

function AddBlog() {

    const router = useRouter();

    const addBlogHandler = async (data) => {
        const response = await fetch("/api/new-blog", {
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json",
            },
        });

        const resData = await response.json();
        router.push("/")
    }

    return (
        <Fragment>
        <h1>Add Blog</h1>
            <BlogForm addBlogHandler={addBlogHandler}/>
        </Fragment>
    )
}

export default AddBlog