import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
    tasks: any[] = [];

    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
        this.loadTasks();
    }

    loadTasks() {
        this.taskService.getTasks().subscribe((data: any) => {
            this.tasks = data;
        });
    }

    addTask(title: string, description: string) {
        this.taskService.createTask({ title, description }).subscribe(() => {
            this.loadTasks();
        });
    }
}