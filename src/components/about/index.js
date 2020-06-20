
import React from 'react';
import { Link, Route } from 'react-router-dom';
import { If } from '../if';
import Modal from '../modal';

export default class Home extends React.Component {
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
        <p>You might be interested in our <Link to="/users">Users</Link></p>

        <button onClick={this.toggleSearchOurApiModalUsModal}>Contact Us</button>
        or
        <Link to="/contact">Contact Us via Route</Link>

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
