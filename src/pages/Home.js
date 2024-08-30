import Carousel from '../components/Header/Carousel';
import Navbar from './../components/Header/Navbar';
import About from './../components/Contain/About';
import Feature from '../components/Contain/Feature';
import Product from '../components/Contain/Product';

const Home = () => {

    const features = [
        {
            icon:"img/icon-1.png",
            label:"Natural Process",
            text:"Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
        },
        {
            icon:"img/icon-2.png",
            label:"Organic Products",
            text:"Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
        },
        {
            icon:"img/icon-3.png",
            label:"Biologically Safe",
            text:"Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
        }
    ]

    const products = [
        {
            delay:"0.1s",
            thumbnai:"img/product-1.jpg",
            name:"Fresh Tomato",
            old_price: 29.10,
            price: 25.10
        },
        {
            delay:"0.3s",
            thumbnai:"img/product-2.jpg",
            name:"Fresh Tomato",
            old_price: 29.10,
            price: 25.10
        },
        {
            delay:"0.5s",
            thumbnai:"img/product-3.jpg",
            name:"Fresh Tomato",
            old_price: 29.10,
            price: 25.10
        },
        {
            delay:"0.7s",
            thumbnai:"img/product-4.jpg",
            name:"Fresh Tomato",
            old_price: 29.10,
            price: 25.10
        },
        {
            delay:"0.1s",
            thumbnai:"img/product-5.jpg",
            name:"Fresh Tomato",
            old_price: 29.10,
            price: 25.10
        },
        {
            delay:"0.3s",
            thumbnai:"img/product-6.jpg",
            name:"Fresh Tomato",
            old_price: 29.10,
            price: 25.10
        },
        {
            delay:"0.5s",
            thumbnai:"img/product-7.jpg",
            name:"Fresh Tomato",
            old_price: 29.10,
            price: 25.10
        },
        {
            delay:"0.7s",
            thumbnai:"img/product-8.jpg",
            name:"Fresh Tomato",
            old_price: 29.10,
            price: 25.10
        }
    ]

    return (
        <>
            <Navbar />
            <Carousel />
            <About />
            <Feature features={features} />
            <Product products={products} />
        </>
    );
}
export default Home;