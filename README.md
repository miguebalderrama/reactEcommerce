# Tienda Mia STORE

## Descripción

# Ecommerce de zapatillas (Curso de React Js - CoderHouse)

[Link al proyecto](https://github.com/miguebalderrama/reactEcommerce.git)

- Se trata de un proyecto tipo tienda online, en donde al ingresar en la Home se muestran todos los items/productos disponibles, los mismos están conectados por Firebase.
- Al hacer navegar con el menú, se puede filtrar por categorías de productos (posee 3)
- Si se le hace click a cualquier card, se dirige al detalle particular, en donde se pueden visualizar todas las características, definir la cantidad y agregar al carrito.
- En la parte superior, se ubica el CartWidget, el cual se va actualizando al incorporar/borrar un producto al carrito de la misma categoría.
- Al ingresar al carrito de compras, nos encontramos con una lista de todos los productos agregados al mismo y la información del precio total. Aquí podemos borrar un producto en particular o proceder con la compra.
- El formulario de compra toma los datos del comprador (nombre - teléfono - email) los cuales son campos requeridos, se pide dos veces el mail y cheuqea que sean iguales. En caso de estar todo correcto se envia orden de compra, si no se pide volver a ingresar datos. 
- Al finalizar la compra, se borra el carrito, se le da las gracias al usuario y se le brinda el nro de orden.

## Hooks:
- useState
- useEffect
- useParams
- useContext

## Routing:
- BrowserRouter
- Switch
- Route

## Librerías:
- [Bootstrap 5](https://getbootstrap.com/) (framework)
- [Fontawesome](https://fontawesome.com/) (iconos)
- [React-router-dom](https://www.npmjs.com/package/react-router-dom) (navegación).
- [React-image-magnifiers](https://www.npmjs.com/package/react-image-magnifiers) (lupa producto).



![image](Acac debe ir ellink a video)

## Comandos disponibles

Al tener el proyecto en tu directorio, podes utilizar los siguientes comandos:

### `npm start`

Ejecuta la aplicación en el modo de desarrollo.\
Abrir [http://localhosst:3000](http://localhost:3000) para verla en el navegador.
### `npm run build`

Crea la aplicación para producción en la carpeta `build`
