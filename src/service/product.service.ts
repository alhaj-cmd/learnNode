import fs from "fs";
import path from "node:path";

const filePath = path.join(process.cwd(), "./src/database/db.json");
export const readProduct = ()=>{
    // console.log('Data pawa gece',filePath);
    const products = fs.readFileSync(filePath);
    console.log(products);
}