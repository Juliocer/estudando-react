
import { Container, Column, Title, Wrapper, TitleCadastro, SubtitleCadastro, SubparagrafoCadastro, Link } from './styles';

import vector from '../../../public/icone/Vector.png';
import email from '../../../public/icone/email.png';
import password from '../../../public/icone/password.png';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/api';
import { Navigate, useNavigate } from "react-router-dom";


const schema = yup.object({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('email não é valido').required('Campo obrigatório'),
    password: yup.string().min(6, 'No minimo 6 caracteres').required('Campo obrigatório'),
}).required();

const Cadastro = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            await api.post('/users', {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });
            navigate('/login');
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            alert('Houve um erro ao cadastrar. Tente novamente.');
        }
    };

    const handleClickLogin = () => {
        navigate('/login')
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
                        <TitleCadastro> Comece agora grátis </TitleCadastro>
                        <SubtitleCadastro> Crie sua conta e make the change._ </SubtitleCadastro>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <Input control={control} name="name" placeholder="Nome completo" type="text" errorMessage={errors.name?.message} leftIcon={<img src={vector} alt="Ícone de usuário" />} />
                            <Input control={control} name="email" placeholder="E-mail" errorMessage={errors.email?.message} leftIcon={<img src={email} alt="Ícone de e-mail" />} />
                            <Input control={control} name="password" placeholder="Password" errorMessage={errors.password?.message} leftIcon={<img src={password} alt="Ícone de senha" />}/>

                            <Button title="Criar minha conta" variant="primary" type="submit" disabled={!isValid} />
                        </form>
                        <SubparagrafoCadastro> Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO. </SubparagrafoCadastro>
                        <SubparagrafoCadastro> Já tenho conta. <Link onClick={handleClickLogin}> Fazer login </Link> </SubparagrafoCadastro>
                    </Wrapper>
                </Column>
            </Container>

        </>)
}

export { Cadastro }