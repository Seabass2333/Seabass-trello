'use client'

import { ListWithCard } from '@/types'
import { ListForm } from './list-form'

interface ListContainerProps {
  data: ListWithCard[]
  boardId: string
}

export const ListContainer = ({ data, boardId }: ListContainerProps) => {
  return (
    <ol>
      {/* List Container */}
      {/* {lists.map((list) => {
        return <div key={list.id}>{list.name}</div>
      })} */}
      <ListForm />
      <div className='flex-shrink-0 w-1' />
    </ol>
  )
}
