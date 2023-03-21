import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuWrapper, OpenMenu, CloseMenu } from '../styles/Menu';

function Menu(){
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClose = () => {
        setMenuOpen(false);
      };
    
    return(
        <>
        <OpenMenu onClick={() => setMenuOpen(true)}>Abrir Menu</OpenMenu>
        <MenuWrapper isOpen={menuOpen} onClose={handleMenuClose}>
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
            <CloseMenu onClick={handleMenuClose}>X</CloseMenu>
        </MenuWrapper>
        </>
    )
}

export default Menu;