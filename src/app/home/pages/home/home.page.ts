import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { TodoListService } from '../../../shared/services/todo-list.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit, OnDestroy {
    private _subscription: Subscription;

    constructor(private todoListService: TodoListService,
                private activatedRoute: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this._subscription = this.activatedRoute.url
            .subscribe(() => this.todoListService.isRootPage = true);
    }

    public ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }
}
