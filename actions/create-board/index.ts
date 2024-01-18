'use server'

import { auth } from '@clerk/nextjs'
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { createSafeAction } from '@/lib/create-safe-action'
import { createAuditLog } from '@/lib/create-audit-log'
import { ACTION, ENTITY_TYPE } from '@prisma/client'
import { incrementAvailableCount, hasAvailableCount } from '@/lib/org-limit'

import { CreateBoard } from './schema'
import { InputType, ReturnType } from './type'
import { checkSubscription } from '@/lib/subscription'

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth()

  if (!userId || !orgId) {
    return {
      error: 'Invalid user'
    }
  }

  const canCreate = await hasAvailableCount()
  const isPro = await checkSubscription()

  if (!canCreate && !isPro) {
    return {
      error: "You have reached your Limit of free board. please upgrade to create more."
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

    if (!isPro) {
      await incrementAvailableCount()
    }

    await createAuditLog({
      entityTitle: board.title,
      entityId: board.id,
      entityType: ENTITY_TYPE.BOARD,
      action: ACTION.CREATE,
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
