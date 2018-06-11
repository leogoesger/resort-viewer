import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose, setPropTypes} from 'recompose';
import {getResort} from '../actions/resort';

import Error from './Error';
import Layout from '../components/resort/Layout';

class Resort extends React.PureComponent {
  componentDidMount() {
    document.title = 'UpMetric | Resort';
  }

  getNextResort(resort, resorts, mapping) {
    const index = resorts.findIndex(
      r => r[mapping['Name']] === resort[mapping['Name']]
    );
    return index === resorts.length - 1
      ? this.props.getResort(resorts[0])
      : this.props.getResort(resorts[index + 1]);
  }

  getPrevResort(resort, resorts, mapping) {
    const index = resorts.findIndex(
      r => r[mapping['Name']] === resort[mapping['Name']]
    );
    return index === 0
      ? this.props.getResort(resorts[resorts.length - 1])
      : this.props.getResort(resorts[index - 1]);
  }

  render() {
    const {resort, resorts, mapping} = this.props;
    if (!Object.keys(resort).length) {
      return (
        <Error
          message={
            'Looks like there is no data uploaded. You can go back to Upload page to upload data!'
          }
        />
      );
    }

    return (
      <Layout
        resort={resort}
        mapping={mapping}
        getNextResort={() => this.getNextResort(resort, resorts, mapping)}
        getPrevResort={() => this.getPrevResort(resort, resorts, mapping)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    resorts: state.resort.resorts,
    resort: state.resort.resort,
    mapping: state.resort.mapping,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getResort: r => dispatch(getResort(r)),
  };
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  setPropTypes({
    resort: PropTypes.object.isRequired,
    mapping: PropTypes.object.isRequired,
  })
);
export default enhancer(Resort);
