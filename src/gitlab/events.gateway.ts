import {
    WebSocketGateway,
    SubscribeMessage,
    WsResponse,
    WebSocketServer,
    WsException,
  } from '@nestjs/websockets';
  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/from';
  import 'rxjs/add/operator/map';
import { CommonService } from '../common/common.service';
  
  @WebSocketGateway({ port: 81, namespace: 'events' })
  export class EventsGateway {

    @WebSocketServer() server;

    constructor(private readonly commonService: CommonService) {
        
    }

    @SubscribeMessage('events')
    onEvent(client, data): Observable<WsResponse<number>> {
        const event = 'events';
        const response = [1, 2, 3];
    
        this.commonService.eventEmitter.on("change", (status) => {
            client.emit("change", status);
        })
        return Observable.from(response).map(res => ({ event, data: res }));
    }
  }