import type { IncomingMessage, ServerResponse } from "node:http";

export const routeHandle =(req:IncomingMessage, res:ServerResponse) =>{
    const url = req.url;
    const method = req.method; 
    if(url === "/" && method=== 'GET'){
        // console.log("This is root route")
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify({message:"This is root route"}))
    } else if(url?.startsWith('/products')){
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify({message:"This is root product site"}))
    }
     else{
        res.writeHead(404, {'content-type': 'application/json'});
        res.end(JSON.stringify({message:"Route not found"}));
    }

}