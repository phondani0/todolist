import React, {
  Component
} from 'react';
import './App.css';
import Lists from './components/Lists';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <div className="container">
          <Lists />
        </div>
      </div>
    );
  }
}

export default App;