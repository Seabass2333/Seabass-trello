'use server'

import { auth } from '@clerk/nextjs'
import { InputType, ReturnType } from './type'
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { CreateBoard } from './schema'
import { createSafeAction } from '@/lib/create-safe-action'

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth()

  if (!userId || !orgId) {
    return {
      error: 'Invalid user'
    }
  }

  const { title, image } = data

  const [imageId, imageThumbUrl, imageFullUrl, imageLinkHTML, imageUserName] = image.split('|')

  if (!imageId || !imageThumbUrl || !imageFullUrl || !imageLinkHTML || !imageUserName) {
    return {
      error: 'Invalid image'
    }
  }

  let board

  try {
    board = await db.board.create({
      data: {
        title,
        orgId,
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageLinkHTML,
        imageUserName
      }
    })
  } catch (error) {
    return {
      error: 'Invalid user'
    }
  }

  revalidatePath(`/board/${board.id}`)
  return { data: board }
}

export const createBoard = createSafeAction(CreateBoard, handler)
