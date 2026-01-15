import { useEffect, useState } from 'react';
import { FaDiscord } from 'react-icons/fa';

export const HomePage = () => {
  const SERVER_IP = 'brasiltale.razehost.net:25677';

  const [online, setOnline] = useState(false)
  const [players, setPlayers] = useState(0)
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // animação de entrada
    setMounted(true);

    // simulação de status do servidor
    setOnline(true);
    setPlayers(0);
  }, [])

  const copyIp = async () => {
    await navigator.clipboard.writeText(SERVER_IP)
    setCopied(true)

    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      className={`flex flex-col items-center text-center gap-10 transition-all duration-700
        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
    >

      <div className="flex gap-4">
        <span
          className={`border-border shadow-shadow rounded-base border-2 px-4 py-1 text-sm font-semibold
            ${online ? 'bg-green-300' : 'bg-red-300'}
          `}
        >
          {online ? '🟢 Online' : '🔴 Offline'}
        </span>

        <span className="border-border shadow-shadow rounded-base bg-secondary-background border-2 px-4 py-1 text-sm font-semibold">
          👥 {players} jogadores online
        </span>
      </div>

      <button
        onClick={copyIp}
        className="border-border shadow-shadow rounded-base bg-main border-2 px-6 py-4 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
      >
        <p className="text-xs uppercase tracking-wide">
          IP do servidor
        </p>

        <p className="font-heading text-xl sm:text-2xl select-all">
          {SERVER_IP}
        </p>

        {copied && (
          <p className="mt-1 text-xs text-green-700">
            IP copiado!
          </p>
        )}
      </button>

      <div className="flex gap-4">
        <a
          href="https://discord.gg/cFeJDVYPyU"
          target="_blank"
          className="border-border bg-main text-foreground shadow-shadow rounded-base font-base border-2 px-5 py-2 flex items-center gap-2 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
        >
          <FaDiscord className="text-lg" />
          Discord
        </a>

        <a
          href="/vip"
          className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base border-2 px-5 py-2 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
        >
          Ver VIPs
        </a>
      </div>
    </section>
  );
};
