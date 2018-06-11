import React from 'react';
import PropTypes from 'prop-types';
import {setPropTypes} from 'recompose';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import {navigateTo} from '../../utils/helpers';

const _getResort = getResort => resort => {
  navigateTo('/resort');
  getResort(resort);
};

const SummaryTable = ({tableItems, columnNames, mapping, getResort}) => {
  return (
    <div style={{width: '80%', margin: '40px auto', overflow: 'scroll'}}>
      <Table>
        <TableHead>
          <TableRow>
            {columnNames.map(
              column =>
                column.toLowerCase().includes('url') ? null : (
                  <TableCell key={column}>{column}</TableCell>
                )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableItems.map(item => (
            <TableRow
              hover
              key={item.NAME}
              style={{cursor: 'pointer'}}
              onClick={() => _getResort(getResort)(item)}
            >
              {columnNames.map(
                (column, i) =>
                  column.toLowerCase().includes('url') ? null : (
                    <TableCell key={`${item.NAME}${i}`}>
                      <span
                        style={{
                          width: column.includes('Address') ? '120px' : 'none',
                          overflow: 'hidden',
                          display: 'block',
                        }}
                      >
                        {item[mapping[column]]}
                      </span>
                    </TableCell>
                  )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default setPropTypes({
  tableItems: PropTypes.array.isRequired,
  columnNames: PropTypes.array.isRequired,
  mapping: PropTypes.object.isRequired,
})(SummaryTable);
