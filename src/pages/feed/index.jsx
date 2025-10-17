import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Container, Title, TitleHighlight, Column } from './styles';


const Feed = () => {
    return (
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={80} nome={"Júlio César"} image='https://avatars.githubusercontent.com/u/143886237?s=400&u=f9b548593f3d61796f405d3e608518a6bbbddcf2&v=4' />
                    <UserInfo percentual={50} nome={"Júlio César"} image='https://avatars.githubusercontent.com/u/143886237?s=400&u=f9b548593f3d61796f405d3e608518a6bbbddcf2&v=4' />
                    <UserInfo percentual={20} nome={"Júlio César"} image='https://avatars.githubusercontent.com/u/143886237?s=400&u=f9b548593f3d61796f405d3e608518a6bbbddcf2&v=4' />
                    <UserInfo percentual={70} nome={"Júlio César"} image='https://avatars.githubusercontent.com/u/143886237?s=400&u=f9b548593f3d61796f405d3e608518a6bbbddcf2&v=4' />
                    <UserInfo percentual={60} nome={"Júlio César"} image='https://avatars.githubusercontent.com/u/143886237?s=400&u=f9b548593f3d61796f405d3e608518a6bbbddcf2&v=4' />
                </Column>
            </Container>
        </>
    )
}

export { Feed }








