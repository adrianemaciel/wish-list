interface Wish {
  id: number;
  title: string;
  link: string;
  imageUrl: string;
}

interface CardAdminProps {
  wishes: Wish[];
  onDeleteWish: (id: number) => void;
}

const CardAdmin = ({ wishes, onDeleteWish }: CardAdminProps) => {
  return (
    <div>
      {wishes.map((wish) => (
        <div
          key={wish.id}
          className="max-w-sm rounded overflow-hidden shadow-lg"
        >
          <img src={wish.imageUrl} alt={wish.title} className="w-full" />
          <div className="px-6 py-4">
            <div className="text-gray-500 text-xl mb-2">{wish.title}</div>

            <div className="pt-4 flex justify-start space-x-4">
              <button>
                <a
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  href={wish.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar
                </a>
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => onDeleteWish(wish.id)}
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardAdmin;
