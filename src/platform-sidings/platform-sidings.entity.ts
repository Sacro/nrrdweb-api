import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PlatformSidings {
  @PrimaryGeneratedColumn() id: number;
  @Entity() locationCode: string;
  @Entity() platformId: string;
  @Entity() startDate: string;
  @Entity() endDate: string;
  @Entity() platformSidingLength: string;
  @Entity() powerSupplyType: string;
  @Entity() dooPassenger: string;
  @Entity() dooNonPassenger: string;
}
