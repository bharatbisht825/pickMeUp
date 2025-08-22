import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ManyToOne } from "typeorm";
import { Org } from "../Org/Org.entity";
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  first_name!: string;  // first name of the user

  @Column()
  last_name!: string; // last name of the user

  @ManyToOne(() => Org, (org) => org.name)
  org_name: Org
  
}   