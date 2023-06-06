import { useRouter } from "next/router";
import { MongoClient } from "mongodb";
import { Fragment } from "react";
import BlogItem from "@/components/blogItem/BlogItem";
import connectToDatabase from "@/lib/database";
import { Config } from "@/config";

function BlogDetails(props) {
  const router = useRouter();

  const {
    blog: { title, description, details, image },
  } = props;

  return (
    <Fragment>
      <div className="container flex align-center justify-center mx-auto p-4">
        <div className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow">
          <h1 className="mb-2 font-sans text-2xl font-semibold tracking-tight text-gray-900 ">
            {title}
          </h1>
          <img className="mb-3" src={image} alt={title} />
          <p className="font-semibold font-sans text-sm text-gray-700 dark:text-gray-700">
            {description}
          </p>
          <p className="mb-3 font-semibold font-sans text-gray-700 dark:text-gray-700">
            {details}
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export async function getStaticPaths() {
  let db = await connectToDatabase();
  let blogPosts = await db.collection("posts").find({}, { slug: 1 }).toArray(); //Only return the ID
  return {
    paths: blogPosts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const blogID = context.params.slug;
  // let db = await connectToDatabase();
  // let blogPost = db.collection("posts").findOne({slug: blogID});
  const client = await MongoClient.connect(Config.mongo_db_url);
  const blogPostCollection = client.db().collection("posts");
  const blogPost = await blogPostCollection.findOne({ slug: blogID });

  client.close();
  return {
    props: {
      blog: {
        title: blogPost.title,
        image: blogPost.image,
        description: blogPost.description,
        details: blogPost.details,
      },
    },
  };
}

export default BlogDetails;
