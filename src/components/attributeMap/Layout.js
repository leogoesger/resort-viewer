import React from 'react';
import {zipObj} from 'ramda';
import {withState, withHandlers, compose} from 'recompose';

import AttributeMapOverview from './AttributeMapOverview';
import PredefinedCard from './PredefinedCard';
import UserDefinedCard from './UserDefinedCard';

const predefinedAttributes = [
  'Name',
  'Url',
  'Trail Map Url',
  'Logo Url',
  'Address',
  'Phone',
  'Hours Of Operation',
  'Lifts',
  'Trails',
  'Acres',
  'Terrain Park',
];

const Layout = ({
  uploadedAttributes,
  updateAttributeMap,
  onChange,
  mapping,
}) => {
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
    </div>
  );
};

const createEmptyMap = (attributes, props) => {
  const arr = new Array(attributes.length).fill('');
  return zipObj(attributes, arr);
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
  })
);

export default enhance(Layout);
