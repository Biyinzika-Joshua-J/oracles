import './navbar.css';
import { Container } from '../container/container';
import { Button } from '../../components/ui/button';

const Navbar = () =>{

    return (
        <nav>
            <Container>
                <div className='navbar-content'>
                    <div className='logo'>
                        Oracles
                    </div>
                    <div className='nav-items'>
                        <div className='nav-items__login'>
                            <Button text={'login'}/>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar;