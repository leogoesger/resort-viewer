import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose, setPropTypes} from 'recompose';

import Layout from '../components/summary/Layout';

class Summary extends React.PureComponent {
  render() {
    if (!this.props.resorts.length) {
      return null;
    }
    return <Layout resorts={this.props.resorts} />;
  }
}

const mapStateToProps = state => {
  return {
    resorts: state.resort.resorts,
  };
};

const composer = compose(
  connect(mapStateToProps, null),
  setPropTypes({resorts: PropTypes.array.isRequired})
);

export default composer(Summary);
