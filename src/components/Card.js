import React, { Component } from 'react';
import Button from './Button';

const Card = (props) => {
    // let data = props;
    // console.log(data);
    // console.log(data);
    return (
        <div className="card">
            <div className="date"><i>24 June</i></div>
            {/* <div className="date"><i>{data}</i></div> */}
            <div className="title"><h1>Ciao a tutti</h1></div>
            <div className="abstract"><p>ai belli e ai brutti</p></div>
            <div className="tags">
                <div className="singleTag">Data-Mining and Database Marketing</div>
                <div className="singleTag">Europe</div>
                <div className="singleTag">Online Advertising</div>
                <div className="singleTag">Privacy</div>
                <div className="singleTag">Social Media</div>
            </div>
            {/* <div className="abstract"><a href="#">read full article</a></div> */}
            {/* <div className="abstract"><h3>Tags:</h3></div> */}
            <Button />
        </div>
    );
}

export default Card;


// Data-Mining and Database Marketing;Europe;Online Advertising;Privacy;Social Media;Computers and the Internet;Advertising and Marketing;Regulation and Deregulation of Industry
