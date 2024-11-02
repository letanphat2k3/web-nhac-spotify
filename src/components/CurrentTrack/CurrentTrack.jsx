
import React, { useEffect } from 'react'
import { useStateProvider } from '../../action/StateProvider';
import axios from 'axios';
import Container from './style';
import { reducerCases } from '../../action/Constants';

const CurrentTrack = () => {
    const [{ token, currentlyPlaying }, dispatch] = useStateProvider();
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.data !== "") {
        const currentlyPlaying = {
          id: response.data.item.id,
          name: response.data.item.name,
          artists: response.data.item.artists.map((artist) => artist.name),
          image: response.data.item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
      } else {
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null });
      }
    };
    getCurrentTrack();
  }, [token, dispatch]);
  return (
    <div>
      
    
        <Container>
           {
            currentlyPlaying && (
                <div className="track">
                    <div className="track__image">
                        <img src={currentlyPlaying.image} alt="currentlyPlaying" />
                    </div>

                    <div className="track__info">
                        <h4>{currentlyPlaying.name}</h4>
                        <h6>{currentlyPlaying.artists.join(", ")}</h6>
                    </div>
                </div>
                
            )
           }
        </Container>

    </div>
    
  )
}

export default CurrentTrack