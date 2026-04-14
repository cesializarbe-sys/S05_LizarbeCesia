import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  @Input() tareas: Tarea[] = [];
  @Output() tareaEliminada = new EventEmitter<number>();
  @Output() tareaCompletada = new EventEmitter<number>();

  eliminar(id: number) {
    this.tareaEliminada.emit(id);
  }

  completar(id: number) {
    this.tareaCompletada.emit(id);
  }

}