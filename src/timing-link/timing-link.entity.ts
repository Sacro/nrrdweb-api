import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TimingLink {
  @PrimaryGeneratedColumn() id: number;
  @Entity() originLocation: string;
  @Entity() destinationLocation: string;
  @Entity() runningLineCode: string;
  @Entity() tractionType: string;
  @Entity() trailingLoad: string;
  @Entity() speed: string;
  @Entity() ra: string;
  @Entity() gauge: string;
  @Entity() entrySpeed: string;
  @Entity() exitSpeed: string;
  @Entity() startDate: string;
  @Entity() endDate: string;
  @Entity() sectionalRunningTime: string;
  @Entity() description: string;
}