import { CommonService } from "../common/common.service";
import { Component } from "@nestjs/common";

@Component()
export class SocketService {
    constructor(private readonly commonService: CommonService) {
    }
}