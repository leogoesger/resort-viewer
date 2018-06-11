import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose, setPropTypes} from 'recompose';

import Error from './Error';
import Layout from '../components/resort/Layout';

class Resort extends React.PureComponent {
  componentDidMount() {
    document.title = 'UpMetric | Resort';
  }

  render() {
    if (!Object.keys(this.props.resort).length) {
      return (
        <Error
          message={
            'Looks like there is no data uploaded. You can go back to Upload page to upload data!'
          }
        />
      );
    }

    return <Layout resort={this.props.resort} mapping={this.props.mapping} />;
  }
}

const mapStateToProps = state => {
  return {
    resort: state.resort.resort,
    mapping: state.resort.mapping,
  };
};

const enhancer = compose(
  connect(
    mapStateToProps,
    null
  ),
  setPropTypes({
    resort: PropTypes.object.isRequired,
    mapping: PropTypes.object.isRequired,
  })
);
export default enhancer(Resort);
