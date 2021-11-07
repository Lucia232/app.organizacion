import {Entity, model, property, hasMany} from '@loopback/repository';
import {Empleado} from './empleado.model';
import {Cliente} from './cliente.model';

@model()
export class Empresa extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @hasMany(() => Empleado, {through: {model: () => Cliente}})
  empleados: Empleado[];

  @property({
    type: 'string',
  })
  empleadoId?: string;

  @property({
    type: 'string',
  })
  clienteId?: string;

  constructor(data?: Partial<Empresa>) {
    super(data);
  }
}

export interface EmpresaRelations {
  // describe navigational properties here
}

export type EmpresaWithRelations = Empresa & EmpresaRelations;
