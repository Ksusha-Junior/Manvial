import React from 'react';
import PropTypes from 'prop-types';



const Price = (props) => {

    return (
        <div className='price'  style={{ cursor: 'pointer' }}>

            <div> {props.price.service} - {props.price.price}</div>
        </div>
    );
};

Price.propTypes = {
    price: PropTypes.shape({
        service: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    }).isRequired,
};

export default Price;