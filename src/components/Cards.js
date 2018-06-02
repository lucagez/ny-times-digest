import React, { Component } from 'react';
import Button from './Button';

const Cards = (news) => {
    // let data = props;
    // console.log(data);
    console.log(news.data);
    return (
        news.data.map((e, i) => {
            // console.log(i)
            // console.log(e.media[0])
            return (
                <div className="card" key={i}>                
                    <img className="img" src={e.media[0] ? `${e.media[0]['media-metadata'][2].url}` : 'http://via.placeholder.com/350x150'} alt="" srcSet=""/>
                    <div className="title"><h1>{e.title}</h1></div>
                    <div className="abstract"><p>{e.abstract}</p></div>
                    <div className="tags">
                        {e.adx_keywords.split(';').map((tag, j) => {
                            if (j < 3) {
                                return(
                                    <div className="singleTag" key={j}>{tag}</div>
                                )
                            }
                            return (
                                null
                            )
                        })}
                    </div>
                    
                    <Button />
                </div> 
            )
        })
        // <div className="card">
        //     <div className="date"><i>24 June</i></div>
        //     {/* <div className="date"><i>{data}</i></div> */}
        //     <div className="title"><h1>Ciao a tutti</h1></div>
        //     <div className="abstract"><p>ai belli e ai brutti</p></div>
        //     <div className="tags">
        //         <div className="singleTag">Data-Mining and Database Marketing</div>
        //         <div className="singleTag">Europe</div>
        //         <div className="singleTag">Online Advertising</div>
        //         <div className="singleTag">Privacy</div>
        //         <div className="singleTag">Social Media</div>
        //     </div>
        //     {/* <div className="abstract"><a href="#">read full article</a></div> */}
        //     {/* <div className="abstract"><h3>Tags:</h3></div> */}
        //     <Button />
        // </div>
    );
}

export default Cards;


// Data-Mining and Database Marketing;Europe;Online Advertising;Privacy;Social Media;Computers and the Internet;Advertising and Marketing;Regulation and Deregulation of Industry
