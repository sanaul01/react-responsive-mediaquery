import React from 'react';
import './Service.css'

const Service = ({service}) => {
    console.log(service)
    const {name, price, image, time} = service;
    return (
        <div>
            <img src={image} alt="" />
            <h2>name: {name}</h2>
            <h5>Service time: {time} hours</h5>
            <h3>price: {price}</h3>

        </div>
    );
};

export default Service;