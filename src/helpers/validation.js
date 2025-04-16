import { z } from 'zod'

export const verifyFileSchema = z.object({
    file: z
        .instanceof(File, {
            message: 'Please select a file to proceed.'
        }),
    originialMD5: z
        .string()
        .optional()
})

export const compareMD5Schema = z.object({
    file: z
        .instanceof(File, {
            message: 'Please select a file to proceed.'
        }),
    originialMD5: z
        .string({
            message: 'Original MD5 value is required.'
        })
        .min(1, { message: 'Original MD5 cannot be empty.' }),
    fileHash: z
        .string({
            message: 'Calculated MD5 is required.'
        })
        .min(1, { message: 'Calculated MD5 cannot be empty.' })
});