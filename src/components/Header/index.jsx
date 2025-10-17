import React from 'react'
//import logo from '#';
import { Button } from '../Button';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

import logo from '../../../public/icone/logo-dio 1.png';
import { Navigate, useNavigate } from "react-router-dom";

const Header = ({ autenticado }) => {
    const navigate = useNavigate();

    const handleClickCadastro = () => {
        navigate('/cadastro')
    }

    const hendleClickLogin = () => {
        navigate('/login')
    }

    const hendleClickHome = () => {
        navigate('/')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="logo da dio" onClick={hendleClickHome} />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src='https://avatars.githubusercontent.com/u/143886237?s=400&u=f9b548593f3d61796f405d3e608518a6bbbddcf2&v=4' />
                    ) : (
                        <>
                            <MenuRight href='/'>Home</MenuRight>
                            <Button title="Entrar" variant='#' onClick={hendleClickLogin} />
                            <Button title="Cadastrar" variant='#' onClick={handleClickCadastro} />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }

