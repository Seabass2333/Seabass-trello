import { z } from "zod";

export const CreateBoard = z.object({
  title: z.string({
    required_error: 'title required',
    invalid_type_error: 'title required'
  }).min(3, {
    message: 'title is shorter than required'
  })
})
