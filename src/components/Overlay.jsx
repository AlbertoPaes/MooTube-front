import { useState } from "react";
import { useContext } from 'react';
import { DataContext } from "../contexts/data";
import styled from 'styled-components';

const Overlay = ({setHidden,overlayType}) => {
  const [roomName, setRoomName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const { joinRoom, createRoom } = useContext(DataContext);

  const roomData = {
    roomName: roomName,
    displayName: displayName
  }

  const handleJoinRoom = (roomData) => {
    joinRoom(roomData);
  }

  const handleCreateRoom = (roomData) => {
    createRoom(roomData);
  }

  const handleForm = (e) => {
    e.preventDefault();
  }

  return (
    <ScreenOverlay>
      <Screen>  
          <span>{overlayType === 'watch' ? 'Watch Room' : 'Create Room'}</span>
          <CloseWindow onClick={() => setHidden(true)}> X </CloseWindow>
          <div className='separator-horizontal-line'></div>
          <form onSubmit={handleForm}>
            <input type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)} placeholder="Room Name" required />
            <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Display Name" required />
          </form>
          <div className='separator-horizontal-line'></div>
          <div className="container-button">
            <button className="button-submit cancel" onClick={() => setHidden(true)}>Cancel</button>
            {
              overlayType === 'watch'
              ? <button className="button-submit join-or-create" onClick={() => handleJoinRoom(roomData)}>Join</button>
              : <button className="button-submit join-or-create" onClick={() => handleCreateRoom(roomData)}>Create</button>          
            }
          </div>
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
  background-color: rgba(255, 255, 255, 0.75);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 19px;
`

const Screen = styled.div`
  position: relative;

  width: 80%;
  height: 70%;
  background-color: #333333;
  
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 33px 22px 11px 22px;

  span{
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
    font-size: 34px;
    line-height: 40.8px;
  }

  .separator-horizontal-line {
    border: 1px solid #ffffff;
    margin: 20px 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 7px;
  }

  input {
    height: 52px;
    width: 96%;

    border: none;
    border-radius: 4px;
    background-color: #FFFFFF;
    color: #222222;
    padding: 14px;

    &::placeholder {
      color: #7E7E7E;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 16.41px;
      text-align: left;
    }
  }

  .container-button {
    display: flex;
    justify-content: space-between;
    margin: 30px 20px;
  }

  .button-submit {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    width: 120px;
    height: 37px;
    border: none;
    border-radius: 5px;
  }

  .cancel {
    background-color: #fff;
    color: #1877F2;
    margin-right: 27px;

    cursor: pointer;
  }

  .join-or-create {
    background-color: #1877F2;
    color: #fff;

    cursor: pointer;
  }
`

const CloseWindow = styled.button`
  width: 28px;
  height: 24.5px;
  background: #FFF;

  border: none;
  font-size: 20px;
  text-align: center;
  color: #000000;

  cursor: pointer;

  position: absolute;
  right: 20px;
  top: 25.75px;
`

export default Overlay;