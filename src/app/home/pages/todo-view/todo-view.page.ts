import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { TodoListService } from '../../../shared/services/todo-list.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-todo-view',
    templateUrl: './todo-view.page.html',
    styleUrls: ['./todo-view.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoViewPage implements OnInit, OnDestroy {
    public toDoListData$ = this.todoListService.toDoListData$;
    private _subscription: Subscription;

    constructor(private todoListService: TodoListService,
                private activatedRoute: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this._subscription = this.activatedRoute.url
            .subscribe(() => this.todoListService.isRootPage = false);
    }

    public ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }

}
