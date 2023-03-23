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
                <Link to='marvel-comic-book-store/' onClick={closeMenu} className="menuitem">Pagina Inicial</Link>
                <Link to='/Hqs' onClick={closeMenu} className="menuitem" id="a2">Quadrinhos</Link>
                <Link to='/Personagens' onClick={closeMenu} className="menuitem" id="a3">Personagens</Link>
                <Link to='/Sobre' onClick={closeMenu} className="menuitem" id="a4">Sobre a loja</Link>
            </nav>
            <CloseMenu onClick={closeMenu}><img src={closebtn}></img></CloseMenu>
        </MenuWrapper>
        </>
    )
}

export default Menu;