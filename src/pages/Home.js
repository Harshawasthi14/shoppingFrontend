import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/Product-list/components/ProductList";

function Home() {
    return ( 
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
     );
}

export default Home;