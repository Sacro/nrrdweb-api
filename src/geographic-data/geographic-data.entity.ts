import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GeographicData {
  @PrimaryGeneratedColumn() id: number;
  @Column() locationName: string;
  @Column() startDate: string;
  @Column() endDate: string;
  @Column() osEasting: string;
  @Column() osNorthing: string;
  @Column() timingPointType: string;
  @Column() zone: string;
  @Column() stanoxCode: string;
  @Column() offNetworkIndicator: string;
  @Column() forceLpb: string;
}