import React from 'react'

function ItemListContainer ({ greeting }) {
  return (
    <div
      className='h-screen w-full grid place-items-center'
    >{greeting}
    </div>
  )
}

export default ItemListContainer
