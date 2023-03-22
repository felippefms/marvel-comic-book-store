import { Link } from "react-router-dom";
import { useState } from "react";

import { MenuWrapper, OpenMenu, CloseMenu } from '../styles/Menu';
import menubtnimg from '../imgs/icons8-menu-60.png';
import closebtn from '../imgs/closebtn.png';
import menubgdimg from '../imgs/menubgdimg.jpg';

function Menu(){
    const [menuStatus, setMenuOpen] = useState(false);

    function openMenu(){
        document.body.style.overflow = "hidden";
        setMenuOpen(true);
    };

    const closeMenu = () => {
        document.body.style.overflow = "auto";
        setMenuOpen(false);
      };
      
    return(
        <>
        <OpenMenu onClick={(openMenu)}><img src={menubtnimg}></img></OpenMenu>
        <MenuWrapper isOpen={menuStatus} onClose={closeMenu}>
            <img src={menubgdimg}></img>
            <nav>
                <Link to='/'>
                    <a>Página Inicial</a>
                </Link>
                <Link to='/'>
                    <a>Opção 1</a>
                </Link>
                <Link to='/'>
                    <a>Opção 2</a>
                </Link>
                <Link to='/'>
                    <a>Opção 3</a>
                </Link>
            </nav>
            <CloseMenu onClick={closeMenu}><img src={closebtn}></img></CloseMenu>
        </MenuWrapper>
        </>
    )
}

export default Menu;