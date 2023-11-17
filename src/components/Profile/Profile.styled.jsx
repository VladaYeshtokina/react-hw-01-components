import styled from 'styled-components';


export const ProfileCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: 30px auto;
  padding: 10px;
  text-align: center;
`;

export const Descr = styled.div`
  color: grey;
  font-size: 16px;

  p {
    margin: 6px;    
  }
`;

export const Name = styled.p`  
  color: black;
  font-size: 20px; 
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export const InfoList = styled.ul`
  margin: auto;
  padding: 0;
  display: flex;
  list-style: none;
`;

export const Item = styled.li`  
  box-sizing: border-box;
  width: 100px;
  height: auto;
  text-align: center;
  padding-top: 10px;
  transition: all 0.4s ease-in-out;
  
  &:hover {
    background: #e7e6e5;
    cursor: pointer;
  }

  &:nth-child(2) {
    margin: 1px 0;
  }
`;

export const Label = styled.span`
  display: block;
  color: grey;
  font-size: 11px;
  font-weight: 600;
`;

export const Quantity = styled(Label)`
  color: black;
  font-size: 18px;
`;



