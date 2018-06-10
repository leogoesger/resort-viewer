import React from 'react';
import {keys, lensProp, set, curry} from 'ramda';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const updateKey = curry((obj, key, value) => set(lensProp(key), value, obj));

const UserDefinedCard = ({userDefinedAttributes, onChange, mapping}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {keys(mapping).map((key, index) => (
        <FormControl key={`form-field-${key}`} style={{marginTop: '10px'}}>
          <InputLabel>{userDefinedAttributes[index]}</InputLabel>
          <Select
            value={mapping[key]}
            onChange={e => onChange(updateKey(mapping, key, e.target.value))}
            style={{width: '400px'}}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {userDefinedAttributes.map(attribute => (
              <MenuItem key={`select-field-${attribute}`} value={attribute}>
                {attribute}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </div>
  );
};

export default UserDefinedCard;
