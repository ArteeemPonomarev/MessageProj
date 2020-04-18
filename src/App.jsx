import React from 'react';
import './App.css';
import MessageImg from './MessageImg/MessageImg'
import MessageBlock from './MessageBlock/MessageBlock';


class App extends React.Component {
  render = () => {
    return (
      <div class="container">
        <MessageImg />
        <MessageBlock />
    </div>
    );
  }
}

export default App;
