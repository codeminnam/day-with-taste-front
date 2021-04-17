import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import { Song } from '../../interfaces';
import styled from 'styled-components';
import PrimaryText from '../common/PrimaryText';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #f1f6fa;
  border-radius: 30px;
  height: 471px;
`;
const SongListContainer = styled.div`
  padding: 24px 16px;
`;
const SongContainer = styled.div`
  height: 100%;
  overflow: scroll;
`;
const RowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const ThumbnailContainer = styled.div`
  width: 124px;
  height: 124px;
  background-color: #fff;
  border-radius: 30px;
`;
const ConfirmContainer = styled.div``;
const BigThumbnailContainer = styled.div`
  width: 100%;
  height: 304px;
  background-color: #fff;
`;
const BigTitleContainer = styled.div`
  padding: 16px 16px 24px 16px;
`;
const TitleText = styled(PrimaryText)`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 24px;
`;
const SongTitleText = styled.h1`
  padding-top: 8px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #0a0d25;
`;
const FooterButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FooterButton = styled.button`
  width: 49.5%;
  height: 83px;
  display: flex;
  background: #e4edf2;
  justify-content: center;
  align-items: center;
`;

export const PickSong = (props: { songList: Song[] }) => {
  const { songList } = props;
  const [isSelected, setIsSelected] = useState(true);

  const SongList = useCallback(() => {
    return (
      <SongContainer>
        {songList.map((el) => (
          <RowContainer>
            <ThumbnailContainer />
            <SongTitleText style={{ width: 140 }}>
              최정윤 (Choi Jung yoon) - Dance with me baby [MV]
            </SongTitleText>
          </RowContainer>
        ))}
      </SongContainer>
    );
  }, []);
  return (
    <>
      <Container>
        {!isSelected ? (
          <SongListContainer>
            <TitleText>내가 생각하는 음악은</TitleText>
            <SongList />
          </SongListContainer>
        ) : (
          <ConfirmContainer>
            <BigThumbnailContainer />
            <BigTitleContainer>
              <SongTitleText>
                최정윤 (Choi Jung yoon) - Dance with me baby [MV]
              </SongTitleText>
            </BigTitleContainer>
            <FooterButtonContainer>
              <FooterButton onClick={() => setIsSelected(false)}>
                <PrimaryText>이게 아냐...</PrimaryText>
              </FooterButton>
              <Link href={'loading/start-question'}>
                <FooterButton style={{ backgroundColor: '#FF844B' }}>
                  <PrimaryText style={{ color: '#fff' }}>
                    이 노래야!
                  </PrimaryText>
                </FooterButton>
              </Link>
            </FooterButtonContainer>
          </ConfirmContainer>
        )}
      </Container>
    </>
  );
};