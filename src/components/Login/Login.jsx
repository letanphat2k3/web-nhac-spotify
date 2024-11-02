import React from 'react';
import Container from './style';

const Login = () => {
    const  handleClick = () =>{
        const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirectUrl = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = [
        "user-read-email",
        "user-read-private",
        "user-modify-playback-state",
        "user-read-playback-state",
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-position",
        "user-top-read",
    ];

    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
        " "
    )}&response_type=token&show_dialog=true`;
    }
    return (
        <Container>
         <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Black.png" 
                alt="spotify"/>
        <button onClick={handleClick}>
            connect spotify
        </button>
        </Container>
  );
};

export default Login;
