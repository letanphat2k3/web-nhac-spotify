import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../SideBar/Sidebar'
import NavBar from '../NavBar/NavBar'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import Container from './style'
import { useStateProvider } from '../../action/StateProvider'
import axios from 'axios'
import { reducerCases } from '../../action/Constants'

const Spotify = () => {
    const [{ token }, dispatch] = useStateProvider();
    const bodyRef = useRef();
    const [navBackground, setNavBackground] = useState(false);
    const [headerBackground, setHeaderBackground] = useState(false);
    const bodyScrolled = () => {
        bodyRef.current.scrollTop >= 30
            ? setNavBackground(true)
            : setNavBackground(false);
        bodyRef.current.scrollTop >= 268
            ? setHeaderBackground(true)
            : setHeaderBackground(false);
    };

    
    useEffect(()=>{
        const getUserInfo = async () => {
            const {data} = await axios.get("https://api.spotify.com/v1/me",{
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                  }
            })
            const userInfo = {
                userID: data.id,
                userName: data.display_name,
            }
            dispatch({type: reducerCases.SET_USER, userInfo})
        }
        getUserInfo()
    },[dispatch, token])
  return (
    <Container>
        <div className="spotyfy-body">
            <Sidebar/>
            <div className="body" ref={bodyRef} onScroll={bodyScrolled}>
                <NavBar navBackground={navBackground}/>
                <div className="body-content">
                    <Body headerBackground={headerBackground}/>
                </div>
            </div>
        </div>

        <div className="spotify-footer">
            <Footer/>
        </div>
    </Container>
  )
}

export default Spotify