import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();

    response.status(200).json(products);
    return;
  }
  //neuen Eintrag erstellen -> api route mit POST definieren und .create Methode für Product-Modell aufrufen 
  if (request.method === "POST") {
    const productData = request.body;
    const result = await Product.create(productData);
    console.log("result: ", result);

    response.status(201).json({ status: "Product created." });
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
