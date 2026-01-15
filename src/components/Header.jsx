import { NavLink, useLocation } from 'react-router-dom'
import clsx from 'clsx'

export const Header = () => {
  const location = useLocation()

  const links = [
    { path: '/', text: 'Início' },
    { path: '/about', text: 'Sobre' },
    { path: '/shop', text: 'Loja' },
    { path: '/vip', text: 'VIP' },
    { path: '/suport', text: 'Suporte' }
  ]

  return (
    <header className="fixed top-5 left-0 z-50 w-full px-4">
      <nav className="relative mx-auto flex items-center rounded-base border-2 border-border bg-main px-5 py-2.5 text-sm sm:text-base max-w-6xl">

        {/* Logo à esquerda */}
        <NavLink
          to="/"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <img
            src="/brasiltale.png"
            alt="Brasil Tale"
            className="h-8 w-8 rounded-full border-2 border-border"
          />
          <span className="font-semibold tracking-wide">
            Brasiltale
          </span>
        </NavLink>

        {/* Links centralizados */}
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-4">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={clsx(
                'rounded-base border-2 px-3 py-1 transition-colors hover:border-border',
                location.pathname === link.path
                  ? 'border-border'
                  : 'border-transparent'
              )}
            >
              {link.text}
            </NavLink>
          ))}
        </div>

      </nav>
    </header>
  );
};
