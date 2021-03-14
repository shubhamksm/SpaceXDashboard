import axios from 'axios';
import { BASE_URL } from './constants';

export const getMainData = async ( query ) => {
  const data = await axios.get(BASE_URL, {
    params: {
      limit: 100,
      ...query,
    }
  }).then(({data}) => data);
  return data;
}