import { Controller, Post, Body } from "@nestjs/common";
import { PipelineHookDto } from "./pipeline-hook.dto";
import { CommonService } from "../common/common.service";

@Controller("/gitlab/webhook")
export class GitlabController {

    constructor(private readonly commonService: CommonService) {

    }

    @Post()
    public async accept(@Body() pipelineHookDto: PipelineHookDto) {
        console.log(pipelineHookDto)
        if(pipelineHookDto.object_attributes.ref === "master") {
            this.commonService.eventEmitter.emit("change", pipelineHookDto.object_attributes.status);
        }
    }
}