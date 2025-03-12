import { useRouter } from 'next/router';
import React from 'react'

interface ListInterface {
    name: string; 
    onClick?: string
}

const List: React.FC<ListInterface> = ({
    name,
    onClick
}) => {
  const router = useRouter()
  return (
    <li onClick={() => router.push(onClick as string)} className='bg-white rounded-md px-3 text-center whitespace-nowrap'>{name}</li>
  )
}

export default List