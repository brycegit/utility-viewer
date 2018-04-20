import React from 'react';
import UsageGraph from './UsageGraph';
import UpdateDataForm from './UpdateDataForm';

const Costs = () => (
  <React.Fragment>
    <div>
      <h1>Your Monthly Energy Usage</h1>
      <p>Take a look at your energy usage each month.</p>
    </div>
    <div className='divider' />
    <UsageGraph />
    <UpdateDataForm />
  </React.Fragment>
)

export default Costs;



