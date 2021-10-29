import React from 'react'
import '../Styles.css';
import { FaSpotify } from 'react-icons/fa'
import { Container } from 'react-bootstrap'
const Auth_URL="https://accounts.spotify.com/authorize?client_id=344e2726b64c4af1a80cf9657157f6d4&response_type=code&redirect_uri=http://localhost:3000"


export default function Login(){
return (
    <Container className="d-flex justify-content-center align-items-center" style={{minHeight:"100vh"}}>
        <a href={Auth_URL}>

                <button className="btn LoginButton "  >
                    <span style={{paddingRight:"20px"}}>
                    Login
                    </span>
                    <FaSpotify  className="spotify-icon"  align="right"></FaSpotify>
                 </button>
         
        </a>

    </Container>
)
}
