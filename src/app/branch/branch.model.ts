
import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Skill } from '../skill/skill.model';

@Table({ tableName: 'branches' })
export class Branch extends Model<Branch> {

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

    @ForeignKey(() => Skill)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    skill_parent_id: number;
}

