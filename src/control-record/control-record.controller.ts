import { Controller, Get } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { ControlRecord } from './control-record.entity';
import { ControlRecordService } from './control-record.service';

@Controller('control-records')
export class ControlRecordController {
  constructor(private readonly controlRecordService: ControlRecordService) {}

  @Get()
  findAll() {
    return this.controlRecordService.findAll();
  }
}
