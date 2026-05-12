import {createServer, IncomingMessage, Server, ServerResponse} from "http";
import { url } from "inspector";
import {routeHandle} from "./routes/route";
const server: Server = createServer((req : IncomingMessage, res: ServerResponse)=>{
    // console.log(req.url);
    // console.log(req.method)
   routeHandle(req, res)

})

server.listen(5000,()=>{
    console.log("server is running on the port")
})