import React, { useEffect, useState } from 'react';
import Post from "./Post";
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Post.css';


const API_URL = 'http://127.0.0.1:8000/post/';

function PostList() {
    const [posts, setPosts] = useState([]);

     useEffect(() => {
        async function fetchPosts() {
            const response = await axios.get(API_URL);
            setPosts(response.data);
        }
        fetchPosts();
    }, []);

    const settings = {
        dots: true,
        fade: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows: true
    };

    return (
      <div className='app-container'>

        <div className='postlist-container'>
            <Slider {...settings}>

                {posts.map(post => (
                    <li key={post.id}>
                        <Post post={post}/>
                    </li>
                 ))}
            </Slider>
        </div>
      </div>
    );
};


export default PostList;