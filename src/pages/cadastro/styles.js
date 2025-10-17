
import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 3rem auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
`

export const Column = styled.div`
    flex: 1;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-wigth: 700;
    font-size: 2rem;
    width: 20rem;
    margin-bottom: 1.5rem;
    line-height: 3rem;

    color: #fff;
`

export const Wrapper = styled.div`
    max-width: 24rem;
`

export const TitleCadastro = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
`

export const SubtitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin: .5rem 0 1.5rem 0;
    line-height: 25px;
`

export const SubparagrafoCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: Regular;
    font-weight: 400;
    font-size: 18px;
    margin: 1.5rem 0;
`

export const Link = styled.a`
    font-family: 'Open Sans';
    font-style: Bold;
    font-weight: 700;
    font-size: 14px;
    color: rgba(35, 221, 122, 1);
    margin: 1.5rem 0;
    cursor: pointer;
`
