import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sub: string;

  @Column()
  name: string;

  @Column()
  email: string;
}
