import React from 'react';
import CostsGraph from './CostsGraph';
import UpdateDataForm from './UpdateDataForm';

const Costs = () => (
  <React.Fragment>
    <div>
      <h1>Your Monthly Costs</h1>
      <p>View your monthly bill, as well as your savings each month.</p>
    </div>
    <div className='divider' />
    <CostsGraph />
    <UpdateDataForm />
  </React.Fragment>
)

export default Costs;



