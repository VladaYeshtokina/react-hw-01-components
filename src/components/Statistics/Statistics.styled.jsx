import styled from 'styled-components';


export const SectionStats = styled.section`
  margin: 30px auto;
  padding: 40px 20px 20px;
  max-width: 350px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 30px;
  color: rgb(178, 174, 174);
  text-transform: uppercase;
  border-bottom: 3px solid #a9a8a6;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  grid-gap: 20px;

 
`;

export const Item = styled.li`
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;  
`;

export const Icon = styled.span` 
  position: absolute;
  top: 0;
  left: 25%;

  &:hover {
    color: red;
    cursor: pointer;
  } 
`; 

export const Percentage = styled.span`
  position: absolute;
  bottom: 0;
  left: 28%;
`;