import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import { propTypes } from 'react-json-pretty';



class Main extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
  , rootElement);
