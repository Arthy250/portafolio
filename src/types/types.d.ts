export type ProyectoDetalles = {
    id: string,
    nombre: string
    descripcion: string,
    imgUrl: string
    tipo: string,
    url?: string,
    githubUrl?: string
}

export type Servicio = {
    nombre: string,
    icono: string
}

export type Skill = {
    nombre: string,
    porcentaje: number
}