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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {wishes.map((wish) => (
        <div
          key={wish.id}
          className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg"
        >
          <img
            className="w-full h-48 object-contain bg-gray-100"
            src={wish.imageUrl}
            alt={wish.title}
          />
          <div className="p-5">
            <h5 className="text-gray-500 text-xl mb-2">{wish.title}</h5>
            <div className="flex justify-start space-x-4 pt-4">
              <a
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                href={wish.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar
              </a>
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
