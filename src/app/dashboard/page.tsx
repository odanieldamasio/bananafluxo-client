import ProtectedPage from "@/components/auth/ProtectedPage";
import AppLayout from "@/components/layout/AppLayout";

export default async function Dashboard() {
  return (
    <ProtectedPage>
      <AppLayout>HELLOW</AppLayout>
    </ProtectedPage>
  );
}
