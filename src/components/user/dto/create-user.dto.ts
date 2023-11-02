import { IsString, IsNotEmpty, IsEmail, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty({ message: 'El nombre es requerido' })
    name: string

    @IsEmail()
    @IsNotEmpty({ message: 'El email es requerido' })
    email: string

    @IsString()
    @IsNotEmpty({ message: "La contraseña es requerida" })
    @MinLength(4)
    password: string

}
