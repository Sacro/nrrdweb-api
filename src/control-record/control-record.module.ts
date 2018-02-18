import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ControlRecord } from './control-record.entity';
import { ControlRecordController } from './control-record.controller';
import { ControlRecordService } from './control-record.service';


@Module({
  imports: [TypeOrmModule.forFeature([ControlRecord])],
  controllers: [ControlRecordController],
  components: [ControlRecordService]
})
export class ControlRecordModule {}
