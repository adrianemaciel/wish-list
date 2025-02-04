import FormAdmin from "../components/form/FormAdmin";
import ButtonBackToLogin from "../components/buttons/ButtonBackToLogin";

const AdminPage = () => {
  return (
    <main className="max-w-[1216px] mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Gerenciar Lista de <span className="text-yellow-500">Desejos</span>
      </h1>

      <ButtonBackToLogin />

      <FormAdmin />
    </main>
  );
};

export default AdminPage;
