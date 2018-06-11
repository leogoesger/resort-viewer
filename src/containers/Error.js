import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose, setPropTypes} from 'recompose';

import Layout from '../components/error/Layout';

class Error extends React.PureComponent {
  render() {
    return <Layout message={this.props.message} />;
  }
}

const mapStateToProps = state => {
  return {
    resortError: state.resort.error,
  };
};

const enhancer = compose(
  connect(
    mapStateToProps,
    null
  ),
  setPropTypes({
    resortError: PropTypes.string.isRequired,
    message: PropTypes.string,
  })
);

export default enhancer(Error);
