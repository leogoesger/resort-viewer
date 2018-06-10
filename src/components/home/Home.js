import React from 'react';
import Uploader from '../../containers/Uploader';

const Home = () => (
  <div style={{width: '80%', margin: '0 auto', justifyContent: 'space-around'}}>
    <div>
      <h1>UpMetric Resort Viewer</h1>
      <p>
        {
          'The app takes the provided .csv, display the results in a table, and show a detailed view for each resort.'
        }
      </p>
      <p>
        {
          'Uploader expects the following column headers: name, url, trail map url, logo url, address, phone, hours of operation, lifts, trails, acres and terrin park. The name of each header can be changed to anything, but it needs to have 11 columns.'
        }
      </p>
      <div>
        <Uploader />
      </div>
    </div>
  </div>
);

export default Home;
