import { useState,useContext } from 'react';
import { DataContext } from "../contexts/data";
import styled from 'styled-components';

const OverlayRoom = ({setJoinOrCreateHidden,overlayType,roomData}) => {
  const { joinRoom, createRoom } = useContext(DataContext);

  const handleJoinRoom = (roomData) => {
    joinRoom(roomData);
  }

  const handleCreateRoom = (roomData) => {
    createRoom(roomData);
  }

  return (
    <ScreenOverlay>
      <Screen disabled="disabled">
        <span {...(overlayType === 'watch' ? { onClick: () => {handleJoinRoom(roomData)}} : { onClick: () => {handleCreateRoom(roomData)}})}>Go Room</span>
        <CloseWindow onClick={() => setJoinOrCreateHidden(true)}>X</CloseWindow>
      </Screen>
    </ScreenOverlay>
  );
}

const ScreenOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 19px;
`

const Screen = styled.button`
  position: relative;

  width: 25%;
  height: 100px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #1877F2;
  color: #fff;
  border-radius: 12px;

  cursor: pointer;

  span {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 25px;
  }
`

const CloseWindow = styled.button`
  width: 28px;
  height: 24.5px;
  background-color: #FFF;

  border: none;
  font-size: 20px;
  text-align: center;
  color: #000000;

  cursor: pointer;

  position: absolute;
  right: 10px;
  top: 11.75px;
`

export default OverlayRoom;