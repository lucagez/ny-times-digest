import React, { Component } from 'react';
import Sorry from './Sorry';

let delta, abs, randomPalette;
const len = 7140;
const palette = [
    {background: '#E4E5E4', colorButton: '#5DC472', shadow: '#4A9A5A'},
    {background: '#F7AFA3', colorButton: '#2A68FC', shadow: '#1E3C83'},
    {background: '#F9D527', colorButton: '#8249DE', shadow: '#502F85'},
    {background: '#A9D29A', colorButton: '#EA530C', shadow: '#993607'},
    {background: '#2F2981', colorButton: '#F3B1AB', shadow: '#8D6460'},
    {background: '#BBD3EC', colorButton: '#C3CDE4', shadow: '#888FA1'}
]

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined,
            style: 0,
            background: '#E4E5E4',
            colorButton: '#2A68FC',
            shadowButton: '#1E3C83',
            error: false,
            increment: 357
        }
        this.down = this.down.bind(this);
        this.up = this.up.bind(this);
    }

    down(e) {
        console.log(e.clientX);
        this.setState({x: e.clientX});
        delta = 0;
    }
    up(e) {
        console.log(e.clientX);
        var move = this.state.style;
        delta = this.state.x - e.clientX;
        randomPalette = palette[Math.floor(Math.random() * 6)];
        abs = Math.abs(delta);
        if(delta == 0) {
            if(e.clientX > ((window.innerWidth / 2) + (this.state.increment / 2.5))) {
                move = this.state.style - this.state.increment;
            } else if(e.clientX < ((window.innerWidth / 2) - (this.state.increment / 2.5))) {
                move = this.state.style + this.state.increment;
            }
        }
        if(move - delta >= -len && move - delta <= 0) {
            if(abs > 30) {
                (delta < 0) ? move = this.state.style + this.state.increment : move = this.state.style - this.state.increment;
            }
        }
        (move <= -7000) ? this.setState({error: true}) : this.setState({error: false});
        this.setState({
            background: randomPalette.background,
            colorButton: randomPalette.colorButton,
            shadowButton: randomPalette.shadow,
            style: move,
        })
    }
    render() {
        const { style, error, background} = this.state;
        return (
            <div
            onMouseDown={this.down}
            onMouseUp={this.up}
            onTouchStart={(e) => {
                this.down(e.touches[0])}}
            onTouchEnd={(e) => {
                    this.up(e.changedTouches[0])
                }}>
                <div className="cell" style={{background: `${background}`}}>
                    <Sorry visibility={error}/>
                    <div 
                    className="news"
                    style={{transform: `translateX(${style}px)`}}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default News;