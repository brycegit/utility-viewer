import React from 'react';
import Loader from './Loader';

export const DataContext = React.createContext({});

class DataContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      updateData: this.updateData.bind(this),
      data: []
    };
  }

  render() {
    return (
      <DataContext.Provider value={this.state}>
        {this.state.data.length ? 
          this.props.children :
          <Loader />
        }
      </DataContext.Provider>
    )
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const data = fetch('/api')
    .then(data => data.json())
    .then(data => this.sortData(data))
    .then(data => {
      if(!this.state.data.length) {
        this.setState(() => ({ data }));
      }
    });
  }

  sortData(data) {
    return data.sort((a,b) => {
      // Add a 'total' field to each set during the sort loop.
      // For bigger data sets this loop should be done server-side or via web worker.
      a.total = (a.bill + a.savings).toFixed(2);
      b.total = (b.bill + b.savings).toFixed(2);

      return (a.month + a.year * 12) - (b.month + b.year * 12)
    });
  }

  updateData({ index, data }) {    
    this.setState((prevState) => {
      const updatedData = prevState.data.slice();
      updatedData[index] = Object.assign(updatedData[index], data);
      return { data: this.sortData(updatedData) }
    });
  }
}

export default DataContainer;