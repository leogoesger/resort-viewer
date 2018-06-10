import React from 'react';
import Layout from '../components/about/Layout';

class About extends React.PureComponent {
  componentDidMount() {
    document.title = 'UpMetric | About';
  }

  render() {
    return <Layout />;
  }
}

export default About;
