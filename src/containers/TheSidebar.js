import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BASE_URL from 'src/views/base';

  import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'


import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();



const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  
  const [getgym,setgym] = useState([])

  useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/gym/' + cookies.get('gym_uuid'))
    .then(res => {
      console.log(res)
      setgym(res.data)
      console.log(getgym[0].gym_name)
    })
    .catch(err => {
      // console.log(err)
    })
  }, [])



  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
  
      <CSidebarBrand className="d-md-down-none" to="/">
          {/* <CIcon
            className="c-sidebar-brand-full"
            name="logo-negative"
            height={35}
          /> */}

          <h3>{getgym.gym_name}</h3>
  
        
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      
      </CSidebarBrand>
      <CSidebarNav>
      <div className="profile_admin">
        <img src="avatars/6.jpg" alt="demo"/>
       
        <div className="admin-title">
          <p>Welcome</p>
          <h4>Admin</h4>
        </div>
        
      </div>
        <CCreateElement        
          items={navigation}
          key={Math.floor(Math.random() * 10)}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
