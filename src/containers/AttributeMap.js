import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {head, keys} from 'ramda';
import {compose, setPropTypes} from 'recompose';

import {updateAttributeMap} from '../actions/resort';
import Layout from '../components/attributeMap/Layout';
import Error from './Error';

class AttributeMap extends React.PureComponent {
  componentDidMount() {
    document.title = 'UpMetric | Mapping';
  }

  getUploadedAttributes(resorts) {
    return keys(head(resorts));
  }

  render() {
    if (!this.props.resorts.length) {
      return <Error message={'Try upload some data first!'} />;
    }
    return (
      <Layout
        uploadedAttributes={this.getUploadedAttributes(this.props.resorts)}
        updateAttributeMap={m => this.props.updateAttributeMap(m)}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAttributeMap: map => dispatch(updateAttributeMap(map)),
  };
};

const mapStateToProps = state => {
  return {
    resorts: state.resort.resorts,
  };
};

const composer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  setPropTypes({
    resorts: PropTypes.array.isRequired,
    updateAttributeMap: PropTypes.func.isRequired,
  })
);

export default composer(AttributeMap);
