'use server'

import { z } from 'zod'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export type State = {
  error?: {
    titles?: string[]
  }
  message?: string | null
}

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: 'Title must be at least 3 characters'
  })
})

export async function create(prevState: State, formData: FormData) {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get('title')
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing required fields'
    }
  }

  const { title } = validatedFields.data
  try {
    await db.board.create({
      data: {
        title
      }
    })
  } catch (error) {
    return {
      message: 'Could not create board'
    }
  }
  revalidatePath('/organization/org_2anAyxP7qVaHWIPzop4xhyaK6Df')
  redirect('/organization/org_2anAyxP7qVaHWIPzop4xhyaK6Df')
}
