import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/api';  // URL de l'API

  constructor(private http: HttpClient) { }

  // Récupérer toutes les tâches
  getTasks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tasks`);
  }

  // Créer une nouvelle tâche
  createTask(task: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/task`, task);
  }

  // Modifier une tâche existante
  updateTask(id: number, updates: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/task/${id}`, updates);
  }

  // Supprimer une tâche
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/task/${id}`);
  }
}







// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {
//   private apiUrl = 'http://localhost:3000/api';

//   constructor(private http: HttpClient) { }

//   getTasks() {
//     return this.http.get(`${this.apiUrl}/tasks`);
//   }

//   createTask(task: any) {
//     return this.http.post(`${this.apiUrl}/task`, task);
//   }
// }
