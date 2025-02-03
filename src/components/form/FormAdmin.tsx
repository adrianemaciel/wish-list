import { useState } from "react";
import CardAdmin from "./CardAdmin";

interface Wish {
  id: number;
  title: string;
  link: string;
  imageUrl: string;
}

const FormAdmin = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [newWish, setNewWish] = useState<Omit<Wish, "id">>({
    title: "",
    link: "",
    imageUrl: "",
  });

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWish.title || !newWish.link || !newWish.imageUrl) return;
    setWishes((prevWishes) => [...prevWishes, { id: Date.now(), ...newWish }]);
    setNewWish({ title: "", link: "", imageUrl: "" });
  };

  const handleDeleteWish = (id: number) => {
    setWishes((prevWishes) => prevWishes.filter((wish) => wish.id !== id));
  };

  return (
    <section className="max-w-[1216px] mx-auto p-4">
      <form onSubmit={handleAddWish} className="flex flex-col gap-4 mb-4">
        <label className="flex flex-col">
          Título:
          <input
            className="border p-2 rounded"
            type="text"
            value={newWish.title}
            onChange={(e) =>
              setNewWish((prev) => ({ ...prev, title: e.target.value }))
            }
            required
          />
        </label>

        <label className="flex flex-col">
          Link:
          <input
            className="border p-2 rounded"
            type="url"
            value={newWish.link}
            onChange={(e) =>
              setNewWish((prev) => ({ ...prev, link: e.target.value }))
            }
            required
          />
        </label>

        <label className="flex flex-col">
          URL da Imagem:
          <input
            className="border p-2 rounded"
            type="url"
            value={newWish.imageUrl}
            onChange={(e) =>
              setNewWish((prev) => ({ ...prev, imageUrl: e.target.value }))
            }
            required
          />
        </label>

        <button
          className="bg-green-500 text-white font-bold p-2 rounded w-50 hover:bg-green-600"
          type="submit"
        >
          Adicionar Desejo
        </button>
      </form>
      <CardAdmin wishes={wishes} onDeleteWish={handleDeleteWish} />
    </section>
  );
};

export default FormAdmin;
