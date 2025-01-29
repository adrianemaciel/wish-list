import { useState } from "react";

interface Wish {
  id: number;
  title: string;
  link: string;
  imageUrl: string;
}

const AdminPage = () => {
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
    <div className="min-h-screen mx-auto p-4 bg-cyan-100">
      <h1 className="text-2xl font-bold mb-4">Gerenciar Lista de Desejos</h1>

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
          className="bg-green-500 text-white p-2 rounded w-full"
          type="submit"
        >
          Adicionar Desejo
        </button>
      </form>

      <div>
        {wishes.map((wish) => (
          <div
            key={wish.id}
            className="flex items-center justify-between border p-4 rounded mb-4"
          >
            <div>
              <h2 className="font-bold">{wish.title}</h2>
              <a
                className="text-blue-500 hover:underline"
                href={wish.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar
              </a>
            </div>
            <button
              className="bg-red-500 text-white p-2 rounded"
              onClick={() => handleDeleteWish(wish.id)}
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
