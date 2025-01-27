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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-[1216px] mx-auto py-5 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <select
          className="border p-2 rounded mb-4"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Selecione seu perfil</option>
          <option value="admin">Aniversariante</option>
          <option value="guest">Convidado</option>
        </select>
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={handleLogin}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
