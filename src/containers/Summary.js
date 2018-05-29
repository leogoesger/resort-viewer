import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Layout from '../components/summary/Layout';

class Summary extends React.Component {
  render() {
    return <Layout resorts={this.props.resorts} />;
  }
}

const mapStateToProps = state => {
  return {
    resorts: state.resort.resorts,
  };
};

export default connect(mapStateToProps, null)(Summary);

Summary.propTypes = {
  resorts: PropTypes.array.isRequired,
};
