import { Component } from "@nestjs/common";
import { EventEmitter } from "events";

class MyEmitter extends EventEmitter {}

@Component()
export class CommonService {

    public eventEmitter: MyEmitter;

    constructor() {
        this.eventEmitter = new MyEmitter();
    }
    
}