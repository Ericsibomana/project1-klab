import React, { useState, useEffect } from 'react';
import DashboardNavBar from './DashboardNavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import chart libraries
import { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import {
  faUser,
  faComment,
  faEye,
  faNewspaper
} from '@fortawesome/free-solid-svg-icons';

function Chart() {

  const data = [
    {
      name: 'User',
      uv: 10,
      value: 80,
      amt: 2400,
    },
    {
      name: 'Post',
      uv: 10,
      value: 50,
      amt: 2210,
    },
    {
      name: 'View',
      value: 80,
    },
    {
      name: 'Comment',
      uv: 10,
      value: 100,
      amt: 2000,
    },
  
  ];

  return (
    <>
      <DashboardNavBar />
      <section className="section-two">
        <div className="main-container">
          <div className="main-title">
            <h2>VIEW DASHBOARD</h2>
          </div>

          <div className="main-cards">
            <div className="card">
              <div className="card-inner">
                <h2>User</h2>
                <h1>
                  <FontAwesomeIcon icon={faUser} className='card-icon'/>
                </h1>
              </div>
              <h1>{data.users}</h1>
            </div>

            <div className="card">
              <div className="card-inner">
                <h2>Post</h2>
                <h1>
                  <FontAwesomeIcon icon={faNewspaper} className='card-icon'/>
                </h1>
              </div>
              <h1>{data.posts}</h1>
            </div>

            <div className="card">
              <div className="card-inner">
                <h2>View</h2>
                <h1>
                  <FontAwesomeIcon icon={faEye} className='card-icon'/>
                </h1>
              </div>
              <h1>{data.views}</h1>
            </div>

            <div className="card">
              <div className="card-inner">
                <h2>Comment</h2>
                <h1>
                  <FontAwesomeIcon icon={faComment} className='card-icon'/>
                </h1>
              </div>
              <h1>{data.comments}</h1>
            </div>
          </div>
          <div className="graphic-chart">
        <BarChart
          width={800}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#7F0101" background={{ fill: '#eee' }} />
        </BarChart>
        </div>
        </div>
      </section>
    </>
  );
}

export default Chart;
