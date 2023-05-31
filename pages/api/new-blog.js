import { MongoClient } from 'mongodb'

async function handler (req, res){
  if(req.method !== "POST") return;

  const { image, title, description, details } = req.body;

  const slug = title?.replace(" ", "-").toLowerCase();

  if(!image || !title || !description || !details) return;
  
const client = await MongoClient.connect("mongodb+srv://next-blog:S16rgUC8De6j0ISj@cluster0.hb2o5at.mongodb.net/next-js-blog?retryWrites=true&w=majority")

const db = client.db();
const postCollection = db.collection("posts");

const results = await postCollection.insertOne({image, title, description, details, slug})

client.close();

res.status(200).json({
  post: results,
  message: "Post created successfully."
})

}

export default handler