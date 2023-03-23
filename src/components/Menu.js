import { Link } from "react-router-dom";
import { useState } from "react";

import { MenuWrapper, OpenMenu, CloseMenu } from '../styles/Menu';
import menubtnimg from '../imgs/icons8-menu-60.png';
import closebtn from '../imgs/closebtn.png';


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
            <nav>
                <Link to='/' onClick={closeMenu}>
                    <a className="menuitem" id="a1">Pagina Inicial</a>
                </Link>
                <Link to='/Hqs' onClick={closeMenu}>
                    <a className="menuitem" id="a2">Quadrinhos</a>
                </Link>
                <Link to='/Characters' onClick={closeMenu}>
                    <a className="menuitem" id="a3">Personagens</a>
                </Link>
                <Link to='/About' onClick={closeMenu}>
                    <a className="menuitem" id="a4">Sobre a loja</a>
                </Link>
            </nav>
            <CloseMenu onClick={closeMenu}><img src={closebtn}></img></CloseMenu>
        </MenuWrapper>
        </>
    )
}

export default Menu;