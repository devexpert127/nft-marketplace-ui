import { SERVER_URL } from '../config/constants';
import CustomFetch from './CustomFetch';

export const getAndReturnApiData = async (url, param) => {
  try {
    let response = await CustomFetch(
      `${SERVER_URL}/${url}/${param}`,
      null,
      'get',
    );

    console.log({ response });
    if (response.status === 200) {
      return response.payload;
    }
  } catch (error) {
    console.log(error);
  }
};

export const postAndReturnApiData = async (url, params) => {
  try {
    let response = await CustomFetch(
      `${SERVER_URL}/collection/getCollection/${publicKey}`,
      null,
      'get',
    );

    console.log({ response });
    if (response.status === 200) {
      setNfts(response.payload);
    }
  } catch (error) {
    console.log(error);
  }
};
