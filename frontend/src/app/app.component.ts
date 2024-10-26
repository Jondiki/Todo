import { Component, OnInit } from '@angular/core';
import { TaskService } from './task/task.service'; // Service qui gère les appels API
import { FormsModule } from '@angular/forms';  // Assure-toi d'importer FormsModule

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    tasks: any[] = [];  // Liste des tâches
    newTaskTitle: string = '';  // Stocke le titre de la nouvelle tâche
    newTaskDescription: string = '';  // Stocke la description de la nouvelle tâche

    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
        this.loadTasks();  // Charger les tâches au démarrage
    }

    // Fonction pour charger les tâches à partir de l'API
    loadTasks() {
        this.taskService.getTasks().subscribe((data: any) => {
            this.tasks = data;
        });
    }

    // Fonction pour ajouter une nouvelle tâche
    addTask() {
        if (this.newTaskTitle && this.newTaskDescription) {
            const newTask = {
                title: this.newTaskTitle,
                description: this.newTaskDescription
            };
            this.taskService.createTask(newTask).subscribe(() => {
                this.loadTasks();  // Recharger les tâches après l'ajout
                this.newTaskTitle = '';  // Réinitialiser le champ
                this.newTaskDescription = '';  // Réinitialiser le champ
            });
        }
    }

    // Fonction pour supprimer une tâche
    deleteTask(id: number) {
        this.taskService.deleteTask(id).subscribe(() => {
            this.loadTasks();  // Recharger les tâches après suppression
        });
    }

    // Fonction pour marquer une tâche comme terminée
    markTaskAsCompleted(id: number) {
        this.taskService.updateTask(id, { isCompleted: true }).subscribe(() => {
            this.loadTasks();  // Recharger les tâches après modification
        });
    }
}
