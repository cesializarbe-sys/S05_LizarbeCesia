import { Injectable } from '@angular/core';

export interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tareas: Tarea[] = [
    { id: 1, texto: 'Estudiar Angular', completada: false },
    { id: 2, texto: 'Hacer tarea', completada: false },
    { id: 3, texto: 'Comprar comida', completada: false },
    { id: 4, texto: 'Lavar ropa', completada: false }
  ];

  private proximoId = 5;

  getTareas(): Tarea[] {
    return this.tareas;
  }

  agregarTarea(tarea: string): void {
    if (tarea.trim() !== '') {
      this.tareas.push({
        id: this.proximoId++,
        texto: tarea.trim(),
        completada: false
      });
    }
  }

  eliminarTarea(id: number): void {
    const index = this.tareas.findIndex(t => t.id === id);
    if (index > -1) {
      this.tareas.splice(index, 1);
    }
  }

  marcarCompletada(id: number): void {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
    }
  }

}