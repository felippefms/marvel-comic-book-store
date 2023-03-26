import { HeaderWrapper, StoreBtn } from '../styles/Header';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';
import storeicon from '../imgs/storeicon.png';

function Header() {
    return(
        <HeaderWrapper>
            <Menu></Menu>
            <StoreBtn>
                <Link to={'/marvel-comic-book-store/Carrinho'}>
                    <img className='storeiconsty' src={storeicon} alt='Carrinho'></img>
                </Link>
            </StoreBtn>
        </HeaderWrapper>
    )
}

export default Header;