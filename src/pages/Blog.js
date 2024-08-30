import BlogGrid from '../components/Contain/BlogGrid';
import BlogStart from '../components/Contain/BlogStart';
import Carousel from '../components/Header/Carousel';
import Navbar from './../components/Header/Navbar';

const Blog = () => {
    const blogs = [
        {
            thumbnai:'img/blog-1.jpg',
            text:'How to cultivate organic fruits and vegetables in own firm',
            name:'Admin',
            date:'01 Jan, 2045'
        },
        {
            thumbnai:'img/blog-2.jpg',
            text:'How to cultivate organic fruits and vegetables in own firm',
            name:'Admin',
            date:'01 Jan, 2045'
        },
        {
            thumbnai:'img/blog-3.jpg',
            text:'How to cultivate organic fruits and vegetables in own firm',
            name:'Admin',
            date:'01 Jan, 2045'
        },
        {
            thumbnai:'img/blog-1.jpg',
            text:'How to cultivate organic fruits and vegetables in own firm',
            name:'Admin',
            date:'01 Jan, 2045'
        },
        {
            thumbnai:'img/blog-2.jpg',
            text:'How to cultivate organic fruits and vegetables in own firm',
            name:'Admin',
            date:'01 Jan, 2045'
        },
        {
            thumbnai:'img/blog-3.jpg',
            text:'How to cultivate organic fruits and vegetables in own firm',
            name:'Admin',
            date:'01 Jan, 2045'
        },
        {
            thumbnai:'img/blog-1.jpg',
            text:'How to cultivate organic fruits and vegetables in own firm',
            name:'Admin',
            date:'01 Jan, 2045'
        },
        {
            thumbnai:'img/blog-2.jpg',
            text:'How to cultivate organic fruits and vegetables in own firm',
            name:'Admin',
            date:'01 Jan, 2045'
        },
        {
            thumbnai:'img/blog-3.jpg',
            text:'How to cultivate organic fruits and vegetables in own firm',
            name:'Admin',
            date:'01 Jan, 2045'
        },
    ]
    return (
        <>
        <Navbar />
        <BlogGrid />
        <BlogStart blogs={blogs} />
        </>
    );
}
export default Blog; 