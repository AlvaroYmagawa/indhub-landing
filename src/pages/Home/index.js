import React from 'react';
import { FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa';
import {
  Container,
  Slogan,
  Main,
  Form,
  Input,
  Small,
  Background,
  Contacts,
} from './styles';

// CUSTOM IMPORTS
import Header from '~/components/Header';
import Button from '~/components/Button';
import background from '~assets/background.png';

export default function Home() {
  return (
    <>
      <Header />

      <Container>
        <Main>
          <Slogan>
            A NOVA
            <br />
            <span>COMUNIDADE</span>
            <br />
            PARA DIVULGAR
            <br />
            SUAS PRODUÇÕES
            <br />
            <span>MUSICAIS</span>
          </Slogan>

          <Form>
            <Input type="text" placeholder="NOME COMPLETO" />
            <Input type="email" placeholder="EMAIL" />
            <Input type="tel" placeholder="TELEFONE" />
            <Button>RECEBER NOTIFICAÇÕES</Button>
            <Small>
              * RECEBA NOTIFICAÇÕES QUANDO A <span>PLATAFORMA</span> ESTIVER
              PRONTA PARA VOCÊ COMEÇAR A PUBLICAR SUAS PRODUÇÕES
            </Small>
          </Form>
        </Main>

        <Contacts>
          <FaInstagram size={20} />
          <FaFacebookF size={20} />
          <FaYoutube size={20} />
        </Contacts>
      </Container>

      <Background src={background} />
    </>
  );
}
