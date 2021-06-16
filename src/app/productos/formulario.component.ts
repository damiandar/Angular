import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Categoria, Producto} from '../modelos/producto';
import {ActivatedRoute,Router} from '@angular/router';
import {ProductoService} from '../servicios/producto.service';
import {CategoriaService} from '../servicios/categoria.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
 

  formProducto:FormGroup;
  prodId:number;
  categorias: Categoria[]=[];
  titulo: string;
  categoriaSeleccionada:Categoria;

  constructor(private fb: FormBuilder,
              private prodSrv: ProductoService,
              private catSrv: CategoriaService,
              private activatedRoute:ActivatedRoute,
              private router:Router
              ) { }

  ngOnInit() { 
    //debo agregar todos los controles a medida que los agrego en el html
    //utilizo el formbuilder para construir el formulario
    //pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    //,[Validators.email]
    this.formProducto=this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(8)]],
      precio:[''], 
      categoria:''
      });
    this.categorias=[];

    this.catSrv.getAll()
    .subscribe(
      resultado=> this.categorias=resultado,
      error=> alert(error),
      ()=>  console.log("termino"),
    ); 

    this.activatedRoute.params.subscribe(
      params => {
        this.prodId= params['id']; 
        if(isNaN(this.prodId)){
          //no es numerico
          this.titulo="Ingresar nuevo alumno";
          return;
        }
        else{
          //es numerico  

          this.prodSrv.Buscar(this.prodId)
          .subscribe(
            resultado=> {  
                this.cargarFormulario(resultado);
              },
            error=> alert(error),
            ()=> console.log("")   ,
          );
    
        }
      }
    );
  }
  
  cargarFormulario(prod:Producto){
      //llenar campos del formulario
          this.formProducto.patchValue({
            nombre:prod.nombre,  
            precio:prod.precio,
            categoriaid:prod.categoriaid
          });
          this.formProducto.controls['categoria'].patchValue(prod.categoria);
  }
  
  GuardarFormulario(){
    
    let prodFormulario: Producto=Object.assign({},this.formProducto.value);
    prodFormulario.id=+this.prodId; 

      if(prodFormulario.id>0){
        //editamos
        console.log(prodFormulario);
        this.prodSrv.Actualizar(prodFormulario)
        .subscribe( 
                    ()=> alert("Modificado OK"),
                    error=> alert(error)
        );
      }
      else{
        //creamos
        prodFormulario.id=0;
        this.prodSrv.Crear(prodFormulario)
            .subscribe( 
                    ()=> alert("Inserto OK"),
                    error=> {
                              console.log(error);
                              alert("Error al crear: " + error);
                            }
            );
      }
      this.router.navigate(["/productos-listado"])
      
  }  



compareFn(c1: Categoria, c2: Categoria): boolean { 
  return c1 && c2 ? c1.id === c2.id : c1 === c2;
}
 

mostrarTitulo(){
  return "Titulo de la aplicacion";
}

}
