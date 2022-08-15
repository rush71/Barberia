import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private firestore: AngularFirestore) { }

  agregarCorte(corte: any): Promise<any>{
    return this.firestore.collection('cortes').add(corte);

  }

  getCortes():Observable<any>{
    return this.firestore.collection('cortes', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  eliminarCorte(id: string): Promise<any>{
    return this.firestore.collection('cortes').doc(id).delete();

  }

  getCorte(id: string): Observable<any>{
    return this.firestore.collection('cortes').doc(id).snapshotChanges();
  }

  actualizarCorte(id: string, data: any): Promise<any>{
    return this.firestore.collection('cortes').doc(id).update(data);

  }
}
