import styled from 'styled-components';

export const Item = styled.li`
  margin: 10px auto;
  padding: 10px 20px;
  max-width: 250px;

  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: ${props => (props.$status ? '0 0 15px green' : '0 0 15px red')};
    text-shadow: ${props => (props.$status ? '0 0 5px green' : '0 0 5px red')};
  }

  svg {
    margin-right: 10px;
    color: ${props => (props.$status ? 'green' : 'red')};
  }
`;

export const Avatar = styled.img`
  margin-right: 10px;
  width: 48px; 
`;

export const Name = styled.p`
  font-weight: 700;
`;

