import { Module } from '@nestjs/common';
import { GitlabModule } from './gitlab/gitlab.module';

@Module({
  imports: [GitlabModule],
})
export class ApplicationModule {}