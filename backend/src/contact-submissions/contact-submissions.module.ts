import { Module } from '@nestjs/common';
import { ContactSubmissionsService } from './contact-submissions.service';
import { ContactSubmissionsController } from './contact-submissions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ContactSubmissionsController],
  providers: [ContactSubmissionsService],
  imports: [PrismaModule]
})
export class ContactSubmissionsModule {}
