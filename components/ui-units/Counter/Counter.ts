import styled from 'styled-components';
import { CounterRaw } from './CounterRaw';

export const Counter = styled(CounterRaw)`
  display: grid;
  justify-content: start;
  align-content: center;
  grid-template-areas: 'title counter';
  grid-template-columns: 15rem 1fr;

  .counter-title {
    grid-area: title;
    margin: 0;
  }

  .counter {
    grid-area: counter;
    display: grid;
  }
`;
