import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/shared/Service/service.service';


@Component({
  selector: 'app-create-corte',
  templateUrl: './create-corte.component.html',
  styleUrls: ['./create-corte.component.css']
})
export class CreateCorteComponent implements OnInit {
  createCorte: FormGroup;
  submitted = false;
  loading= false;
  id!: string | null;
  titulo = 'Agregar Corte';


  constructor(private fb: FormBuilder,
              private service: ServiceService,
              private router: Router,
              private toastr: ToastrService,
              private aRoute: ActivatedRoute) {
    this.createCorte = this.fb.group({
      corte: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: ['', Validators.required]
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEditarCorte(){

    this.submitted = true;

    if(this.createCorte.invalid){
      return;

    }

    if(this.id === null){
      this.agregarCorte();
    } else{
      this.editarCorte(this.id)
    }

    
    
  }

  agregarCorte(){
    

    const corte: any={
      corte: this.createCorte.value.corte,
      categoria: this.createCorte.value.categoria,
      precio: this.createCorte.value.precio,

      fechaCreacion: new Date(),
      fechaActualizacion: new Date()


    }
    this.loading = true;
    this.service.agregarCorte(corte).then(()=> {
      this.toastr.success('El corte fue registrado con éxito', 'Corte registrado', {
        positionClass: 'toast-bottom-right'
      });
      this.loading = false;
      this.router.navigate(['/cortes'])
      
    }).catch(error =>{
      console.log(error);
      this.loading = false;
    })

  }

  editarCorte(id: string){
    

    const corte: any={
      corte: this.createCorte.value.corte,
      categoria: this.createCorte.value.categoria,
      precio: this.createCorte.value.precio,
      fechaActualizacion: new Date()


    }

    this.loading = true;

    this.service.actualizarCorte(id, corte).then(()=>{
      this.loading = false;
      this.toastr.info('El corte fue modificado con éxito', 'Corte modificado', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/cortes']);
    })


  }

  esEditar(){
    this.titulo = 'Editar Corte';
    if(this.id !== null){
      this.loading = true;
      this.service.getCorte(this.id).subscribe(data =>{
        this.loading = false;
        this.createCorte.setValue({
          corte: data.payload.data()['corte'],
          categoria: data.payload.data()['categoria'],
          precio: data.payload.data()['precio'],
        })
        
      })
    }
  }

}
