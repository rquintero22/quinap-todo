import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pendientes: number;
  filtrosValidos: fromFiltro.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltro.filtrosValidos;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.contarPendientes( state.todos );
      this.filtroActual = state.filtro;
    });
  }

  cambiarFiltro( nuevoFiltro: fromFiltro.filtrosValidos ) {
    
    const accion = new fromFiltro.SetFiltroAction( nuevoFiltro );

    this.store.dispatch( accion );
    
  }

  contarPendientes( todos: Todo[] ) {
    this.pendientes = todos.filter( todo => todo.completado).length;
  }

  borrarTodo() {
    const accion = new fromTodo.BorrarAllTodoAction();

    this.store.dispatch( accion );
  }

}
