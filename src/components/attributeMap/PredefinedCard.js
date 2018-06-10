import React from 'react';

const PredefinedCard = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '26px',
        textAlign: 'right',
      }}
    >
      {props.predefinedAttributes.map(attribute => (
        <div key={attribute} style={{height: '48px', marginTop: '10px'}}>
          {attribute}
        </div>
      ))}
    </div>
  );
};

export default PredefinedCard;
