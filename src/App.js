import React, { Component } from 'react';
import Navbar from './components/Navbar/navbar';
import Jumbotron from './components/Jumbotron/jumbotron';
import ImagesContainer from './components/Main/imagesContainer';
import Wrapper from './components/Wrapper/wrapper';
import flags from './flags.json';
import './app.css';
function importAll(r){
  return r.keys().map(r);
}
const images = importAll(require.context("./images", false, /\.(png)$/));

class App extends Component {
  state = {
    flags: images.map((e,i) => ({url: e, id: i}))
  }
  render() {
    return (
      <React.Fragment>
      <Navbar />
      <Jumbotron />
      <div className="row">
          {this.state.flags.map(flag => 
            <ImagesContainer
              id={flag.id}
              key={flag.id}
              image={flag.url} 
              alt={"flag"}
            />
          )
          }
      </div>
      </React.Fragment>
    );
  }
}

export default App;
