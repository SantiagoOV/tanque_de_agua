import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Double } from "typeorm";

@Entity()
export class HistoricalInterface {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    unidad_medida!: string;

    @Column({ type: 'double' })
    llenado!: number;

    @Column({ type: 'double' })
    vaciado!: number;

    @Column({ type: 'double' })
    disponibilidad!: number;

    @Column()
    total_capacity!: number;
    
    @CreateDateColumn()
    createdAt!: Date;
}