import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-input',
  standalone: false,
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css'
})
export class TaskInputComponent {

  nuevaTarea: string = '';
  mensajeError: string = '';

  @Output() tareaAgregada = new EventEmitter<string>();

  agregar(){
    if (this.nuevaTarea.trim() === '') {
      this.mensajeError = 'Por favor, escribe una tarea';
      return;
    }
    
    this.tareaAgregada.emit(this.nuevaTarea);
    this.nuevaTarea = '';
    this.mensajeError = '';
  }

  limpiarError() {
    this.mensajeError = '';
  }

}