import axios from 'axios';
import { BASE_URL } from './constants';

export const getMainData = async () => {
  const data = await axios.get(BASE_URL).then(({data}) => data);
  return data;
}