import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { OneToMany } from "typeorm";
import { User } from "../User/User.entity";
@Entity()
export class Org extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;  // first name of the user

  @Column()
  country!: string; // last name of the user

  @Column()
  domain!: string;  // name of organization

  @OneToMany(() => User, (user) => user.org_name)
  employees: User[]

}   