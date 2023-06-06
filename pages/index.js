import { Fragment } from "react";
import { MongoClient } from "mongodb";
import Head from "next/head";
import BlogItem from "@/components/blogItem/BlogItem";
import { Config } from "@/config";

function Homepage(props) {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <title>Next.js Blog</title>
        <meta name="description" content="This is next.js blog page" />
      </Head>
      <div className="flex flex-wrap align-center justify-center">
        {props.blogPosts.map((blog) => (
          <div className=" flex-col mx-2" key={blog.id}>
            <BlogItem
              title={blog.title}
              image={blog.image}
              description={blog.description}
              details={blog.details}
              slug={blog.slug}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  //Send request to backend api

  const client = await MongoClient.connect(Config.mongo_db_url);

  const blogPostCollection = client.db().collection("posts");
  const blogPosts = await blogPostCollection.find().toArray();

  client.close();

  return {
    props: {
      blogPosts: blogPosts.map((blog) => ({
        title: blog.title,
        description: blog.description,
        image: blog.image,
        id: blog._id.toString(),
        slug: blog.slug,
      })),
    },
    revalidate: 3600, //Every hour 10, 60
  };
}

export default Homepage;
