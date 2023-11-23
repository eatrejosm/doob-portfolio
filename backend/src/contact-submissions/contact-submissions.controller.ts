import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactSubmissionsService } from './contact-submissions.service';
import { CreateContactSubmissionDto } from './dto/create-contact-submission.dto';
import { UpdateContactSubmissionDto } from './dto/update-contact-submission.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ContactSubmissionEntity } from './entities/contact-submission.entity';

@Controller('api/contact-submissions')
@ApiTags("Contact Submissions")
export class ContactSubmissionsController {
  constructor(private readonly contactSubmissionsService: ContactSubmissionsService) { }

  @Post()
  @ApiCreatedResponse({ type: ContactSubmissionEntity })
  create(@Body() createContactSubmissionDto: CreateContactSubmissionDto) {
    return this.contactSubmissionsService.create(createContactSubmissionDto);
  }

  @Get()
  @ApiOkResponse({ type: ContactSubmissionEntity, isArray: true })
  findAll() {
    return this.contactSubmissionsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ContactSubmissionEntity })
  findOne(@Param('id') id: string) {
    return this.contactSubmissionsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ContactSubmissionEntity })
  update(@Param('id') id: string, @Body() updateContactSubmissionDto: UpdateContactSubmissionDto) {
    return this.contactSubmissionsService.update(+id, updateContactSubmissionDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ContactSubmissionEntity })
  remove(@Param('id') id: string) {
    return this.contactSubmissionsService.remove(+id);
  }
}
