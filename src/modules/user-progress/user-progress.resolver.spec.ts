import { Test, TestingModule } from '@nestjs/testing';
import { UserProgressResolver } from './user-progress.resolver';
import { UserProgressService } from './user-progress.service';

describe('UserProgressResolver', () => {
  let resolver: UserProgressResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserProgressResolver, UserProgressService],
    }).compile();

    resolver = module.get<UserProgressResolver>(UserProgressResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
