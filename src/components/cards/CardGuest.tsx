interface Wish {
  id: number;
  title: string;
  link: string;
  imageUrl: string;
  isTaken: boolean;
}

interface CardGuestProps {
  wishes: Wish[];
  handleMarkAsTaken: (id: number) => void;
}

const CardGuet = ({ wishes, handleMarkAsTaken }: CardGuestProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {wishes.map((wish) => (
        <div
          key={wish.id}
          className={`max-w-sm rounded overflow-hidden shadow-lg ${
            wish.isTaken ? "opacity-50" : ""
          }`}
        >
          <img
            className="w-full object-cover"
            src={wish.imageUrl}
            alt={wish.title}
          />
          <div className="p-5">
            <h5 className="text-gray-500 text-xl mb-2">{wish.title}</h5>
            <div className="flex justify-start space-x-4 pt-4">
              <button>
                <a
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  href={wish.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Comprar
                </a>
              </button>
              <button
                className={`bg-green-500 text-white font-bold py-2 px-4 rounded ${
                  wish.isTaken
                    ? "cursor-not-allowed bg-gray-400"
                    : "hover:bg-green-600"
                }`}
                onClick={() => handleMarkAsTaken(wish.id)}
                disabled={wish.isTaken}
              >
                {wish.isTaken ? "Já Escolhido!" : "Presentear"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CardGuet;
