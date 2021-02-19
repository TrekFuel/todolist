import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TodoListService } from '../../../shared/services/todo-list.service';

@Component({
    selector: 'app-todo-items-list',
    templateUrl: './todo-items-list.component.html',
    styleUrls: ['./todo-items-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemsListComponent {
    @Input() toDoListData: string[] = [];

    constructor(private toDoListService: TodoListService) {
    }

    deleteToDoItem(index: number): void {
        this.toDoListService.removeToDoItem(index, 1);
    }

}
