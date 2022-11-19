import { useParams } from "react-router-dom";

const Room = () => {
  const { roomName } = useParams();

  return (
    <h1>Minha linda página de Room</h1>
  );
}

export default Room;