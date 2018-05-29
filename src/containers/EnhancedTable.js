import {compose, withProps} from 'recompose';

import SummaryTable from '../components/SummaryTable';

const enhancer = compose(
  withProps({
    tableItems: [
      {
        id: 1,
        name: 'ski1',
        acre: '12000',
        url: 'www.google.com',
        price: '$20/day',
      },
      {
        id: 2,
        name: 'ski2',
        acre: '12000',
        url: 'www.google.com',
        price: '$20/day',
      },
      {
        id: 3,
        name: 'ski3',
        acre: '12000',
        url: 'www.google.com',
        price: '$20/day',
      },
      {
        id: 4,
        name: 'ski4',
        acre: '12000',
        url: 'www.google.com',
        price: '$20/day',
      },
    ],
    columnNames: ['id', 'name', 'acre', 'url', 'price'],
  })
);

export default enhancer(SummaryTable);
