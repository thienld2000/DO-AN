const{faker} =require("@faker-js/faker");
const MongoClient = require("mongodb").MongoClient;
const _ = require('lodash');

async function main(){
        const uri = 'mongodb://127.0.0.1:27017';
        const client = new MongoClient(uri);

        try{
            await client.connect();
            
            const productsCollection =  client.db("Yakimono-orders").collection("products");
            const categoriesCollection = client.db("Yakimono-orders").collection("categories");

            productsCollection.drop();
            let categories = ['buffet', 'drink'].map((category)=> {return {name: category}})
            await categoriesCollection.insertMany(categories);

            let imageUrls = [
                'https://www.yakimono.com.vn/temp/-uploaded-2024-Neko%20349_View%20menu%20Neko%20c%C3%B3%20bf%20line-01_cr_420x275.jpg',
                'https://www.yakimono.com.vn/temp/-uploaded-menu-Menu%20m%E1%BB%9Bi%2011.4-tanuki_Tanuki-01_cr_420x275.jpg',
                'https://www.yakimono.com.vn/temp/-uploaded-menu-Menu%20m%E1%BB%9Bi%2011.4-godzilla_View-Godzilla-239k-01_cr_420x275.jpg'
            ]
            let products=[];
            for (let i=0; i<10; i++){
                let newProduct ={
                    name:faker.commerce.productName(),
                    adjective:faker.commerce.productAdjective(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    category: _.sample(categories),
                    imageUrl:_.sample(imageUrls),
                }
                products.push(newProduct);
            }
            await productsCollection.insertMany(products);

        }catch(e){
            console.error(e);
        }finally{
            await client.close();
        }
}
main();