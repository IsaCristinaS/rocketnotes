import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './style'

export function Header(){
    return(
        <Container> 
            <Profile to="/profile">
            <img 
            src="https://github.com/IsaCristinaS.png" 
            alt="Foto do usuário" 
            />

            <div>
                <span>Bem-vinda,</span>
                <strong>Isabella Cristina</strong>
            </div>

            </Profile>

            <Logout>
             <RiShutDownLine/>    
            </Logout>
        </Container>
    )
}