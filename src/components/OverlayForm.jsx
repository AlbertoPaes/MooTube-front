import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

import { makeRoom } from '../services/api';

const OverlayForm = ({setHidden,overlayType}) => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();

  const handleJoinRoom = async (data) => {
    try {
      // await getRoom(roomData.roomName);
      navigate(`/rooms/${data.roomName}`);
    } catch {
      alert("There was an error in the data, please fill it in again!");
    }
  }

  const handleCreateRoom = async (data) => {
    try {
      // await makeRoom(data.roomName);
      navigate(`/rooms/${data.roomName}`);
    } catch {
      alert("Something went wrong and your room was not created, please fill it in again!");
    }
  }

  return (
    <ScreenOverlay>
      <Screen>  
          <span>{overlayType === 'watch' ? 'Watch Room' : 'Create Room'}</span>
          <CloseWindow onClick={() => setHidden(true)}>X</CloseWindow>
          <div className='separator-horizontal-line'></div>
          <form name="landing" onSubmit={ overlayType === 'watch' ? handleSubmit(handleJoinRoom) : handleSubmit(handleCreateRoom)}>
            <input
              placeholder="Room Name" 
              { 
              ...register(
                'roomName',
                { 
                required: "The field must have a maximum of 20 characters", 
                maxLength: 20 
                }) 
              }
            />

            <input  
              placeholder="Username" 
              { 
              ...register(
                'username',
                { 
                required:"The field must have a maximum of 12 characters", 
                maxLength: 12 
                }) 
              } 
            />

            <div className="container-button">
              <button className="button-submit cancel" onClick={() => setHidden(true)}>Cancel</button>
              {
                overlayType === 'watch'
                ? <button type="submit" className="button-submit join-or-create">Join
                </button>
                : <button type="submit" className="button-submit join-or-create">Create
                </button>          
              }
            </div>
          </form>
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
    width: 95%;
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

export default OverlayForm;