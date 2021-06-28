import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";


function Header() {
    return (
        <div className='header'>
             <img
                    className="header__icon"
                    src="https://www.canva.com/design/DAEhlXCKbGE/v6gnkxOU-JAV9qqb38A3zQ/view?utm_content=DAEhlXCKbGE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                    alt=""
                /> 
            <div className='header__center'>
                
                <input type="text" />
                <SearchIcon />
            </div>
            <div className='header__right'>

            <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
            
        </div>
    )
}

export default Header
