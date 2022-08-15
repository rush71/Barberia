import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/shared/Service/service.service';

@Component({
  selector: 'app-cortes',
  templateUrl: './cortes.component.html',
  styleUrls: ['./cortes.component.css']
})
export class CortesComponent implements OnInit {

  cortes: any[]= [];


  

  constructor(private _cortesService: ServiceService,
              private toastr: ToastrService) {}


  ngOnInit(): void {
    this.getCortes();
  }

  getCortes(){
    this._cortesService.getCortes().subscribe(data =>{
      this.cortes=[];
      data.forEach((element: any) => {
        this.cortes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()

        })
         
      });
      console.log(this.cortes);
      
      
    })
  }

  eliminarCorte(id: string){
    this._cortesService.eliminarCorte(id).then(()=>{
      console.log('corte eliminado con exito');
      this.toastr.error('El corte fue eliminado con éxito', 'Registro eliminado', {
        positionClass: 'toast-bottom-right'
      } )
      
      
      
    }).catch(error=>{
      console.log(error);
      
    })
  }

}
