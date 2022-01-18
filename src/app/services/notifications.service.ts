import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private snackBar: MatSnackBar) {}

  notify(message: string, duration = 5000): void {
    this.snackBar.open(message, 'CLOSE', { duration });
  }
}
