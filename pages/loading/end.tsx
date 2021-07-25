import Layout from '../../components/Layout';
import Quote from '../../components/layout/Quote';
import Router from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postResult } from '../../reducers/songReducer';
import { Result } from '../../interfaces';
import { RootState } from '../../reducers';

const EndLoadingPage = () => {
  const result = useSelector((state: RootState) => state.songs.result);

  const dispatch = useDispatch();
  const moveToNextPage = () => {
    Router.push('/result-desc');
  };

  useEffect(() => {
    try {
      dispatch(postResult(result as Result));
    } catch (e) {
      console.log(e);
    }
  }, [result]);

  useEffect(() => {
    window.setTimeout(moveToNextPage, 3000);
  }, []);

  return (
    <Layout color={'blue'}>
      <Quote themeColor={'light'} contents={'하루를 마무리 하는 중...'} />
    </Layout>
  );
};

export default EndLoadingPage;
