import React from "react";
import Logo from "../../assets/MooTube.png"; 
import { useNavigate } from 'react-router-dom';

import { Wrapper, Header, RoomContainer,WrapperRoomContainer } from "./style";

const Room = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header>
        <img src={Logo} alt="Logo" />
        <span onClick={() => navigate("/") }>HOME</span>
      </Header>
      <WrapperRoomContainer>
        <RoomContainer>
          <div className="title-room-container">
            <h1>Room List</h1>
            <div className="buttom-room-container">
              <button>Refresh</button>
              <button>Create</button>
            </div>
          </div>
        </RoomContainer>
      </WrapperRoomContainer>
    </Wrapper>
  );
}

export default Room;