import { z } from "zod";
import data from "../users.json";

const userSchema = z.object({
  fullName: z.string().min(2).max(50),
  username: z
    .string()
    .min(2)
    .max(40)
    .regex(/^[a-zA-Z0-9_]+$/),
  email: z.string().email(),
  avatar: z.string().url(),
  address: z.object({
    street: z.string().min(2).max(50),
    city: z.string().min(2).max(50),
    zip: z.string().min(2).max(20),
  }),
  phoneNumber: z.string().regex(/^\+\d{2}\s\d{3}\s\d{3}\s\d{3}$/),
  gender: z.union([z.literal("Male"), z.literal("Female")]),
  age: z.number().min(18).max(65),
  images: z.array(z.string().url()),
});

type User = z.infer<typeof userSchema>;

function loadDataJson() {
    {
        let array1 = data.filter(element => element.age >= 18 && element.age <= 65).map((element) => {
            return userSchema.parse({
                fullName: element.full_name,
                username: element.nickname,
                email: element.email_address,
                address: {
                    city: element.user_address.city.city_name,
                    street: element.user_address.street_address,
                    zip: element.user_address.city.city_zip_code
                },
                phoneNumber: element.phone_number,
                gender: element.gender,
                age: element.age,
                images: element.imgs
            });
        });
        return array1;
    }
}

export async function getAllUsers(): Promise<User[]> {
    return loadDataJson();
}
