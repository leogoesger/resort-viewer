import React from 'react';
import PropTypes from 'prop-types';
import {compose, setPropTypes} from 'recompose';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import ImageDialog from '../shared/ImageDialog';
import {navigateTo} from '../../utils/helpers';

const ResortOverview = ({resort, mapping, getNextResort}) => (
  <div
    style={{
      width: '80%',
      margin: '40px auto',
      display: 'flex',
      justifyContent: 'space-around',
    }}
  >
    <div style={{width: '25%'}}>
      <img
        src={resort[mapping['Logo Url']]}
        alt="logo"
        style={{width: '200px'}}
      />
    </div>
    <Card style={{width: '70%', height: '600px'}}>
      <div
        style={{
          width: '90%',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '20px auto 0px auto',
        }}
      >
        <Button
          size="small"
          color="primary"
          onClick={() => navigateTo('/resorts')}
        >
          {'Back'}
        </Button>
        <Button size="small" color="primary" onClick={() => getNextResort()}>
          {'Next'}
        </Button>
      </div>

      <CardContent style={{paddingTop: '0px'}}>
        <h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={resort[mapping['Url']]}
          >
            {resort[mapping['Name']]}
          </a>
        </h1>
        <div>
          <ul>
            <li>{`Website: ${resort[mapping['Url']]}`}</li>
            <li>{`Address: ${resort[mapping['Address']]}`}</li>
            <li>{`Phone: ${resort[mapping['Phone']]}`}</li>
            <li>{`Hours Of Operation: ${
              resort[mapping['Hours Of Operation']]
            }`}</li>
            <li>{`Lifts: ${resort[mapping['Lifts']]}`}</li>
            <li>{`Trails: ${resort[mapping['Trails']]}`}</li>
            <li>{`Acres: ${resort[mapping['Acres']]}`}</li>
            <li>{`Terrain Park: ${resort[mapping['Terrain Park']]}`}</li>
          </ul>
        </div>
      </CardContent>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: '20px',
        }}
      >
        <ImageDialog
          buttonText={'See Trail Map'}
          imageUrl={resort[mapping['Trail Map Url']]}
        />
      </div>
    </Card>
  </div>
);

const enhancer = compose(
  setPropTypes({
    resort: PropTypes.object.isRequired,
    mapping: PropTypes.object.isRequired,
    getNextResort: PropTypes.func.isRequired,
  })
);
export default enhancer(ResortOverview);
