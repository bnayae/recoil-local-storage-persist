import styled from 'styled-components';
import { OrderScreensRaw } from './OrderScreensRaw';

export const OrderScreens = styled(OrderScreensRaw)`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 2rem;
  justify-content: center;
  justify-items: center;
  padding: 2rem;
`;
