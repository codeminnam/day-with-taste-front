import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';
import TitleText from '../common/TitleText';
import Button from '../common/Button';
import { useDispatch } from 'react-redux';
import { getSongs, setSongs } from '../../reducers/songReducer';
import { PickSong } from './PickSong';
import { CloseIcon, SmallLogoIcon } from '../../public/svg';
import DescModal from './DescModal';

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
const Input = styled.input`
  width: 311px;
  height: 40px;

  @media only screen and (max-width: 320px) {
    width: 264px;
  }

  padding-left: 17px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #427d96;
  background: #ffffff;
  border-radius: 30px;
  ::placeholder {
    color: #e4edf2;
  }
`;
const CloseIconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 15px;
`;
const PickSongContainer = styled.div`
  position: relative;
`;

const InputMusic = () => {
  const [isDescVisible, setIsDescVisible] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const handleClick = async () => {
    try {
      await dispatch(getSongs(keyword));
      setIsVisible(true);
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  return (
    <Container>
      <UpperContainer>
        <Header>
          <SmallLogoIcon color={'orange'} />
        </Header>
        <UpperContentContainer>
          <TitleText style={{ marginBottom: 108 }}>
            잠결에 들리는 음악소리...{'\n'}
            내가 좋아하는 곡으로 {'\n'}
            하루가 시작되어 기분이 좋다.
          </TitleText>
          <Input
            placeholder={'노래 제목과 아티스트 이름'}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </UpperContentContainer>
      </UpperContainer>
      <ButtonContainer>
        <Button
          onClick={() => handleClick()}
          label={'이 노래는 바로바로바로...!'}
          color={'orange'}
          disabled={keyword === ''}>
          이 노래는 바로바로바로...!
        </Button>
        <Modal
          isVisible={isVisible}
          width={312}
          handleModalClosed={() => {
            dispatch(setSongs([]));
            setIsVisible(false);
          }}>
          <PickSongContainer>
            <CloseIconContainer
              onClick={() => {
                dispatch(setSongs([]));
                setIsVisible(false);
              }}>
              <CloseIcon />
            </CloseIconContainer>
            <PickSong />
          </PickSongContainer>
        </Modal>
      </ButtonContainer>
      <DescModal
        handleModalClosed={() => setIsDescVisible(false)}
        isVisible={isDescVisible}
      />
    </Container>
  );
};
export default InputMusic;
