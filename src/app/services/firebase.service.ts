import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  // Método para guardar datos en Firestore
  saveData(collection: string, data: any) {
    return this.firestore.collection(collection).add(data);
  }
}
