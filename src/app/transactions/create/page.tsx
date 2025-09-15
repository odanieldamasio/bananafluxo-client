import ProtectedPage from "@/components/auth/ProtectedPage";
import AppLayout from "@/components/layout/AppLayout";
import PrimaryTitle from "@/components/title/PrimaryTitle";
import CreateTransactionForm from "./CreateTransactionForm";

export default async function CreateTransactionPage() {
  return (
    <ProtectedPage>
      <AppLayout>
        <PrimaryTitle title="Criar Movimentação" />
        <CreateTransactionForm />
      </AppLayout>
    </ProtectedPage>
  );
}