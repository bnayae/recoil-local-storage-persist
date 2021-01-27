import styled from 'styled-components';
import { CounterRaw } from './CounterRaw';

export const Counter = styled(CounterRaw)`
  display: grid;
  justify-content: start;
  align-content: center;
  grid-template-areas: 'title counter . btn1 . btn2';
  grid-template-columns: 15rem 1fr 1rem auto 1rem auto;

  .counter-title {
    grid-area: title;
    margin: 0;
  }

  .counter {
    grid-area: counter;
    display: grid;
  }

  .btn1,
  .btn2 {
    height: 1.3rem;
  }

  .btn1 {
    grid-area: btn1;
  }

  .btn2 {
    grid-area: btn2;
  }
`;
