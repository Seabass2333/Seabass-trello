import { z } from "zod";

export const CreateList = z.object({
  title: z.string({
    required_error: 'title is too short',
    invalid_type_error: 'title is required'
  }).min(3, {
    message: 'title is too short',
  }),
  boardId: z.string()
})
