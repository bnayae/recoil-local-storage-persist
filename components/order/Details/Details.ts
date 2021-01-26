import styled from 'styled-components';
import { DetailsRaw } from './DetailsRaw';

export const Details = styled(DetailsRaw)`
  display: grid;
  justify-content: center;
  align-content: center;
  /* min-height: 100vh; */
  grid-auto-rows: max-content;
  grid-row-gap: 1.5rem;
  width: 100rem;

  .count {
    display: grid;
    grid-auto-flow: column;
  }

  .count-input {
    font-size: 1rem;
  }
`;
