const fs = require('fs');

class Container {
    constructor(filename){
        this.filename = filename;
    }

    async save(product, price){
        try {

            const content = await fs.promises.readFile(this.file, 'utf-8')

            let products = JSON.parse(content);

            let id = products.length + 1;

            let producto = {
                id: id,
                product: product,
                price: price
            }

            console.log(id);

            products.push(producto)

            await fs.promises.writeFile(this.file , JSON.stringify(products))

        } catch (error) {
            console.log(error);
        }
    }


    async deleteAll(){
        try{
            await fs.promises.writeFile(this.filename, '[]')
            console.log('Eliminado correctamente');
        }catch(error){
            throw new Error (error)
        }
    }

    async getAll(){
        try{
            const info = await fs.promises.readFile(this.filename, 'utf-8')
            console.log(info);
        }catch(error){
            throw new Error (error)
        }
    }

    async getById(id){
        try{
            const content = await this.getAll();
            const contentPars = JSON.parse(content);
            const elemento = contentPars.find ((e)=>e.id===id)
            return elemento;

        }catch(error){
            throw new Error (error)
        }
    }


    async deleteById(id){
        try{
            const content = await this.getAll();
            const contentPars = JSON.parse(content);
            const elementos = contentPars.find ((e)=>e.id !== id)
            return elementos;

        }catch(error){
            throw new Error (error)
        }
    }
}

module.exports=Container;