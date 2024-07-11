import React from 'react'

interface ListInterface {
    name: string
}

const List: React.FC<ListInterface> = ({
    name
}) => {
  return (
    <li className='bg-white rounded-md px-3 text-center whitespace-nowrap'>{name}</li>
  )
}

export default List