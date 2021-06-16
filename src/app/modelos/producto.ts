export interface Producto {
    id:number
    nombre: string, 
    precio:number, 
    categoria:Categoria,
    categoriaid:number
}

export interface Categoria {
    id:number
    descripcion: string, 
}
