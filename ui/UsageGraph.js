import React from 'react';
import { DataContext } from './DataContainer';
import { ResponsiveContainer, ComposedChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, Bar, LabelList } from 'recharts';
import constants from './constants';

const UsageGraph = () => {
  return (
    <DataContext.Consumer>
      {store => (
        <div className='graph'>
          <ResponsiveContainer height={500}>
            <ComposedChart data={store.data}>
              <XAxis stroke='#212121' dataKey='month' tickFormatter={value => constants.MONTHS[value]} />
              <YAxis stroke='#212121' />
              <Tooltip 
                formatter={(value, name, props) => name !== 'Kilowatt Hours' ? '$' + value : value} 
                labelFormatter={value => constants.MONTHS[value]}/>
              <Legend height={75} wrapperStyle={{marginTop: '25px'}} verticalAlign="top" />
              <CartesianGrid stroke='#eee' />
              {/* <Line type='monotone' dataKey='savings' stroke='#78735D' /> */}
              <Area type='monotone' name='Kilowatt Hours' dataKey='kwh' fill='#dea754' stroke='#da9e43' />
              {/* <Bar dataKey='total' name='Total Before Savings' fill='#78735D' /> */}
              <Bar dataKey='bill' name='Your Bill' fill='#8ED4E2'>
                <LabelList 
                  formatter={(value, name, props) => '$' + value} 
                  dataKey="bill" 
                  position="top" />
              </Bar>
              {/* <Line type='monotone' name='Your Savings' dataKey='savings' stroke='#dea754' strokeWidth={3} /> */}
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      )}
    </DataContext.Consumer>  
  )
}

export default UsageGraph;