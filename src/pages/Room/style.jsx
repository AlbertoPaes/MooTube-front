import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  height: 150px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  background-color: #FFFFFF;

  img {
    height: 100%;
    object-fit: fill;
  }

  span {
    font-family: 'Passion One';
    font-weight: 700;
    font-size: 40px;
    line-height: 54px;
    letter-spacing: 0.05em;
    color: #111;

    margin-right: 15px;
    margin-bottom: 20px;
  }

  span:hover {
    cursor: pointer;
  }
`;

const WrapperRoomContainer = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RoomContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;   
`;

const WrapperTabs = styled.div`
  display: flex;
  flex-direction: column;

  .separator-horizontal-line {
    border: 1px solid #9f1b1b;
    margin: 20px 20px;
  } 
`

const Tabs = styled.div`
  width: 40%;
  height: 360px;
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  gap: 30px;
`

const Tab = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  cursor: pointer;
`;

export {
  Wrapper,
  Header,
  WrapperRoomContainer,
  RoomContainer,
  Tabs,
  Tab,
  WrapperTabs
}