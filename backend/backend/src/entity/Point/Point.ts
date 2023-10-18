import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  Relation,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Retailer } from '../Retailer/Retailer';
import { UserStampPoint } from '../UserStampPoint/UserStampPoint';

@Entity()
@Unique(['retailerId', 'name'])
export class Point {
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

  @Column()
  name: string;

  @Column()
  spendingNeededPerPoint: number;

  @Column({ default: 1 })
  pointToDollarValue: number;

  @ManyToOne(() => Retailer, (retailer) => retailer.points)
  @JoinColumn({
    name: 'retailerId',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_point_retailer_id',
  })
  retailerId: Relation<Retailer>;

  @OneToMany(() => UserStampPoint, (userStampPoint) => userStampPoint.pointId)
  @JoinColumn()
  userStampPoints: UserStampPoint[];
}
