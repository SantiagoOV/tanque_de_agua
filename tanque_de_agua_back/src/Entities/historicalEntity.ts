import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Capabilities } from "./capacidadEntity";

@Entity()
export class Historical {
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

    @ManyToOne(() => Capabilities, capabilities => capabilities.historical)
    @JoinColumn({ name: 'total_capacity' })
    capabilities!: Capabilities;

    @CreateDateColumn()
    createdAt!: Date;
}