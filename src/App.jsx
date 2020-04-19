import React from 'react';
import './App.css';
import MessageImg from './MessageImg/MessageImg'
import MessageBlock from './MessageBlock/MessageBlock';
import Properties from './Properties/Properties';


class App extends React.Component {



  render = () => {
    return (
      <div className="wrap">
        <div className="container">
          <MessageImg />
          <MessageBlock />
        </div>
        <Properties />
      </div>
    );
  }
}

export default App;
