import { productid } from "../../../../data/products";

export async function Get(request:Request,{params}:{ params: Promise<{ id: string }> }) {
    const {id} = await params;
    const data = await productid(id)
    return  Response.json(data )
}