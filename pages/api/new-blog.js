import connectToDatabase from "../../lib/database";

async function handler(req, res) {
  if (req.method !== "POST") return;

  const { image, title, description, details } = req.body;

  const slug = title?.replace(" ", "-").toLowerCase();

  if (!image || !title || !description || !details) return;

  let db = await connectToDatabase();
  let results = db
    .collection("posts")
    .insertOne({ image, title, description, details, slug });
  res.status(200).json({
    post: results,
    message: "Post created successfully.",
  });
}

export default handler;
