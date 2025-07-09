// src/app/services/token.service.ts
import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  async saveToken(token: string): Promise<void> {
    await Storage.set({ key: 'token', value: token });
  }

  async getToken(): Promise<string | null> {
    const { value } = await Storage.get({ key: 'token' });
    return value;
  }

  async removeToken(): Promise<void> {
    await Storage.remove({ key: 'token' });
  }
}
