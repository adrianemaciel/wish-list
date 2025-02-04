import { useState } from "react";
import ButtonBackToLogin from "../components/buttons/ButtonBackToLogin";
import CardGuet from "../components/cards/CardGuest";

interface Wish {
  id: number;
  title: string;
  link: string;
  imageUrl: string;
  isTaken: boolean;
}

const GuestPage = () => {
  const [wishes, setWishes] = useState<Wish[]>([
    {
      id: 1,
      title: "A hora da estrela: Edição comemorativa",
      link: "https://www.amazon.com.br/hora-estrela-Edi%C3%A7%C3%A3o-comemorativa/dp/6555320354",
      imageUrl: "https://m.media-amazon.com/images/I/61TaHURu27L._SL1000_.jpg",
      isTaken: false,
    },
  ]);

  const handleMarkAsTaken = (id: number) => {
    setWishes(
      wishes.map((wish) => (wish.id === id ? { ...wish, isTaken: true } : wish))
    );
  };

  return (
    <div className="max-w-[1216px] mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Escolha o que deseja <span className="text-yellow-500">Presentear</span>
      </h1>

      <ButtonBackToLogin />

      <CardGuet wishes={wishes} handleMarkAsTaken={handleMarkAsTaken} />
    </div>
  );
};

export default GuestPage;
