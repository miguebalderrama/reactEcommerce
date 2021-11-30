export const promisesDetail = (products, setSelectProduct, setIsLoading)=> {
    
  const productsResponse = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
      console.log(products)
      //reject('Hubo un problema en la respuesta');
    }, 50);
  });
  productsResponse.then((results) => {
      
    setSelectProduct(results);
      console.log(results);
    })
    .catch((error) => {
      console.log(`Error in progress ${error}`);
    })
    .finally(() => {
      setIsLoading(false);
    });
}