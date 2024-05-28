import styled from "styled-components";

export const MainContent = styled.div`
width: 100%;
display: grid;
position: absolute;
justify-content: center;
align-items: center;
grid-template-columns: repeat(2,1fr);

`

export const CardContent = styled.div`
    width: 100%;
    position: relative;
    button{
        border: 2px solid #0D6E63;
        color:#0D6E63;
        width: 162px;
        height: 52px;
        font-size: 16px;
        font-weight: 600;
        border-radius: 10px;
    }
    h1{
       
    }
`
export const ImageContent = styled.div`
    img{
        width: 100%;
        /* height: 629px; */
    }

    
`

