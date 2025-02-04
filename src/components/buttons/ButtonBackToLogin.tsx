import { useNavigate } from "react-router-dom";

const ButtonBackToLogin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="text-gray-500 cursor-pointer px-4 py-2 rounded mb-4 flex items-center"
        onClick={() => navigate("/")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
        Voltar para Login
      </button>
    </div>
  );
};

export default ButtonBackToLogin;
