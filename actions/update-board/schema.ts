import { z } from "zod";

export const UpdateBoard = z.object({
  title: z.string({
    required_error: 'title is too short',
    invalid_type_error: 'title isrequired'
  }).min(3, {
    message: 'title is too short',
  }),
  id: z.string()
})
