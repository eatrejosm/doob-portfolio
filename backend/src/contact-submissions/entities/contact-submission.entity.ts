import { ApiProperty } from "@nestjs/swagger";
import { ContactSubmission } from "@prisma/client";

export class ContactSubmissionEntity implements ContactSubmission {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string

    @ApiProperty()
    email: string

    @ApiProperty()
    phone: string

    @ApiProperty()
    subject: string

    @ApiProperty()
    message: string

    @ApiProperty()
    createdAt: Date

    @ApiProperty()
    updatedAt: Date
}
