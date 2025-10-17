import React from 'react'

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles';

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground />
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/143886237?s=400&u=f9b548593f3d61796f405d3e608518a6bbbddcf2&v=4'/>
                    <div>
                        <h4>Júlio César</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML E CSS</h4>
                    <p>Projeto feito o curso de HTML e CSS no bootcamp dio Global avanade...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript</h4>
                    <p>
                        16
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }