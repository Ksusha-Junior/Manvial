import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const Post = ({post}) => {
    return(
        <div className='post'>
            <strong>{post.title}</strong>
            <img src={post.image}  className="post-image" />/>
            <strong>{post.text}</strong>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string,
        text: PropTypes.string.isRequired,
    }).isRequired,
};

export default Post;