import './../../assets/css/Footer.css';

const Footer = () => {
    return(
        <footer className="footer bg-dark text-white text-center py-4">
            <div className="container">
                <div className="social-icons mb-3">
                    <a href="#" className="icon"><i class="bi bi-facebook"></i></a>
                    <a href="#" className="icon"><i class="bi bi-instagram"></i></a>
                    <a href="#" className="icon"><i class="bi bi-twitter"></i></a>
                    <a href="#" className="icon"><i class="bi bi-google"></i></a>
                    <a href="#" className="icon"><i class="bi bi-youtube"></i></a>
                </div>
                <div className="footer-links">
                    <a href="#" className="text-white mx-3">Home</a>
                    <a href="#" className="text-white mx-3">News</a>
                    <a href="#" className="text-white mx-3">About</a>
                    <a href="#" className="text-white mx-3">Contact Us</a>
                    <a href="#" className="text-white mx-3">Our Team</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;