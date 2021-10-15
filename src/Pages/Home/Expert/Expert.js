import React from 'react';

const Expert = ({expert}) => {
    const {name, image, expertize} = expert;
    return (
        <div>
            <h2>name: {name}</h2>
            <h3>Expert: {expertize}</h3>
            <img src={image} alt="" />
        </div>
    );
};

export default Expert;