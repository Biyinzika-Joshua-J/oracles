import {Container} from '../layouts/container/container'
import DisplayScripture from '../components/displayScripture/displayScripture';
import SelectVerse from '../components/selectVerses/selectVerses';
import { Modal } from '../components/ui/modal';

const Home = () =>{

    return (
        <Container>
            <Modal>
              <SelectVerse/>
            </Modal>
            <DisplayScripture/>
        </Container>
    )
}

export default Home;