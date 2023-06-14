import {useState, useEffect} from 'react';

import makeRequest from '../utility/makeRequest';

const useFetchedData = <T extends any>(url: string) => {
  const [loader, setLoader] = useState(true);
  const [list, setList] = useState<T[]>([]);

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    try {
      setLoader(true);
      const response = await makeRequest<T[]>({
        url,
        method: 'GET',
      });
      //   console.log('Response Data of', response.data);
      setList(response.data);
    } catch (error) {
      console.log('Error message', error);
    } finally {
      setLoader(false);
    }
  };

  return {
    loader,
    list,
  };
};

export {useFetchedData};
