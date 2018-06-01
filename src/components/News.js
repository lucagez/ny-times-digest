import React, { Component } from 'react';
import Button from './Button';
import NYloader from './NYloader';

let delta;
const api_key = '7f16504f47bf4bfd96b2211ee6d00507';
const url = 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Technology/1.json';
const query = `${url}?&api-key=${api_key}`;
const palette = [
    {background: '#E4E5E4', colorButton: '#5DC472', shadow: '#4A9A5A'},
    {background: '#F7AFA3', colorButton: '#2A68FC', shadow: '#1E3C83'},
    {background: '#F9D527', colorButton: '#8249DE', shadow: '#502F85'},
    {background: '#A9D29A', colorButton: '#EA530C', shadow: '#993607'},
    {background: '#2F2981', colorButton: '#F3B1AB', shadow: '#8D6460'},
    {background: '#BBD3EC', colorButton: '#C3CDE4', shadow: '#888FA1'}
]

class News extends Component {
    // let data = props;
    // console.log(data);
    // console.log(data);
    constructor(props) {
        super(props);
        this.state = {
            data: undefined,
            style: 0,
            background: '#E4E5E4',
            colorButton: '#2A68FC',
            shadowButton: '#1E3C83',
            error: false
        }
        this.down = this.down.bind(this);
        this.up = this.up.bind(this);
    }

    down(e) {
        this.setState({x: e.clientX});
        delta = 0;
    }
    up(e) {
        const len = this.state.data.length * 357;
        delta = this.state.x - e.clientX;
        let randomPalette = palette[Math.floor(Math.random() * 6)];
        // console.log(randomPalette); 
        // this.setState({delta});
        // console.log(delta);
        let abs = Math.abs(delta);
        // console.log(abs + 'yolo');
        var yolo = 357;
        var move = this.state.style;
        // (delta < 0) ? this.setState({style: (this.state.style += yolo)}) : this.setState({style: (this.state.style -= yolo)});
        if(move - delta >= -len && move - delta <= 0) {
            if(abs > 30) {
                // move = 0;
                (delta < 0) ? move = this.state.style + yolo : move = this.state.style - yolo;
                (move <= -len) ? this.setState({error: true}) : this.setState({error: false});
            }
        }
        this.setState({
            background: randomPalette.background,
            colorButton: randomPalette.colorButton,
            shadowButton: randomPalette.shadow,
            style: move,
        })
        console.log(move);
        console.log(len);
        // console.log(this.state.style);
    }

    display(result) {
        this.setState({data: result});
    }
    componentDidMount() {
        fetch(query)
            .then(response => response.json())
            .then(result => {
                this.setState({data: result.results});
                console.log(this.state.data)
            })
            .catch(error => error);
    }
    render() {
        const { style, data, error } = this.state;
        const txt = 'No more news ):';

        return (
            <div
            onMouseDown={this.down}
            onMouseUp={this.up}>
                <div className="cell" style={{background: `${this.state.background}`}}>
                    <div className={error ? 'sorry visible' : 'sorry'}><h1>{txt}</h1></div>
                    <div 
                    className="news"
                    style={{transform: `translateX(${this.state.style}px)`}}>
                        {data ? data.map((e, i) => {
                            return (
                                <div className="card" key={i}>
                                
                                    <img className="img" src={`${e.media[0]['media-metadata'][2].url}`} alt="" srcSet=""/>
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
                                    
                                    <Button color={this.state.colorButton} shadow={this.state.shadowButton}/>
                                </div>
                            )
                        }) : <NYloader />}
            
                    </div>
                </div>
            </div>
        )
    }
}


export default News;


// Data-Mining and Database Marketing;Europe;Online Advertising;Privacy;Social Media;Computers and the Internet;Advertising and Marketing;Regulation and Deregulation of Industry



{/* <div className="card">
            <div className="date"><i>24 June</i></div>
            
            <div className="title"><h1>Ciao a tutti</h1></div>
            <div className="abstract"><p>ai belli e ai brutti</p></div>
            <div className="tags">
                <div className="singleTag">Data-Mining and Database Marketing</div>
                <div className="singleTag">Europe</div>
                <div className="singleTag">Online Advertising</div>
                <div className="singleTag">Privacy</div>
                <div className="singleTag">Social Media</div>
            </div>
            <Button />
        </div> */}