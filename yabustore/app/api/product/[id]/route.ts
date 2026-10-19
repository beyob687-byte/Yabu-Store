import { productid } from "@/data/products";

export async function GET(request:Request,{params}:{ params: Promise<{ id: string }> }) {
    const {id} = await params;
    const data = await productid(id)
    if (!data) {
        return Response.json({ message: "Product not found" }, { status: 404 });
    }

    return Response.json(data);
}