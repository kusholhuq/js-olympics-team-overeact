import React from 'react';
import './App.css';
import Header from './components/Header';
import ColumnContainer from './components/ColumnContainer';
import Landing from './components/LandingPage';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayLanding: true
    }
    this.handleDisplay = this.handleDisplay.bind(this)
  }

  handleDisplay(){
    this.setState({
      displayLanding: !this.state.displayLanding
    })
  }

  render(){
    return (
      <div>
        <Header />
        {this.state.displayLanding
          ? <Landing
            handleDisplay={this.handleDisplay}
          />
          : <ColumnContainer />

        }
      </div>
    );
  }
}

export default App;
