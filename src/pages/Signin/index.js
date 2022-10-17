import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineHearing } from "react-icons/md"
import { BsFillPersonFill } from "react-icons/bs"
import useAuth from "../../hooks/useAuth";
import Header from "../../components/Header";
import Footer from "../../components/Footer"

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [radio, setRadio] = useState(false);
  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <>
    <Header/>
    <C.Container>
      <C.Label>FAÇA SEU LOGIN</C.Label>
      <C.Content>

        <C.RadioButton>
        <C.box onClick= {() => setRadio(false)} active={!radio}>
        <BsFillPersonFill/> Paciente
        </C.box>
        <C.box onClick={() => setRadio(true)} active={radio}>
        <MdOutlineHearing/> Psicólogo
        </C.box>
        </C.RadioButton>

          <C.Small>
              E-mail*
          </C.Small>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <C.Small>
                Senha*
        </C.Small>
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <C.changePass>
        Esqueci minha senha
      </C.changePass>
      <Button Text="Entrar" onClick={handleLogin} />
      </C.Content>
      <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>

    </C.Container>
    <Footer/>
    </>
  );
};

export default Signin;
