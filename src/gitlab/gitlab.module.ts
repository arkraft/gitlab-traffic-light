import { Module } from '@nestjs/common';
import { CommonService } from '../common/common.service';
import { GitlabController } from './gitlab.controller';
import { SocketService } from './socket.service';
import { EventsGateway } from './events.gateway';


@Module({
  components: [CommonService, SocketService, EventsGateway],
  controllers: [GitlabController],
  exports: [CommonService]
})
export class GitlabModule {}