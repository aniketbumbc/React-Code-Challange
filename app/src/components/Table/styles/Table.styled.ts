import styled from 'styled-components';

export const StyledTable = styled.table`
  border: 1px solid black;
  width: 95%;
  border-collapse: collapse;
  margin: 0 auto;
`;
export const THead = styled.thead``;
export const TBody = styled.tbody``;
export const TR = styled.tr`
  :hover {
    background-color: #00ced1;
  }
`;
export const TH = styled.th`
  color: ${({ theme }) => theme.secondary};
  border: 1px solid black;
`;
export const TD = styled.td`
color: ${({ theme }) => theme.secondary};
border: 1px solid black;
padding: 15px 10px;
text-align: center;
height: 50px;
width: 50px;
vertical-align: middle;
}
`;
