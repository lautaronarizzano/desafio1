class ProductManager {
    constructor() {
        this.products = [];
    }

    //funcion para agregar el producto
    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        //crear id autoincrementable
        if (this.products.length === 0) {
            product.id = 1
        } else {
            product.id = this.products[this.products.length - 1].id + 1
        }

        const codeIndex = this.products.findIndex(e => e.code === product.code) // identifico si hay un code repetido

        const values = Object.values(product) // saco los values del producto asi puedo verificar que no esten vacios

        const valuesString = values.filter(e => typeof e == 'string') // filtro los values por string ya que si es un numero me tira error el .trim()

        const checkTrim = valuesString.findIndex(e => e.trim() === "") // uso el .trim() para eliminar margenes de error



        //validar code repetido o espacios vacios
        if (codeIndex === -1 && checkTrim === -1) {
            this.products.push(product)
        } else {
            codeIndex !== -1 && console.error('El identificador code ya esta en otro producto')
            checkTrim !== -1 && console.error('Hay un campo vacio')
        }



        
    }

    //mostrar los productos en consola
    getProducts = () => {
        return this.products
    }

    //buscar producto por id
    getProductById = (idProduct) => {
        const productIndex = this.products.findIndex(e => e.id === idProduct)

        if (productIndex === -1) {
            console.error('Not found')
            return
        } else {
            console.log('Producto ya registrado')
        }
    }
}


const manejadorEventos = new ProductManager()
console.log(manejadorEventos.getProducts())
manejadorEventos.addProduct("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25)
console.log(manejadorEventos.getProducts())
manejadorEventos.addProduct("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25)
manejadorEventos.getProductById(0)
