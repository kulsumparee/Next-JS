import styled from "styled-components";


export const FooterContainer = styled.footer`

  background-color: #2f855a;
  color: white;
  width: 100%;
  height:auto;
  justify-content: space-between;
  
`;

export const FooterContent = styled.div`
  
  display: grid;
  grid-template-columns: repeat(3,1fr);
position: relative;
top: 15%;
 @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);

 }

  
`;

export const FirstSection = styled.div`

`;



export const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom:20px;
  margin-top: 10%;
  
  `

  export const Text = styled.p`
    width: 80%;
    line-height: 24px;
  `