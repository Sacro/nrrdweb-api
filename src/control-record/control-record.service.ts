import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ControlRecordModule } from './control-record.module';
import { Repository } from 'typeorm';
import { ControlRecord } from './control-record.entity';

@Component()
export class ControlRecordService {
  constructor(
    @InjectRepository(ControlRecord)
    private readonly controlRecordRepository: Repository<ControlRecord>
  ) {}

  async findAll(): Promise<ControlRecord[]> {
    return await this.controlRecordRepository.find();
  }
}
