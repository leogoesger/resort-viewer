import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose, setPropTypes} from 'recompose';

import {getResort} from '../actions/resort';
import Layout from '../components/summary/Layout';

class Summary extends React.PureComponent {
  componentDidMount() {
    document.title = 'UpMetric | Resorts';
  }

  render() {
    return (
      <Layout
        resorts={this.props.resorts}
        mapping={this.props.mapping}
        getResort={r => this.props.getResort(r)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    resorts: state.resort.resorts,
    mapping: state.resort.mapping,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getResort: r => dispatch(getResort(r)),
  };
};

const composer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  setPropTypes({resorts: PropTypes.array.isRequired})
);

export default composer(Summary);
