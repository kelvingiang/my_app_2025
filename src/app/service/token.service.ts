import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  async saveToken(token: string): Promise<void> {
    await Preferences.set({ key: 'token', value: token });
  }

  async getToken(): Promise<string | null> {
    const { value } = await Preferences.get({ key: 'token' });
    return value;
  }

  async removeToken(): Promise<void> {
    await Preferences.remove({ key: 'token' });
  }
}