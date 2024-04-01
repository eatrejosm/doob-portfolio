import { Test, TestingModule } from '@nestjs/testing';
import { ContactSubmissionsController } from './contact-submissions.controller';
import { ContactSubmissionsService } from './contact-submissions.service';

describe('ContactSubmissionsController', () => {
  let controller: ContactSubmissionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactSubmissionsController],
      providers: [ContactSubmissionsService],
    }).compile();

    controller = module.get<ContactSubmissionsController>(ContactSubmissionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
