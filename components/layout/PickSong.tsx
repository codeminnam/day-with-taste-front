import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import PrimaryText from '../common/PrimaryText';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { Song } from '../../interfaces';
import { setResultRequest } from '../../reducers/songReducer';
import { PlayCircleIcon } from '../../public/svg';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LoadingSpinner from '../common/LoadingSpinner';
const Container = styled.main`
  width: 100%;
  height: 100%;
  background: #f1f6fa;
  border-radius: 30px;
`;
const SongListContainer = styled.div`
  padding-top: 24px;
`;
const SongContainer = styled.ul`
  height: 312px;
  overflow: scroll;
`;
const RowContainer = styled.li<{ isSelected: boolean }>`
  width: 100%;
  cursor: pointer;
  padding: 8px 24px 8px 24px;
  text-decoration: none;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ isSelected }) => (isSelected ? '#E4EDF2' : 'none')};
`;
const ThumbnailContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
`;
const PlayCircleContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const TitleText = styled(PrimaryText)`
  font-style: normal;
  font-weight: bold;
  padding: 0 24px;
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
const FooterButton = styled.button`
  width: 100%;
  height: 83px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  display: flex;
  cursor: pointer;
  background: #ff844b;
  justify-content: center;
  align-items: center;
  &:disabled {
    color: #abcad7;
    background: #e4edf2;
    cursor: initial;
  }
`;
const LoadingContainer = styled.div`
  width: 100%;
  height: 324px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PickSong = () => {
  const { songs } = useSelector((state: RootState) => state.songs);
  const router = useRouter();
  const { loading } = useSelector((state: RootState) => state.songs);
  const [selectedKey, setSelectedKey] = useState('');
  const isSelectedKey = (currentKey: string) => {
    return currentKey === selectedKey;
  };
  const dispatch = useDispatch();
  const SongRow = useCallback(
    (el, index) => {
      return (
        <RowContainer
          id={`${el.url}`}
          key={`${el.title}${index}`}
          isSelected={isSelectedKey(`${el.url}`)}
          onClick={(e) => {
            setSelectedKey((e.currentTarget as Element).id);
          }}>
          <ThumbnailContainer>
            <Link href={el.url}>
              <a target="_blank" rel="noreferrer">
                <PlayCircleContainer>
                  <PlayCircleIcon />
                </PlayCircleContainer>
              </a>
            </Link>
            <img src={el.image} style={{ width: '100%', height: '100%' }} />
          </ThumbnailContainer>
          <SongTitleText style={{ width: 140 }}>{el.title}</SongTitleText>
        </RowContainer>
      );
    },
    [isSelectedKey, setSelectedKey]
  );
  const SongList = useCallback(() => {
    return (
      <SongContainer>
        {songs && songs.map((el: Song, index: number) => SongRow(el, index))}
      </SongContainer>
    );
  }, [songs, SongRow]);
  return (
    <>
      <Container>
        <SongListContainer>
          <TitleText>음악 검색</TitleText>
          {loading ? (
            <LoadingContainer>
              <LoadingSpinner />
            </LoadingContainer>
          ) : (
            SongList()
          )}
          <FooterButton
            disabled={isSelectedKey('')}
            onClick={() => {
              if (songs) {
                const currentMusic = songs.find(
                  (song) => song.url === selectedKey
                );
                dispatch(
                  setResultRequest({
                    result: '',
                    image: currentMusic?.image ?? '',
                    title: currentMusic?.title ?? '',
                    music: currentMusic?.music ?? '',
                  })
                );
                router.push('/loading/start-question');
              }
            }}>
            선택하기
          </FooterButton>
        </SongListContainer>
      </Container>
    </>
  );
};
