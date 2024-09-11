import Content from "../components/Checkout/Content";
import Sidebar from "../components/Checkout/Sidebar";

const Checkout = () =>{
    return(
        <div className="container">
            <div className="row justify-content-end">
                <Content />
                <Sidebar />
            </div>
        </div>
    );
}
export default Checkout;