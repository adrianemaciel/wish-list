import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "admin") {
      navigate("/admin");
    } else if (role === "guest") {
      navigate("/guest");
    }
  };

  return (
    <div className="flex items-center min-h-screen bg-[url(https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover bg-no-repeat h-[100vh] w-screen ">
      <form className="max-w-sm mx-auto">
        <div className=" py-5 flex flex-col items-center justify-center rounded-lg shadow-md bg-cyan-100 h-96 w-96">
          <h1 className="text-3xl font-bold mb-4">Bem vindo(a)!</h1>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Escolha seu perfil para continuar
          </label>
          <select
            className="border-b border-gray-300 p-2 w-50 mb-4 focus:outline-none focus:border-b-2 focus:border-blue-500"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option selected>Selecione seu perfil</option>
            <option value="admin">Aniversariante</option>
            <option value="guest">Convidado</option>
          </select>
          <button
            className="bg-cyan-950 text-white w-45 p-2 rounded hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={handleLogin}
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
