import React from 'react';
import styled from 'styled-components';
import TitleText from '../common/TitleText';
import Button from '../common/Button';
import { SmallLogoIcon } from '../../public/svg';
import Router from 'next/router';
import { RootState } from '../../reducers';
import { useSelector } from 'react-redux';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 812px;

  @media only screen and (max-height: 812px) {
    height: 100vh;
  }

  @media only screen and (max-height: 480px) {
    height: 100%;
  }
  margin-left: 24px;
  @media only screen and (max-width: 280px) {
    margin-left: 8px;
  }
`;

const UpperContainer = styled.div``;
const UpperContentContainer = styled.div``;
const ButtonContainer = styled.div`
  margin: 48px 0;

  @media only screen and (max-height: 480px) {
    margin: 32px 0;
  }
`;
const Header = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;
const BodyText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  white-space: pre-line;
  line-height: 26.64px;
  color: #fff;
`;

const ResultDesc = () => {
  const randomMusic = useSelector(
    (state: RootState) => state.songs.randomMusic
  );
  const result = useSelector((state: RootState) => state.songs.result);

  const moveToNextPage = (randomMusicId: string) => {
    Router.push(`/result?result=${result?.result}&musicId=${randomMusicId}`);
  };

  const handleClick = async () => {
    try {
      moveToNextPage(randomMusic?.data?.randomMusic as string);
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  return (
    <Container>
      <UpperContainer>
        <Header>
          <SmallLogoIcon color={'lightBlue'} />
        </Header>
        <UpperContentContainer>
          <TitleText style={{ marginBottom: 20 }} color={'white'}>
            열한 번의 선택을 한{'\n'}
            오늘 하루
          </TitleText>
          <BodyText>
            당신과 같은 선택으로 {'\n'}
            하루를 보낸 누군가의 음악 취향은,{'\n'}
            당신의 음악 취향과 맞을까요?{'\n'}
            {'\n'}
            똑같은 하루를 보낸{'\n'}
            영혼의 단짝으로부터 온 음악을{'\n'}
            확인해 보세요.
          </BodyText>
        </UpperContentContainer>
      </UpperContainer>
      <ButtonContainer>
        <Button onClick={() => handleClick()} label={'음악 확인하기'}>
          음악 확인하기
        </Button>
      </ButtonContainer>
    </Container>
  );
};
export default ResultDesc;
