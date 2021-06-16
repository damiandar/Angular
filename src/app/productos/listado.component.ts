import { Component, OnInit } from '@angular/core';
import { Producto} from '../modelos/producto';
import {ProductoService} from '../servicios/producto.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public campobuscado:string;
  public ListadoProductos:Producto[]=[];
  seleccionado: number;
  public mensajeingreso: string="Ingrese el nombre del producto";
  
  constructor(private serProd:ProductoService) { }
  
  recibirRespuesta(id:number){
    this.seleccionado=id;
  }

  ngOnInit() {
    this.LLenarLista();
  }

  Borrar(id:number){
    this.serProd.Borrar(id)
    .subscribe(
      ()=> this.LLenarLista(),
      error=> alert(error),
      ()=>  console.log("borro el producto"),
    );
  }

  BuscarProducto(){
    if(this.campobuscado!=""){
      this.serProd.BuscarPorNombre(this.campobuscado)
        .subscribe(
          (resultado)=>  this.ListadoProductos=resultado,
          error=> alert(error), 
      ); 
    }
    else{
      this.LLenarLista();
    }
  
  }

  LLenarLista(){
    this.serProd.getAll()
    .subscribe(
      resultado=> this.ListadoProductos=resultado ,
      error=> alert(error),
      ()=>  console.log("termino"),
    );
  }

}
