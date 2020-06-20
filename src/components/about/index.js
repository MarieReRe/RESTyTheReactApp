
import React from 'react';
import { Link, Route } from 'react-router-dom';
import { If } from '../if';
import Modal from '../modal';

export default class About extends React.Component {
  constructor() {
    super();

    this.state = {
      showSearchOurApi: false,
    };
  }

  toggleSearchOurApiModal = () => {
    this.setState(oldState => ({ showSearchOurApi: !oldState.showSearchOurApi }));
  }

  render() {
    const { showSearchOurApi } = this.state;
    // injected into Home because we used <Route component={Home} />
    const { history } = this.props;

    return (
      <>
        <h2>Welcome</h2>
        <p> RESTy is an app based on the design of another app called Postman!</p>
        <p>You might be interested in our <Link to="/">API Search</Link></p>

        <button onClick={this.toggleSearchOurApiModalUsModal}>Search Our Api</button>
        <If condition={showSearchOurApi}>
          <Modal title="Search" onClose={this.toggleSearchOurApiModalUsModal}>
            Google me, dummy
          </Modal>
        </If>

        <Route path="/contact">
          <Modal title="Contact Us" onClose={() => history.push('/')}>
            Google me, dummy (via routing!)
          </Modal>
        </Route>
      </>
    )
  }
}
