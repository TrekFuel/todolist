import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TodoListService {
    private _toDoListData: string[] = [];

    private _isRootPage$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _toDoListData$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

    constructor() {
    }

    public get isRootPage$(): Observable<boolean> {
        return this._isRootPage$.asObservable();
    }

    public get toDoListData$(): Observable<string[]> {
        return this._toDoListData$.asObservable();
    }

    public set isRootPage(value: boolean) {
        this._isRootPage$.next(value);
    }

    public addToDoItem(toDoItem: string): void {
        this._toDoListData = [...this._toDoListData, toDoItem];
        this._toDoListData$.next(this._toDoListData);
    }

    public removeToDoItem(index: number, count: number): void {
        this._toDoListData.splice(index, count);
        this._toDoListData$.next(this._toDoListData);
    }
}
