import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import serviceAccount from '../config/firebase-adminsdk.json';

@Injectable()
export class FirebaseService {
  private readonly admin: admin.app.App;
  constructor() {
    console.log(serviceAccount);

    this.admin = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
      storageBucket: 'vivaapp-162b6.appspot.com',
    });
  }

  getStorage() {
    return this.admin.storage();
  }
}
