import styled from 'styled-components';

export const Table = styled.table`
  margin: auto;
  width: 40%;
  border: none;
  margin-bottom: 20px;
`;

export const Title = styled.th`
  font-weight: bold;
  text-align: centre;
  border: none;
  padding: 10px 15px;
  background: #d8d8d8;
  font-size: 14px;

  &:first-child {
    border-radius: 8px 0 0 8px;
  }

  &:last-child {
    border-radius: 0 8px 8px 0;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f3f3f3;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0px 0px 40px 2px rgba(0, 0, 0, 0.81);
  }
`;

export const TableCell = styled.td`
  text-align: center;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;

  &:first-child {
    border-radius: 8px 0 0 8px;
  }

  &:last-child {
    border-radius: 0 8px 8px 0;
  }
`;



