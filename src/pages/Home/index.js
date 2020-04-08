import React, { useState, useMemo } from 'react';
import { FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { toast } from 'react-toastify';
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
  InputTel,
} from './styles';

// CUSTOM IMPORTS
import Button from '~/components/Button';
import background from '~assets/background.png';
import api from '~/services/api';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useMemo(() => {
    if (name !== '' && email !== '' && phone !== '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, name, phone]);

  const handleSubmmit = async e => {
    setLoading(true);

    e.preventDefault();

    await api
      .post('https://submit-form.com/khrhYiiqShR9ozvaTxgOv', {
        name,
        email,
        phone,
      })
      .then(() => {
        toast.success('Seus dados foram enviados com sucesso!');
      });

    setLoading(false);
  };

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

          <Form onSubmit={handleSubmmit}>
            <Input
              type="text"
              placeholder="Nome completo"
              onChange={e => {
                setName(e.target.value);
              }}
              value={name}
            />
            <Input
              type="email"
              placeholder="Email"
              onChange={e => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <InputTel
              className="inputMask"
              mask="(99)99999-9999"
              type="tel"
              placeholder="Telefone"
              onChange={e => {
                setPhone(e.target.value);
              }}
              value={phone}
            />
            <Button disabled={disabled} loading={loading} type="submit">
              RECEBER NOTIFICAÇÕES
            </Button>
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
