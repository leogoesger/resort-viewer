import React from 'react';
import PropTypes from 'prop-types';
import {keys, zipObj, curry} from 'ramda';
import {task} from 'folktale/concurrency/task';
import {withState, withHandlers, compose, setPropTypes} from 'recompose';
import Button from '@material-ui/core/Button';

import {createEmptyMap, navigateTo} from '../../utils/helpers';
import {predefinedAttributes} from '../../utils/constants';
import AttributeMapOverview from './AttributeMapOverview';
import PredefinedCard from './PredefinedCard';
import UserDefinedCard from './UserDefinedCard';

const compareAttributes = curry((userDefinedAttributes, mapping) => {
  const newMapValues = keys(mapping).map(
    (key, index) => (mapping[key] ? mapping[key] : userDefinedAttributes[index])
  );
  return zipObj(keys(mapping), newMapValues);
});

const _navigateTo = (location, newMapping, updateAttributeMap) => {
  return task(res => {
    navigateTo('/summary');
    debugger;
    res.resolve(updateAttributeMap(newMapping));
  });
};

const Layout = ({
  uploadedAttributes,
  updateAttributeMap,
  onChange,
  mapping,
}) => {
  const compareWithInitAttributes = compareAttributes(uploadedAttributes);
  return (
    <div>
      <AttributeMapOverview />
      <div style={styles.panels}>
        <PredefinedCard predefinedAttributes={predefinedAttributes} />
        <UserDefinedCard
          userDefinedAttributes={uploadedAttributes}
          mapping={mapping}
          onChange={d => onChange(d)}
        />
      </div>

      <Button
        variant="raised"
        color="primary"
        onClick={() =>
          _navigateTo(
            '/summary',
            compareWithInitAttributes(mapping),
            updateAttributeMap
          ).run()
        }
      >
        Continue
      </Button>
    </div>
  );
};

const styles = {
  panels: {
    width: '86%',
    display: 'flex',
    justifyContent: 'space-around',
  },
};

const enhance = compose(
  withState('mapping', 'setMapping', props =>
    createEmptyMap(predefinedAttributes, props)
  ),
  withHandlers({
    onChange: props => data => props.setMapping(data),
  }),
  setPropTypes({
    uploadedAttributes: PropTypes.array.isRequired,
    updateAttributeMap: PropTypes.func.isRequired,
  })
);

export default enhance(Layout);
