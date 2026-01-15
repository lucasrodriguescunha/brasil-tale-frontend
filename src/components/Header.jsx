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
    <div className="fixed top-5 left-0 z-50 w-full">
      <nav className="text-main-foreground border-border rounded-base bg-main font-base mx-auto flex items-center gap-4 border-2 p-2.5 px-5 text-sm sm:text-base w-max">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <img
            src="/brasiltale.png"
            alt="Brasil Tale"
            className="h-8 w-8 rounded-full border-2 border-border"
          />
        </NavLink>

        {/* Links */}
        <div className="flex gap-3">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={clsx(
                'hover:border-border rounded-base border-2 px-2 py-1 transition-colors',
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
    </div>
  )
}
