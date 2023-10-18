import {
  Entity,
  PrimaryColumn,
  Column,
  Generated,
  ManyToOne,
  JoinColumn,
  Relation,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Roles } from './RetailerUser.types.js';
import { Retailer } from '../Retailer/Retailer.js';

@Entity()
export class RetailerUser {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Roles,
  })
  role: Roles;

  @OneToMany(() => Retailer, (retailer) => retailer.retailerUser)
  @JoinColumn()
  retailers: Retailer[];
}
