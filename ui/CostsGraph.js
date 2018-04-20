import React from 'react';
import { DataContext } from './DataContainer';
import { ResponsiveContainer, ComposedChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, Bar, LabelList } from 'recharts';
import constants from './constants';

const CostsGraph = () => {
  return (
    <DataContext.Consumer>
      {store => (
        <div className='graph'>
          <ResponsiveContainer height={500}>
            <ComposedChart data={store.data}>
              <XAxis stroke='#212121' dataKey='month' tickFormatter={value => constants.MONTHS[value]} />
              <YAxis stroke='#212121' tickFormatter={value => '$' + value} />
              <Tooltip formatter={(value, name, props) => '$' + value} labelFormatter={value => constants.MONTHS[value]}/>
              <Legend height={75} wrapperStyle={{marginTop: '25px'}} verticalAlign="top" />
              <CartesianGrid stroke='#eee' />
              <Bar dataKey='total' name='Total Before Savings' fill='#C9C19D' />
              <Bar dataKey='bill' name='Your Bill' fill='#8ED4E2' />
              <Line type='monotone' name='Your Savings' dataKey='savings' stroke='#dea754' strokeWidth={4}>
                <LabelList 
                    formatter={(value, name, props) => '$' + value} 
                    dataKey="savings" 
                    position="top"/>
              </Line>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      )}
    </DataContext.Consumer>  
  )
}

export default CostsGraph;