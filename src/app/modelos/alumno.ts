export interface Alumno {
    id:number,
    nombre:string,
    apellido:string,
    fecha:any,
    activo:boolean,
    pais:Pais,
    estado:string,
    carrera:string,
    promedio:number
}

export interface AlumnoBecado extends Alumno { 
    esBecado:boolean
}

export interface Pais{
    id: number,
    descripcion:string
}

