import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Card from './Card';
import Frame from './Frame';

const api_key = '7f16504f47bf4bfd96b2211ee6d00507';
const url = 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Technology/1.json';
const query = `${url}?&api-key=${api_key}`;

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: 12,
        }    
        this.down = this.down.bind(this);
        this.up = this.up.bind(this);
    }
    down(e) {
        this.setState({x: e.clientX});
    }
    up(e) {
        const delta = this.state.x - e.clientX;
        // this.setState({delta});
        console.log(delta);
        var yolo = 357;
        (delta < 0) ? this.setState({style: (this.state.style += yolo)}) : this.setState({style: (this.state.style -= yolo)});
        console.log(this.state.style);
    }

    



    // componentDidMount() {
    //     const move = ReactDOM.findDOMNode(Card);
    // }
    render() {
        const { style, data } = this.state;
        return (
            <div 
                onMouseDown={this.down}
                onMouseUp={this.up}

                >
                <div className="cell" >
                    <div 
                    style={{transform: `translateX(${this.state.style}px)`}} 
                    className="news"
                    >
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;