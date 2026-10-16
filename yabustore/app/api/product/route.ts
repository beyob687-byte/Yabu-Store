import { product } from "@/data/products";


export async function GET() {

  const data = await product()
  return Response.json(data);
}