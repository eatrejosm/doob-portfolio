import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ContactSubmissionsModule } from './contact-submissions/contact-submissions.module';

@Module({
  imports: [PrismaModule, ContactSubmissionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
