import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form/form';
import Results from './components/results'

class App extends React.Component {
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
  setResults = (body, header, statusCode) => {
    this.setState({Results:{
        statusCode,
        header,
        body,}

  })
};
 

  //


  //funtion that recieves the results
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form onReceiveResults={this.setResults}/>
        <Results body={this.state.Results} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
