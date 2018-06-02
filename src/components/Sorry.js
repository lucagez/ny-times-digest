import React, { Component } from 'react';

const Sorry = (props) => {
    const txt = 'No more news ):';
    console.log(props.visibility);
    return (
        <div className={props.visibility ? 'sorry visible' : 'sorry'}><h1>{txt}</h1></div>
    )
}

export default Sorry;