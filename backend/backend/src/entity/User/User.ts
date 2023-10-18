import {
  Entity,
  PrimaryColumn,
  Column,
  Generated,
  OneToMany,
  JoinColumn,
  Relation,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserStampPoint } from '../UserStampPoint/UserStampPoint.js';
import { Gender } from './User.types.js';

@Entity()
export class User {
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

  @Column({
    unique: true,
  })
  username: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    type: 'enum',
    enum: Gender,
  })
  gender: Gender;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'date',
  })
  dateOfBirth: Date;

  @OneToMany(
    () => UserStampPoint,
    (userRetailerPoints) => userRetailerPoints.userId
  )
  @JoinColumn()
  userRetailerPoints: Relation<UserStampPoint>[];
}
