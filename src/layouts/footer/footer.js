import './footer.css'
import {Container} from '../container/container'
import { Grid } from '@mui/material'

const Footer = () =>{

    return (
        <footer>
            <Container>
                <div className='footer-content'>
                    <Grid container spacing={2}>
                        <Grid item sm={8}>
                            <div className='footer-col'>
                               <div>
                                    <h2>The story of divine oracles</h2>
                                    <p>
                                        I have always loved reading the bible ever since I was a kid. 
                                        Books like Proverbs have a great depth of practical wisdom on how to to deal with people.
                                        As a child that never grew up with my Father around to correct, discipline and guide me, the bible filled that gap. 
                                    </p>
                                    <p>
                                        There are many bible apps on the internet, but none was customized to my taste. 
                                        In frustration, I decided to work on a side project were I challenged myself to build a bible app that 
                                        I wish was on the market.
                                    </p>
                                    <p>
                                        That marked the start of divine oracles.
                                    </p>
                               </div>
                            </div>
                        </Grid>

                        <Grid item sm={4}>
                            <div className='footer-col'>
                                <ul>
                                    <li>
                                        <a href='/'>
                                            About
                                        </a>
                                    </li>

                                    <li>
                                        <a href='/'>
                                            My Blog
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Grid>

                       
                    </Grid>
                   
                </div>
                <div className='copyright'>
                        <p>Developed by Joshua Biyinzika 2022</p>
                    </div>
            </Container>
        </footer>
    )
}

export default Footer;