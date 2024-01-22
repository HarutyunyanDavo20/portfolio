
import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../user/user.model';

@Table({ tableName: 'skills' })
export class Skill extends Model<Skill> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    user_id: number;


}
