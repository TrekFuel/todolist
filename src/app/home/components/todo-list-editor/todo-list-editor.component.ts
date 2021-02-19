import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TodoListService } from '../../../shared/services/todo-list.service';

@Component({
    selector: 'app-todo-list-editor',
    templateUrl: './todo-list-editor.component.html',
    styleUrls: ['./todo-list-editor.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListEditorComponent implements OnInit {
    public form: FormGroup = null;
    public formArr: FormArray = null;

    constructor(private formBuilder: FormBuilder,
                private toDoListService: TodoListService) {
    }

    public ngOnInit(): void {
        this._initForm();
    }

    private _initForm(): void {
        this.form = this.formBuilder.group({
            todo: this.formBuilder.array([])
        });

        this.formArr = this.form.get('todo') as FormArray;
    }

    private _createControl(): FormControl {
        return this.formBuilder.control('');
    }

    public addControl(): void {
        this.formArr.push(this._createControl());
    }

    public removeControl(index: number): void {
        this.formArr.removeAt(index);
    }

    public clearControl(index: number): void {
        this.formArr.at(index).reset();
    }

    public saveControlValue(index: number): void {
        const control = this.formArr.controls[index];
        this.toDoListService.addToDoItem(control.value);
        this.removeControl(index);
    }

}
