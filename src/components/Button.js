import React from 'react';

const Button = (props) => {

        return (
            <button style={{background: `${props.color}`, boxShadow: `0px 7px 0px ${props.shadow}`}} type="button" className="readMore">Read more</button>
        );
}

export default Button;