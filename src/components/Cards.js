import React, { Component } from 'react';
import Button from './Button';

const Cards = (news) => {
    return (
        news.data.map((e, i) => {
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
    );
}

export default Cards;