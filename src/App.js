import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
// import Card from './components/Card';
import News from './components/News';
import Cards from './components/Cards';
import NYloader from './components/NYloader';

const api_key = '7f16504f47bf4bfd96b2211ee6d00507';
const url = 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Technology/1.json';
const query = `${url}?&api-key=${api_key}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined
    }
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
    const { data } = this.state;
    // console.log(data)
    return (
      <div className="container">

        <News>
          {data ? <Cards data={data}/> : <NYloader />}
        </News>
        
        {/* {data ? data.map(e => {
          return (
            <div className="box">
              <div className="title"><h1>{e.title}</h1></div>
              <div className="abstract">{e.abstract}</div>
              <div className="abstract"><a href={e.url}>read full article</a></div>
              <div className="abstract"><h3>Tags:</h3></div>
              <div className="abstract">{e.adx_keywords}</div>
            </div>
          )
        }) : 'ciao'} */}
      </div>
    );
  }
}

export default App;
