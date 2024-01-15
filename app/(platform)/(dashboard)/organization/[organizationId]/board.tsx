import { deleteBoard } from '@/actions/delete-board'
import { FormDelete } from './form-delete'

interface BoardProps {
  title: string
  id: string
}
const Board = ({ title, id }: BoardProps) => {
  const deleteBoardById = deleteBoard.bind(null, id)

  return (
    <form
      action={deleteBoardById}
      className='flex items-center gap-x-2'
    >
      <p>Board title: {title}</p>
      <FormDelete />
    </form>
  )
}

export default Board
