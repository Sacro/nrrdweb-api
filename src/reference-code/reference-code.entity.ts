import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ReferenceCode {
  @PrimaryGeneratedColumn() id: number;
  @Column() referenceCodeType: string;
  @Column() referenceCode: string;
  @Column() description: string;
}