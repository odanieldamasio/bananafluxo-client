import Image from "next/image";

export default function Login() {
  return (
    <div className="h-screen w-screen flex">
      {/* Coluna Esquerda */}
      <div className="w-full lg:w-1/2 bg-gray-50 flex items-center justify-center">
        <div className="w-full max-w-2xl px-8">
          {/* Logo só no mobile */}
          <div className="flex relative w-40 h-20 justify-center mb-8 lg:hidden">
            <Image
              src="/imgs/logo-white.svg" // caminho relativo à pasta public
              alt="Logo BananaFluxo"
              fill
              className="object-contain"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-8">Entrar</h2>
          <form className="space-y-6">
            {/* Email */}
            <input
              type="email"
              placeholder="E-mail"
              className="w-full h-14 px-7 text-base bg-gray-100 rounded-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {/* Senha */}
            <input
              type="password"
              placeholder="Senha"
              className="w-full h-14 px-7 text-base bg-gray-100 rounded-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {/* Lembrar-me e Perdeu a senha */}
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
            {/* Botão */}
            <button
              type="submit"
              className="w-full h-14 px-7 bg-[#0a1033] text-white text-base font-medium rounded-sm hover:opacity-90 transition"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>

      {/* Coluna Direita (some no mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0a1033] flex-col items-center justify-center text-white relative">
        <div className="text-center">
          <div className="flex m-auto relative w-72 h-20 mb-2">
            <Image
              src="/imgs/logo-white.svg" // caminho relativo à pasta public
              alt="Logo BananaFluxo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-base text-gray-300">
            Controle fácil, resultados reais na ponta do lápis.
          </p>
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 text-sm text-gray-400 flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.084 3.292 9.395 7.865 10.918.575.106.786-.25.786-.556 0-.274-.01-1.002-.015-1.966-3.201.695-3.878-1.543-3.878-1.543-.523-1.328-1.277-1.681-1.277-1.681-1.044-.714.08-.699.08-.699 1.155.082 1.762 1.187 1.762 1.187 1.026 1.758 2.69 1.25 3.345.956.103-.743.402-1.25.73-1.537-2.554-.29-5.238-1.277-5.238-5.683 0-1.256.448-2.283 1.183-3.088-.118-.289-.513-1.456.113-3.037 0 0 .965-.309 3.163 1.179a11.046 11.046 0 012.881-.388c.977.004 1.963.132 2.881.388 2.197-1.488 3.161-1.179 3.161-1.179.628 1.581.233 2.748.115 3.037.737.805 1.182 1.832 1.182 3.088 0 4.418-2.689 5.389-5.253 5.674.41.352.776 1.046.776 2.106 0 1.52-.013 2.744-.013 3.116 0 .309.208.668.793.555C20.71 21.392 24 17.08 24 12c0-6.352-5.148-11.5-12-11.5z" />
          </svg>
          <span>
            Desenvolvido por{" "}
            <a href="#" className="text-yellow-500">
              Daniel Damasio
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
