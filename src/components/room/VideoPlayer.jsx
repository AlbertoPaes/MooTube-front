import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components';

export const VideoPlayer = () => {
  const url = 'https://www.youtube.com/watch?v=VqhCQZaH4Vs';

  return (
    <Wrapper>
      <div className='player-wrapper'>
        <ReactPlayer className='react-player'>
          url={url}
          backgroundColor: 'black'
          muted={true}
          playing={true}
          config={{
            youtube: {
              playerVars: { showinfo: 0 },
            },
          }}
        </ReactPlayer>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 60%;

  .player-wrapper {
    width: 100%;
    height: 95%;

    background-color: black;
  }
`;