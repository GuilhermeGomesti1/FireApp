import { useState } from "react";
import './home.css';
import { Link } from "react-router-dom";

import { auth } from '..//../firebaseConnection'
import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

export default function Home() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  async function handleLogin(e){
    e.preventDefault();






      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Email inválido");
      return;
    }

    if (password.length < 6) {
      toast.error("A senha deve ter no mínimo 6 caracteres");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin', { replace: true });
    } catch (error) {
      console.log('erro ao fazer login:', error.message);
      toast.error("Erro ao fazer login. Verifique suas credenciais.");
    }
  }

  return (
    <div className="home-container">
      <h1>Lista de tarefas</h1>
      <span>Gerencia sua agenda de forma fácil.</span>
      <form className="form" onSubmit={handleLogin}>
        <input type="text" placeholder="Digite seu email" value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
        type="password" placeholder="********" value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Acessar</button>

      </form>

      <Link className="button-link" to="/register">
        Não possui uma conta? Cadastre-se
      </Link>


    </div>
  )
}