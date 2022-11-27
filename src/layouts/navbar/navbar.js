import './navbar.css';
import { Container } from '../container/container';
import { Button } from '../../components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { updateModal } from '../../context/reducers/modal';
const Navbar = () =>{

    const chapter = useSelector(state => state.scripture.value.chapter);
    const dispatch = useDispatch();

    return (
        <nav>
            <Container>
                <div className='navbar-content'>
                    <div className='logo'>
                        Oracles
                    </div>
                    <div className='nav-items'>
                        <button onClick={()=>{dispatch(updateModal(1))}}>
                           {chapter}
                        </button>
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