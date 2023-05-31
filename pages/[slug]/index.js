import { useRouter } from 'next/router';
import { MongoClient } from 'mongodb'
import { Fragment } from 'react';
import BlogItem from '@/components/blogItem/BlogItem';

function BlogDetails(props) {
    const router = useRouter()

    const { blog:{title, description, details, image} } = props

    return <Fragment>
        <h1> Blog Details</h1>
        <div className="flex flex-col">
        <BlogItem 
        title={title}
        image={image}
        description={description}
        details={details}
        />
        </div>
    </Fragment>
}

export async function getStaticPaths(){
    const client = await MongoClient.connect("mongodb+srv://next-blog:S16rgUC8De6j0ISj@cluster0.hb2o5at.mongodb.net/next-js-blog?retryWrites=true&w=majority")
const blogPostCollection = client.db().collection("posts")
const blogPosts = await blogPostCollection.find({}, {slug:1}).toArray() //Only return the ID

client.close()
return {
    paths: blogPosts.map(({slug}) => ({
        params:{slug}
    })), 
    fallback: false,
}

}

export async function getStaticProps(context){

    const blogID = context.params.slug;
    const client = await MongoClient.connect("mongodb+srv://next-blog:S16rgUC8De6j0ISj@cluster0.hb2o5at.mongodb.net/next-js-blog?retryWrites=true&w=majority")
    const blogPostCollection = client.db().collection("posts");
    const blogPost = await blogPostCollection.findOne({slug: blogID});

    client.close()
    return {
        props:{
           blog:{
            title: blogPost.title,
            image: blogPost.image,
            description: blogPost.description,
            details: blogPost.details
           }
        }
    }
}


export default BlogDetails