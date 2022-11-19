import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px){
    flex-direction: column;
  }
`

const PresentationContainer = styled.div`
  width: 62.84%;
  min-height: inherit;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 60px;

  background-color:#151515;
  color: #FFFFFF;

  @media (max-width: 800px){
    width: 100%;
    min-height: 175px;
    
    position: absolute;
    top:0;
    justify-content: center;
    align-items: center;
    padding: 0px;
  }
`

const Logo = styled.span`
  font-family: 'Passion One';
  font-weight: 700;
  font-size: 106px;
  line-height: 117px;
  letter-spacing: 0.05em;
  color: #FFFFFF;

  @media (max-width: 800px){
    font-size: 76px;
    line-height: 84px;
    justify-content: start;
  }
`

const Title = styled.p`
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;
  color: #FFFFFF;

  @media (max-width: 800px){
    font-size: 23px;
    line-height: 34px;
    text-align: center;
  }
`

const EntryContainer = styled.div`
  min-height: 100vh;
  width: 37.16%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;
  
  background-color: #333333;
  
  button {
    height: 65px;
    width: 80%;

    background-color: #1877F2;
    color: rgb(218, 218, 218);
    
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Oswald';
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    text-align: center;
    border-radius: 6px;
    border: none;
    
    cursor: pointer;
    text-decoration: none;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    transition-property: color, background-color, box-shadow;
    user-select: none;

    &:hover {
      color: #FFFFFF;
    }
  }

  @media (max-width: 800px){
    width: 100%;

    gap: 11px;
    margin-top: 175px;
    justify-content: start;
    padding-top: 40px;

    button {
      width: 90%;
      height: 55px;
      font-size: 22px;
    }
  }
`;

export {
  Wrapper,
  PresentationContainer,
  Logo,
  Title,
  EntryContainer,
}