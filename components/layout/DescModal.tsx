import React from 'react';
import Modal from '../common/Modal';
import { RightArrowIcon } from '../../public/svg';
import styled from 'styled-components';
import PrimaryText from '../common/PrimaryText';
import Circle from '../common/Circle';

const Container = styled.main`
  width: 100%;
  height: 100%;
  background: #ff844b;
  border-radius: 30px;
`;
const DescContainer = styled.div`
  position: relative;
`;
const BodyContainer = styled.div`
  padding: 48px 0 26px;
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
const CircleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 24px;
  margin-top: 24px;
`;

const DescModal = (props: {
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
          <Container>
            <BodyContainer>
              <TitleText color="white">
                취향의 하루는 {'\n'}
                당신이 좋아하는 음악을 {'\n'}
                입력하면서 시작됩니다.
              </TitleText>
              <BodyText>
                매 선택지마다 {'\n'}더 끌리는 것을 골라주세요. {'\n'}
                {'\n'}
                당신의 취향으로 꽉 찬 하루가 끝나면 당신과 똑같은 취향을 지닌
                누군가로부터 음악을 추천받게 됩니다. {'\n'}
                {'\n'}
                당신의 음악도 같은 하루를 보낸 {'\n'}
                누군가에게 전달될 거예요.
              </BodyText>
              <CircleContainer>
                <Circle
                  backgroundColor={'white'}
                  icon={<RightArrowIcon />}
                  clickable={true}
                  style={{ marginBottom: 10 }}
                  noShadow={true}
                  onClick={handleModalClosed}
                />
              </CircleContainer>
            </BodyContainer>
          </Container>
        </DescContainer>
      </Modal>
    </>
  );
};
export default DescModal;
