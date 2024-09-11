import './../../assets/css/Checkout.css'

const Sidebar = () => {
    return (
        <div className="col-md-4">
            <div className="order-summary mt-3">
                <h5>Order Summary</h5>
                <div className="item">
                    <img src="https://th.bing.com/th/id/OIP.H7sYxN5WI41TKIlZecZlPwHaFj?w=269&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Product Image" />
                    <div>
                        <p className='text_item'>Dewy Moisturizing Skin Cream - Special Edition</p>
                        <div className="quantity">
                            <button className="btn btn-outline-secondary btn-sm">-</button>
                            <span>1</span>
                            <button className="btn btn-outline-secondary btn-sm">+</button>
                        </div>
                    </div>
                    <p>$24.99</p>
                </div>
                <p className='text_sum'>Have a coupon? <a href="#">Click here to enter your code</a></p>
                <hr />
                <p className='text_item'>Subtotal: <span className="float-right">$24.99</span></p>
                <p className='text_item'>Shipping: <span className="float-right">Free</span></p>
                <hr />
                <h5 className="total">Total: <span className="float-right">$24.99</span></h5>
            </div>
            <div class="confidence">
                <h5>Shop With Confidence</h5>
                <p>Trusted by more than 5000+ buyers</p>
                <ul>
                    <li>✔️ 100% Money-Back Guarantee</li>
                    <li>✔️ No-Hassle Returns</li>
                    <li>✔️ Secured Transactions</li>
                </ul>
            </div>
        </div>
    );
}
export default Sidebar;