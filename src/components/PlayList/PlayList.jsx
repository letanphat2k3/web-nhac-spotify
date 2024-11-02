import React, { useEffect } from 'react';
import { useStateProvider } from "../../action/StateProvider";
import axios from 'axios';
import { reducerCases } from '../../action/Constants';
import Container from './style';

const PlayList = () => {
  const [{ token, playlists }, dispatch] = useStateProvider();

  useEffect(() => {
    const getPlayListData = async () => {
      const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        }
      });

      const items = response.data.items;
      const playlist = items.map(({ name, id }) => {
        return { name, id };
      });
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists: playlist });
    };

    if (token) getPlayListData();
  }, [token, dispatch]);

  return (
    <Container>
     <ul>
        {playlists.slice(0, 20).map(({ name, id }) => {
          return (
            <li key={id} >
              {name}
            </li>
            
          );
        })}
      </ul>
      
    </Container>
  );
};

export default PlayList;
