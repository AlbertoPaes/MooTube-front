import { useState, useEffect } from 'react';
import { useParams,useNavigate } from "react-router-dom";
import Logo from "../../assets/MooTube.png";
import { Wrapper, Header,WrapperRoomContainer,RoomContainer } from "./style";
import { getRoom } from '../../services/api';

const Room = () => {
  const [room,setRoom] = useState(null);
  const { roomName } = useParams();

  const navigate = useNavigate();

  // useEffect( () => {
  //   (async () => {
  //     const response = await getRoom(roomName);
  //     setRoom(response.data);
  //   }) (); 
  // }, [roomName]);

  // if(room === null){
  //   return (
  //     <span>Loading...</span>
  //   );
  // }

  return (
    <Wrapper>
      <Header>
        <img src={Logo} alt="Logo" />
        <span onClick={() => navigate("/") }>HOME</span>
      </Header>
      <WrapperRoomContainer>
        <RoomContainer>
          <span>shdhashdashudhu</span>
        </RoomContainer>
      </WrapperRoomContainer>
    </Wrapper>
  );
}

export default Room;