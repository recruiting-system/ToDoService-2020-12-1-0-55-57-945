import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../model/ToDoItem';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-update-todo-item',
  templateUrl: './update-todo-item.component.html',
  styleUrls: ['./update-todo-item.component.css']
})
export class UpdateTodoItemComponent implements OnInit {

  constructor(public todoItemService: TodoService) { 
  }

  ngOnInit(): void {
  }

  public updateTodoItem(): void{
    this.todoItemService.UpdateTodoItem(this.todoItemService.updatingToDoItem);
  }
}
