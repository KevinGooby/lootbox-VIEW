import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  Relation,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../User/User.js';
import { Location } from '../Location/Location.js';
import { Stamp } from '../Stamp/Stamp.js';
import { Point } from '../Point/Point.js';

@Entity()
@Unique(['locationId', 'userId'])
export class UserStampPoint {
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

  @Column('int', { nullable: true })
  points: number;

  @Column('int', { nullable: true })
  timesVisited: number;

  @ManyToOne(() => User, (user) => user.userRetailerPoints)
  @JoinColumn({
    name: 'userId',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_user_retailer_points_user_id',
  })
  userId: Relation<User>;

  @ManyToOne(() => Location, (location) => location.userRetailerPoints)
  @JoinColumn({
    name: 'locationId',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_user_retailer_points_location_id',
  })
  locationId: Relation<Location>;

  @ManyToOne(() => Stamp, (stamp) => stamp.userStampPoints, { nullable: true })
  @JoinColumn({
    name: 'stampId',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_user_stamp_point_stamp_id',
  })
  stampId: Relation<Stamp>;

  @ManyToOne(() => Point, (point) => point.userStampPoints, { nullable: true })
  @JoinColumn({
    name: 'pointId',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_user_stamp_point_point_id',
  })
  pointId: Relation<Point>;
}
