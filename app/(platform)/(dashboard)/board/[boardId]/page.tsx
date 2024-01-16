import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

interface BoardIdPageProps {
  params: {
    boardId: string
  }
}

const BoardIdPage = async ({ params }: BoardIdPageProps) => {
  const { orgId } = auth()

  if (!orgId) {
    redirect('/select-org')
  }

  const lists = await db.list.findMany({
    where: {
      boardId: params.boardId,
      board: {
        orgId
      }
    },
    include: {
      cards: {
        orderBy: {
          order: 'asc'
        }
      }
    },
    orderBy: {
      order: 'asc'
    }
  })

  return <div>BoardId Page</div>
}

export default BoardIdPage
