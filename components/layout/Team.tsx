import React from 'react';
import styled from 'styled-components';
import Circle from '../common/Circle';
import TitleText from '../common/TitleText';
import PrimaryText from '../common/PrimaryText';
import { LeftArrowIcon, SmallLogoIcon } from '../../public/svg';

const Container = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 28px;
`;
const UpperContainer = styled.div``;
const TitleContainer = styled.div`
  padding-left: 24px;
`;
const Header = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;
const ListContainer = styled.div``;
const ItemContainer = styled.div`
  margin-bottom: 12px;
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 24px;
`;
const ItemTitleText = styled(PrimaryText)`
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  line-height: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #fff;
`;
const ItemContentText = styled(PrimaryText)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  line-height: 27px;
  margin-bottom: 4px;
  color: #fff;
`;

const Team = (props: { onRequestGoBack: () => void }) => {
  const { onRequestGoBack } = props;
  return (
    <Container>
      <UpperContainer>
        <Header>
          <SmallLogoIcon color={'lightBlue'} />
        </Header>
        <TitleContainer>
          <TitleText color={'white'}>울프 디벨로퍼스의</TitleText>
          <TitleText style={{ color: '#FF844B' }}>
            프로젝트 팀 음취취음취
          </TitleText>
        </TitleContainer>
      </UpperContainer>
      <BottomContainer>
        <ListContainer>
          <ItemContainer>
            <ItemTitleText>Team Lead</ItemTitleText>
            <ItemContentText>Cha Soyoung</ItemContentText>
          </ItemContainer>
          <ItemContainer>
            <ItemTitleText>Designer</ItemTitleText>
            <ItemContentText>Gwak Soyoung</ItemContentText>
          </ItemContainer>
          <ItemContainer>
            <ItemTitleText>Front-End</ItemTitleText>
            <ItemContentText>Nam Hyunmyung</ItemContentText>
            <ItemContentText>Kwon HyungKung</ItemContentText>
          </ItemContainer>
          <ItemContainer>
            <ItemTitleText>Back-End</ItemTitleText>
            <ItemContentText>Park Najeong</ItemContentText>
            <ItemContentText>Cha Soyoung</ItemContentText>
          </ItemContainer>
        </ListContainer>
        <Circle
          backgroundColor={'orange'}
          icon={<LeftArrowIcon />}
          clickable={true}
          style={{ marginBottom: 10 }}
          onClick={() => onRequestGoBack()}
        />
      </BottomContainer>
    </Container>
  );
};

export default Team;
