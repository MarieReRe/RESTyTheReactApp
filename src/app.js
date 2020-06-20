import React from 'react';

import { Switch, Route } from 'react-router-dom';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form/form';
import Results from './components/results';
import History from './components/history'
import About from './components/about'
import Nav from './components/nav'


//parent
export default class App extends React.Component {
  constructor(props) {
    super(props)

    //state
    this.state = {
     Results: {
        statusCode: null,
        header: null,
        body: null,
     },

    }
  }

 //method goes here: this is what the results page will use to eventually render the results....parent to child
  setResults = (body, header, statusCode, History) => {
    this.setState({
      Results:{
        statusCode,
        header,
        body,},
        History: JSON.parse(window.localStorage.getItem('history'))|| [],
  })
};
 

  //


  //funtion that recieves the results
  //onRecieveResults is a prop
  render() {
    return (
      <React.Fragment>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Form onReceiveResults={this.setResults}/>
            <Results body={this.state.Results} />
          </Route>
          <Route exact path ="/about"  component={About}>

          </Route>
          <Route exact path="/history">
            <History history={this.state.History}/>
          </Route>
  
        <Footer />
        </Switch>
      </React.Fragment>
    );
  }
}


