import ProductDetails from "../features/Product-list/components/ProductDetails";
import NavBar from "../features/navbar/Navbar";

function ProductDetailPage() {
    return ( 
        <div>
            <NavBar>
                <ProductDetails></ProductDetails>
            </NavBar>
        </div>
     );
}

export default ProductDetailPage;