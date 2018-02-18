import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ControlRecord {
  @PrimaryGeneratedColumn() id: number;
  @Column() fileVersion: string;
  @Column() sourceSystem: string;
  @Column() tocId: string;
  @Column() timetableStartDate: string;
  @Column() timetableEndDate: string;
  @Column() cycleType: string;
  @Column() cycleStage: string;
  @Column() fileCreationDate: string;
  @Column() fileSequenceNumber: string;
}
