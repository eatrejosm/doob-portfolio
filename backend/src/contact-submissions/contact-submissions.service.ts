import { Injectable } from '@nestjs/common';
import { CreateContactSubmissionDto } from './dto/create-contact-submission.dto';
import { UpdateContactSubmissionDto } from './dto/update-contact-submission.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactSubmissionsService {

  constructor(private prisma: PrismaService) { }

  create(createContactSubmissionDto: CreateContactSubmissionDto) {
    return this.prisma.contactSubmission.create({ data: createContactSubmissionDto });
  }

  findAll() {
    return this.prisma.contactSubmission.findMany()
  }

  findOne(id: number) {
    return this.prisma.contactSubmission.findUnique({ where: { id } });
  }

  update(id: number, updateContactSubmissionDto: UpdateContactSubmissionDto) {
    return this.prisma.contactSubmission.update({ where: { id }, data: updateContactSubmissionDto })
  }

  remove(id: number) {
    return this.prisma.contactSubmission.delete({ where: { id } })
  }
  


}
