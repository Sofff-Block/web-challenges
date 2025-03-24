import dbConnect from "@/db/connect";
import Product from "@/db/models/product";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  if (request.method === "GET") {
    const product = await Product.findById(id);
    response.status(200).json(product);
    return;
  }

  response.status(405).json({ status: "Method not allowed" });
}
