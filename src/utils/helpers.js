import {zipObj} from 'ramda';
import {history} from '../store/configureStore';

export function navigateTo(pathname, query) {
  history.push({pathname, query});
}

export function createEmptyMap(attributes, props) {
  const arr = new Array(attributes.length).fill('');
  return zipObj(attributes, arr);
}
