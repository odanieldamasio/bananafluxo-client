"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    global?: string;
  }>({});
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setErrors({});
    setLoading(true);

    const newErrors: typeof errors = {};
    if (!email) newErrors.email = "O e-mail é obrigatório";
    if (!password) newErrors.password = "A senha é obrigatória";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (response?.ok) {
      router.push("/dashboard");
    } else {
      setErrors({ global: "Usuário ou senha inválidos" });
      setLoading(false);
    }
  }

  return (
    <div className="h-screen w-screen flex">
      {/* Coluna Esquerda */}
      <div className="w-full lg:w-1/2 bg-gray-50 flex lg:pt-0 pt-20 lg:items-center justify-center">
        <div className="w-full max-w-2xl px-8">
          <h2 className="text-2xl font-semibold mb-8">Entrar</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input de Email */}
            <div>
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full h-14 px-7 text-base bg-gray-100 rounded-sm border ${
                  errors.email ? "border-red-500" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Input de Senha */}
            <div>
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full h-14 px-7 text-base bg-gray-100 rounded-sm border ${
                  errors.password ? "border-red-500" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Erro global */}
            {errors.global && (
              <p className="text-red-600 text-sm">{errors.global}</p>
            )}

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span>Lembrar-me</span>
              </label>
              <a href="#" className="hover:underline">
                Perdeu a senha?
              </a>
            </div>

            {/* Botão com spinner */}
            <button
              type="submit"
              disabled={loading || !email || !password}
              className="w-full h-14 px-7 bg-[#0a1033] text-white text-base font-medium rounded-sm 
             hover:opacity-90 transition flex items-center justify-center 
             disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                "Entrar"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Coluna Direita */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0a1033] flex-col items-center justify-center text-white relative">
        <div className="text-center">
          <div className="flex m-auto relative w-72 h-20 mb-2">
            <Image
              src="/imgs/logo-white.svg"
              alt="Logo BananaFluxo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-base text-gray-300">
            Controle fácil, resultados reais na ponta do lápis.
          </p>
        </div>
        <div className="absolute bottom-6 text-sm text-gray-400 flex items-center space-x-2">
          <span>
            Desenvolvido por{" "}
            <a
              href="https://github.com/odanieldamasio"
              target="_blank"
              className="text-yellow-500"
            >
              Daniel Damasio
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
