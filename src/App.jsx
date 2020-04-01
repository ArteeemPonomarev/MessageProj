import React from 'react';
import './App.css';
import UserMessage from './UserMessage/UserMessage';


class App extends React.Component {
  render = () => {
    return (
      <div className="wraper">
        <UserMessage />
      </div>
    );
  }
}

export default App;
