import React from 'react';
import { FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa';
import {
  Container,
  Content,
  Slogan,
  Main,
  Form,
  Input,
  Small,
  Background,
  Contacts,
  NavHeader,
} from './styles';

// CUSTOM IMPORTS
import Button from '~/components/Button';
import background from '~assets/background.png';

export default function Home() {
  return (
    <Container>
      <NavHeader className="header" />

      <Content>
        <Main>
          <Slogan>
            <p>
              A NOVA
              <br />
              <span>COMUNIDADE</span>
              <br />
              PARA DIVULGAR
              <br />
              SUAS PRODUÇÕES
              <br />
              <span>MUSICAIS</span>
            </p>
          </Slogan>

          <Form>
            <Input type="text" placeholder="Nome completo" />
            <Input type="email" placeholder="Email" />
            <Input type="tel" placeholder="Telefone" />
            <Button>RECEBER NOTIFICAÇÕES</Button>
            <Small>
              Receba notificações quando a <span>PLATAFORMA</span> estiver
              pronta, para você começar a publicar suas produções.
            </Small>
          </Form>
        </Main>
      </Content>

      <Contacts>
        <FaInstagram size={20} />
        <FaFacebookF size={20} />
        <FaYoutube size={20} />
      </Contacts>

      <Background src={background} alt="background" />
    </Container>
  );
}
