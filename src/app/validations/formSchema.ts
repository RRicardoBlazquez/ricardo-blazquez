import { z } from "zod";

export const contactSchema = z.object({
    email: z.string().email({ message: "Ingrese un email valido" }),
    message: z.string().min(2, { message: "El mensaje debe tener al menos 2 caracteres." }).max(1000, { message: "El mensaje debe tener menos de 1000 caracteres." }),
});