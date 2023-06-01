React Shopping Cart Ecommerce Beginner Website - Build & Deploy A React Beginner Project
Link - (https://www.youtube.com/watch?v=tEMrD9t85v4)

-npx create-react-app (app-name)
-npm i phosphor-react
-npm i react-router-dom
-importujemo react-router-dom u App.js fajl
-kreiramo pages folder
-kreiramo components folder
-kreiramo Navbar.jsx komponentu
-u App.js fajl importujemo Navbar.jsx komponentu
-u Navbar.jsx komponentu importujemo Link iz react-router-dom biblioteke
-kreiramo Navbar.css fajl
-Navbar.css fajl importujemo u Navbar.jsx komponentu
-u pages folderu kreiramo cart.jsx i shop.jsx komponente
-u src folderu kreiramo data folder i unutar njega products.js fajl
-u src folderu kreiramo assets folder i unutar njega dodajemo slike
-u shop.jsx komponentu importujemo products.js fajl
-u shop.jsx komponenti, div elementu sa klasom products, dodajemo niz PRODUCTS sa metodom map
-u shop folderu kreiramo product.jsx komponentu
-u product.jsx komponenti, Product funkciji dodajemo props parametar
-u product.jsx komponenti, kreiramo HTML elemnte 
-kreiramo shop.css fajl i importujemo ga u shop.jsx komponentu
-u src folderu kreiramo context folder
-u context folderu kreiramo shop-context.jsx komponentu
-u shop-context.jsx komponentu importujemo createContext
-kreiramo ShopContext varijablu
-kreiramo ShopContextProvider funkciju sa parametrom props
-u return izjavi ShopContext.Provider je roditelj komponenta elemenata
-unutar ShopContext.Provider komponente dodajemo props.children
-importujemo useState()
-kreiramo getDefaultCart funkciju
-importujemo PRODUCT niz iz data foldera
-kreiramo addToCart i removeFromCart funkcije
-kreiramo objekt varijablu contextValue 
-u return izjavi, ShopContext.Provider komponenti dodajemo props kojem proslijedujemo vrijednost contextValue
-u product.jsx komponentu importujemo ShopContext
-u App.js fajlu, u return izjavi importujemo ShoppingContextProvider komponentu
-u return izjavi ShopContext.Provider komponenti dodajemo props value cija je vrijednost contextValue
-u pages folderu kreiramo cart-item.jsx komponentu
-u cart.jsx komponenti, div elementu sa klasom cartItems dodajemo PRODUCTS.map() metodu
-unutar map metode provjeravamo da li je id nekom itema razlicit od nule
-u return izjavi importujemo CartItem komponentu
-CartItem komponenti dodajemo props data i unutar njega proslijedujemo product
-kreiramo cart.css fajl i importujemo ga u cart.jsx komponentu
-u cart-item.jsx komponentu importujemo useContext Reach hook i ShopContext
-u cart-item.jsx komponenti kreiramo updateCartItemCount funkciju
-u cart-item.jsx komponenti, button elementima dodajemo onClick dogadaje
-prvom button elementu u onClick dogadaju proslijedujemo removeFromCart funkcijuupdateCartItemCount
-input elementu dodajemo onChange dogadaj unutar kojeg proslijedujemo updateCartItemCount funkciju
-drugom button elementu u onClick dogadaju proslijedimo addToCart funkciju
-u shop-context.jsx komponenti kreiramo getTotalCartAmount funkciju
-u cart.jsx komponenti kreiramo totalAmount funkciju cija je vrijednost jednaka getTotalCartAmount funkciji
-u cart.jsx komponenti, unutar p elementa sa tekstom Subtotal, dodajemo funkciju totalAmount
-u cart.jsx komponentu importujemo useNavigate React hook
-kreiramo varijablu navigate
-button elementu sa tekstom Continue Shopping dodajemo onClick dogadaj
-unutar onClick dogadaja proslijedujemo navigate varijablu
-u cart.jsx komponenti, unutar div elementa sa klasom checkout, dodajemo uslov totalAmount > 0


Github pages:

-npm i gh-pages --save-dev
-package.json -> "homepage": "https://kimamovic21.github.io/reactjs-shopping-cart-ecommerce-pt-yt-2022"
-package.json -> "predeploy": "npm run build"
-package.json -> "deploy": "gh-pages -d build"
-git remote add origin https://github.com/kimamovic21/reactjs-shopping-cart-ecommerce-pt-yt-2022.git
-npm run deploy
