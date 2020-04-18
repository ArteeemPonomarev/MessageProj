import React from 'react';
import './App.css';


class App extends React.Component {
  render = () => {
    return (
      <div class="container">
        <div class="message__img">
            <img src="ava.jpg" alt="avatar" class="message__img-avatar"/>
        </div>
        <div class="message">
            <div class="message__block">
                <h3 class="messager__block-username">
                    Артем Пономарев
                </h3>
                <p class="message__block-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    
                </p>
                <div class="message__block-time">
                    20:10
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
