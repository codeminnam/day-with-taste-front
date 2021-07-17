import React from 'react';
import Modal from '../common/Modal';
import { CloseIcon } from '../../public/svg';
import styled from 'styled-components';
import PrimaryText from '../common/PrimaryText';

const Container = styled.main`
  width: 100%;
  height: 100%;
  background: #427d96;
  border-radius: 30px;
`;
const DescContainer = styled.div`
  position: relative;
`;
const BodyContainer = styled.div`
  padding: 48px 0;
`;
const TitleText = styled(PrimaryText)`
  font-style: normal;
  font-weight: normal;
  padding: 0 24px;
  font-size: 24px;
  line-height: 35.52px;
  margin-bottom: 32px;
`;
const BodyText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  padding: 0 24px;
  font-size: 18px;
  white-space: pre-line;
  line-height: 26.64px;
  color: #fff;
`;
const CloseIconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 24px;

  path {
    stroke: #fff;
  }
`;

const ResultModal = (props: {
  handleModalClosed: () => void;
  isVisible: boolean;
}) => {
  const { handleModalClosed, isVisible } = props;

  return (
    <>
      <Modal
        isVisible={isVisible}
        width={312}
        handleModalClosed={handleModalClosed}>
        <DescContainer>
          <CloseIconContainer onClick={handleModalClosed}>
            <CloseIcon />
          </CloseIconContainer>
          <Container>
            <BodyContainer>
              <TitleText color="white">
                당신과{'\n'}
                똑같은 선택지를 고른 {'\n'}
                누군가로부터 {'\n'}
                음악이 도착했습니다.
              </TitleText>
              <BodyText>혹시 내 영혼의 단짝...?</BodyText>
            </BodyContainer>
          </Container>
        </DescContainer>
      </Modal>
    </>
  );
};
export default ResultModal;
