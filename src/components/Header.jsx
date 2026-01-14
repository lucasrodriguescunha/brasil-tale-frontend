import { NavLink, useLocation } from 'react-router-dom'
import clsx from 'clsx'
// import { ThemeSwitcher } from './theme-switcher'

export const Header = () => {
  const location = useLocation()

  const links = [
    { path: '/', text: 'Início' },
    { path: '/about', text: 'Sobre' },
    { path: '/shop', text: 'Loja' },
    { path: '/vip', text: 'VIP' }
  ]

  return (
    <div className="fixed top-5 left-0 z-50 w-full">
      <nav className="text-main-foreground border-border shadow-shadow rounded-base bg-main font-base w450:gap-4 mx-auto flex w-max gap-5 border-2 p-2.5 px-5 text-sm sm:text-base">
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

        {/* <ThemeSwitcher /> */}
      </nav>
    </div>
  )
}
