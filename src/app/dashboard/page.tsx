import { requireAuth } from "../../lib/auth";

export default async function Login() {
  const session = await requireAuth();
  
  return (
    <h1>Hello, dashboard.js!</h1>
  );
}
