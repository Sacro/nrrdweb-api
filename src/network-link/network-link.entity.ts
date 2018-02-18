import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NetworkLink {
  @PrimaryGeneratedColumn() id: number;
  @Column() originLocation: string;
  @Column() destinationLocation: string;
  @Column() runningLineCode: string;
  @Column() runningLineDescription: string;
  @Column() startDate: string;
  @Column() endDate: string;
  @Column() initialDirection: string;
  @Column() finalDirection: string;
  @Column() distance: string;
  @Column() dooPassenger: string;
  @Column() dooNonPassenger: string;
  @Column() retb: string;
  @Column() zone: string;
  @Column() reversibleLine: string;
  @Column() powerSupplyType: string;
  @Column() ra: string;
  @Column() maximumTrainLength: string;
}
