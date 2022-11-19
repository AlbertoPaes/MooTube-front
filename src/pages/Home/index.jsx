import { useState } from "react";

import { Wrapper,PresentationContainer,Logo,Title,EntryContainer } from "./style";

import Overlay from "../../components/Overlay";

const Home = () => {
  const [isLoading, setIsLoading] = useState({ placeholder: "Create", disabled: false });
  const [hidden,setHidden] = useState(true);
  const [overlayType, setOverlayType] = useState('');

  const actionButton = (hiddenStatus, overlayType) => {
    setHidden(hiddenStatus);
    setOverlayType(overlayType);
  }

  return (
    <Wrapper>
      <PresentationContainer>
        <Logo>MooTube</Logo>
        <Title>Discover and share <br></br> your video worldwide</Title>
      </PresentationContainer>
      <EntryContainer disableButton={isLoading.disabled}>
        <button onClick={() => actionButton(false,"watch")}>Start Watching</button>
        <button onClick={() => actionButton(false,"create")}>Create Room</button>
      </EntryContainer>
      {(hidden === false) ? <Overlay setHidden={setHidden} overlayType={overlayType} /> : null}
    </Wrapper>
  );
}

export default Home;