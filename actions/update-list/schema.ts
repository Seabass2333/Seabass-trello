import { z } from "zod";

export const UpdateList = z.object({
  title: z.string({
    required_error: 'title is too short',
    invalid_type_error: 'title is required'
  }).min(3, {
    message: 'title is too short',
  }),
  id: z.string(),
  boardId: z.string(),
})
