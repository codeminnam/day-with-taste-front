import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Question } from '../../interfaces';
import Button from '../common/Button';
import Label from '../common/Label';
import TitleText from '../common/TitleText';
import { SmallLogoIcon } from '../../public/svg';
import { setResult as setResultAction } from '../../reducers/songReducer';
import { RootState } from '../../reducers';

type Props = {
  item: Question;
};

const QuestionnaireContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 24px;
  height: 100%;
`;

const UpperContainer = styled.div``;

const HeadCircle = styled.div`
  display: flex;
  justify-content: center;
`;

const ProgressLabel = styled(Label)`
  margin-top: 48px;
`;

const QuestionText = styled(TitleText)`
  margin-top: 16px;
`;

const ButtonContainer = styled.div``;

const AnswerButton = styled(Button)`
  & + & {
    margin-top: 10px;
  }
`;

const Questionnaire = ({ item }: Props) => {
  const result = useSelector((state: RootState) => state.songs.result);
  const [questionResult, setQuestionResult] = useState([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]);
  const dispatch = useDispatch();
  let resultArr = [];
  useEffect(() => {
    if (result) console.log('result', result);
  }, [result]);

  const handleButtonClick = async (answer: string) => {
    resultArr = [
      ...questionResult.slice(0, item.id - 1),
      answer === 'A' ? 0 : 1,
      ...questionResult.slice(item.id, questionResult.length),
    ];
    setQuestionResult(resultArr);
    if (item.id === 11) {
      console.log('result', result);
      try {
        await dispatch(
          setResultAction({
            result: resultArr.join(''),
            music: result?.music as string,
            title: result?.title as string,
            image: result?.image as string,
          })
        );
        Router.push('/loading/end');
      } catch (e) {
        console.log(e);
      }
    } else {
      Router.push(`/questionnaires/${item.id + 1}`);
    }
  };

  return (
    <QuestionnaireContainer>
      <UpperContainer>
        <HeadCircle>
          <SmallLogoIcon color={'orange'} />
        </HeadCircle>
        <ProgressLabel index={item.id} />
        <QuestionText>{item.question}</QuestionText>
      </UpperContainer>
      <ButtonContainer>
        <AnswerButton
          label={item.answerA}
          onClick={() => handleButtonClick('A')}
        />
        <AnswerButton
          label={item.answerB}
          onClick={() => handleButtonClick('B')}
        />
      </ButtonContainer>
    </QuestionnaireContainer>
  );
};

export default Questionnaire;
