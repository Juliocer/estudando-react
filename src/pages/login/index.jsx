
import email from '../../../public/icone/email.png';
import password from '../../../public/icone/password.png';

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { api } from '../../services/api';
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';
import { Navigate, useNavigate } from "react-router-dom";

const schema = yup.object({
    email: yup.string().email('email não é valido').required('Campo obrigatório'),
    password: yup.string().min(6, 'No minimo 6 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async FormData => {
        try {
            const { data } = await api.get(`users?email=${FormData.email}&senha=${FormData.password}`)
            if (data.length === 1) {
                navigate('/feed')
            } else {
                alert('Email ou senha inválido')
            }
        } catch {
            alert('Houve um erro, tente novamente.')
        }
    };

    const hendleClickCadastro = () => {
        navigate('/cadastro')
    }


    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você apreder com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input control={control} name="email" errorMessage={errors.email?.message} placeholder="E-mail" leftIcon={<img src={email} alt="Ícone de e-mail" />} />
                            <Input control={control} name="password" errorMessage={errors.password?.message} placeholder="Senha" type="password" leftIcon={<img src={password} alt="Ícone de senha" />} />
                            <Button title="Entrar" variant="primary" type="submit" disabled={!isValid} />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <Button title="Criar Conta" variant="terceiro" onClick={hendleClickCadastro} />
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )

}

export { Login }

/* <CriarText onClick={hendleClickCadastro}>Criar Conta</CriarText> */








