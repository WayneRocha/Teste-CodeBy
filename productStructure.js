const products = [
  "preto-PP", 
  "preto-M", 
  "preto-G", 
  "preto-GG", 
  "preto-GG", 
  "branco-PP", 
  "branco-G", 
  "vermelho-M", 
  "azul-XG", 
  "azul-XG", 
  "azul-XG", 
  "azul-P"
]

module.exports = () => {
  const productsObj = {};
  products.forEach((product) => {
    const [productColor, productSize] = product.split('-');
    if (productColor in productsObj === false)
      productsObj[productColor] = {};
    if (productSize in productsObj[productColor] === false)
      productsObj[productColor][productSize] = 0;
    
    productsObj[productColor][productSize] += 1;
  });
  return productsObj;
}
