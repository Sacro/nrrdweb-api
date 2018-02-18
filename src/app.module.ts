import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';

import { ControlRecordModule } from './control-record/control-record.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ControlRecordModule],
  controllers: [AppController],
  components: []
})
export class ApplicationModule {}
