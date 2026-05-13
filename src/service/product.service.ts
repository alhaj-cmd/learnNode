import fs from "fs";
import path from "node:path";

const filePath = path.join(process.cwd(), "./src/database/db.json");
export const readProduct = ()=>{
    // console.log('Data pawa gece',filePath);
    const products = fs.readFileSync(filePath, 'utf-8');
    // console.log(JSON.parse(products));
    return JSON.parse(products);
}
export const inserProduct =(payload: any)=>{
    console.log("inserted product",payload);
    fs.writeFileSync(filePath, JSON.stringify(payload));
}