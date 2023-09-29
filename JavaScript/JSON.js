//JavaScript Object Notation


let invoice = {
    name: "Serafim",
    age: 22,
    products: {
        0: ["Mouse ", "10.99"],
        1: ["Teclado Gamer ", "50.00"],
        2: ["Monitor ", "200.00"]
    }
}


notaFiscal(invoice); 
function notaFiscal(invoice){
    console.log("O Comprador é: " + invoice.name)
    console.log("A idade é: " + invoice.age)


    //Percorre meu objeto
    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
    console.log(productName + productPrice)
    }

}