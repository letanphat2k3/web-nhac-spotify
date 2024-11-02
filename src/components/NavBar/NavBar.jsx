import React from 'react'
import Container from './style'
import { FaSearch } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { useStateProvider } from '../../action/StateProvider'

const NavBar = ({navBackground}) => {
  const [{userInfo}] = useStateProvider();
  return (
    <Container navBackground={navBackground}>
      <div className="search-bar">
        <FaSearch/>
        <input type="text" placeholder='Artists, songs, podcasts' />
      </div>

      <div className="avatar">
        <a href="#">
          <CgProfile/>
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </Container>
  )
}

export default NavBar