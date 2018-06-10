import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {setPropTypes} from 'recompose';

const SummaryTable = ({tableItems, columnNames}) => {
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
              <TableCell key={`${item.NAME}${i}`}>{item[column]}</TableCell>
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
})(SummaryTable);
