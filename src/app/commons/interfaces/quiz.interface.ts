
export interface QuizInterface {
	id: number;
	nombre: string;
	fecha_apertura: string;
	fecha_cierre: string;
	duracion: number;
	ponderacion: number;
	tipo: string;
	fecha_creacion: string;
	fecha_actualizacion?: any;
	usuario: UsuarioUsuario;
	preguntas: any[];
}

export interface UsuarioUsuario {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  fecha_ingreso: string;
  activo: boolean;
}
