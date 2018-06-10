import React from 'react';
import PropTypes from 'prop-types';
import {setPropTypes} from 'recompose';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const SummaryTable = ({tableItems, columnNames, mapping}) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {columnNames.map(column => (
            <TableCell key={column}>{column}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {tableItems.map(item => (
          <TableRow hover key={item.NAME} onClick={() => console.log('here')}>
            {columnNames.map((column, i) => (
              <TableCell key={`${item.NAME}${i}`}>
                {item[mapping[column]]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default setPropTypes({
  tableItems: PropTypes.array.isRequired,
  columnNames: PropTypes.array.isRequired,
  mapping: PropTypes.object.isRequired,
})(SummaryTable);
