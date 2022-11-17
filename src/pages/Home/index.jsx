import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Wrapper,PresentationContainer,Logo,Title,EntryContainer } from "./style";

const Home = () => {
  const [isLoading, setIsLoading] = useState({ placeholder: "Create", disabled: false });
  const navigate = useNavigate();

  return (
    <Wrapper>
      <PresentationContainer>
        <Logo>MooTube</Logo>
        <Title>Discover and share <br></br> your video worldwide</Title>
      </PresentationContainer>
      <EntryContainer disableButton={isLoading.disabled}>
        <button onClick={() => navigate("/rooms") }>
          Start Watching
        </button>
        <button>
          Create Room
        </button>
      </EntryContainer>
    </Wrapper>
  );
}

export default Home;