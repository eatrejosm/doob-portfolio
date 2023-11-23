import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEmpty, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateContactSubmissionDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @ApiProperty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    email: string;

    @IsOptional()
    @ApiProperty({ required: false })
    phone?: string

    @IsString()
    @IsOptional()
    @MaxLength(100)
    @ApiProperty({ required: false })
    subject?: string

    @IsString()
    @IsNotEmpty()
    @MinLength(50)
    @ApiProperty()
    message: string
}
