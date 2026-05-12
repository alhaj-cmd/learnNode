import type { IncomingMessage, ServerResponse } from "node:http";
import { readProduct } from "../service/product.service";
import type { IProduct } from "../productType/productType";
import { parseBody } from "../utility/parseBody";

export const productController = async (req: IncomingMessage, res: ServerResponse) => {
    console.log("request", req);
    const url = req.url;
    const method = req.method;

    const urlParts = url?.split("/");
    const id =urlParts && urlParts[1] === 'products' ? Number(urlParts[2]) : null; 
    console.log("tomar id pawa gece", id);

    // Get All products
  
    if (url === "/products" && method === "GET") {

        const productDetails = readProduct();
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "Our products Controller",
            data: productDetails
        }))
    } else if (method === "GET" && id !==null){
        const productDetails = readProduct();
        const product = productDetails.find((p: IProduct)=>p.id === id);
        // console.log(product);
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "Our products Controller",
            data: product
        }))
    }
    else if (method === "POST" && url ==='/products'){
        const body = await parseBody(req);
        console.log('Body' ,body);
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "Post products Controller",
            // data: product
        }))
    }
};