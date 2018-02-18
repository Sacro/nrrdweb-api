import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TimingLoad {
  @PrimaryGeneratedColumn() id: number;
   @Column() tractionType: string;
   @Column() trailingLoad: string;
   @Column() speed: number;
   @Column() ra: string;
   @Column() gauage: string;
   @Column() description: string;
   @Column() itpsPowerType: string;
   @Column() itpsLoad: string;
   @Column() limitingSpeed: string;
}