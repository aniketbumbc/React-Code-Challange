import styled from 'styled-components';

export const StyledSelect = styled.select`
  width: 100%;
  border: 1px solid #a1a1a1;
  border-radius: 0;
  cursor: pointer;
  padding: 10px;
  background-color: ${({ color }) => color};
`;
