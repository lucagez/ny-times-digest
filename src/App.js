import React, { Component } from 'react';
import './App.css';
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
    return (
      <div className="container">
        <News>
          {data ? <Cards data={data}/> : <NYloader />}
        </News>
      </div>
    );
  }
}

export default App;
