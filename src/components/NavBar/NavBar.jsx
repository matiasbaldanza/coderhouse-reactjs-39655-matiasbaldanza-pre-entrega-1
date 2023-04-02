import React from 'react'
import CartBadge from '../CartBadge/CartBadge'
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu'

function NavBar () {
  const topMenu = [
    {
      title: 'Celulares',
      route: '/celulares'
    },
    {
      title: 'Accesorios',
      route: '/accesorios'
    },
    {
      title: 'Computadoras',
      route: '/computadoras'
    }
  ]

  return (
    <div className='navbar bg-base-100'>

      {/* Logo */}
      <div className='flex-none'>
        <a className='btn btn-ghost normal-case text-xl'>eCommerce</a>
      </div>

      {/* Menu */}
      <div className='flex-1 justify-between'>
        <div />
        <CategoriesMenu menuItems={topMenu} />
        <CartBadge />
      </div>
    </div>
  )
}

export default NavBar
