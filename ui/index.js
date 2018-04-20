import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Costs from './Costs';
import Usage from './Usage';
import DataContainer from './DataContainer';

const Pages = {
  Costs,
  Usage
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      page: 'Costs'
    }

    this.navigate = this.navigate.bind(this);
  }

  render() {
    const Page = Pages[this.state.page];

    return (
      <React.Fragment>
        <Nav navigate={this.navigate} />
        <DataContainer>
          <Page />
        </DataContainer>
        <div className='footer'>5352 Health Camp Rd, Homer, NY 13077 | 10 Ware St, Cambridge, MA 02138</div>
      </React.Fragment>
    )
  }

  navigate(e) {
    const page = e.currentTarget.textContent
    
    this.setState(() => ({ page }));
  }
}

ReactDOM.render(<App />, document.getElementById('app'));