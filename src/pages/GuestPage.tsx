import { useState } from "react";
import ButtonBackToLogin from "../components/buttons/ButtonBackToLogin";
import CardGuest from "../components/cards/CardGuest";
import { mockWishes, Wish } from "../data/mockWishes";

const GuestPage = () => {
  const [wishes, setWishes] = useState<Wish[]>(mockWishes);

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

      <CardGuest wishes={wishes} handleMarkAsTaken={handleMarkAsTaken} />
    </div>
  );
};

export default GuestPage;
