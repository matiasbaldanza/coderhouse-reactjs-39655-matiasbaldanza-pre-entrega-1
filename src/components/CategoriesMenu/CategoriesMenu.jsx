import React from 'react'

function CategoriesMenu ({ menuItems }) {
  return (
    <ul className='menu menu-horizontal bg-base-100 rounded-box'>
      {
        menuItems.map((menuItem) => {
          return (
            <li
              key={`topMenu-${menuItem.title}`}
            ><a href={menuItem.route}>{menuItem.title}</a>
            </li>
          )
        })
      }
    </ul>
  )
}

export default CategoriesMenu
