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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: rosybrown; */

  h1 {
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;

    color: #111;
  }

  .title-room-container {
    width: 90%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .buttom-room-container {
    display: flex;
    gap: 15px;
  }

  .buttom-room-container button {
    height: 65px;
    width: 120px;

    background-color: transparent;
    opacity: 0.7;
    color: #111;
    
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Oswald';
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    text-align: center;
    border-radius: 6px;
    border: 1px solid black;
    
    cursor: pointer;
    text-decoration: none;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    transition-property: color, background-color, box-shadow;
    user-select: none;

    &:hover {
      opacity: 1;
      border: 3px solid black;
    }
  }
`;

export {
  Wrapper,
  Header,
  WrapperRoomContainer,
  RoomContainer,
}