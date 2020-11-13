import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  form: FormGroup;
  formArr: FormArray;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.form = this.formBuilder.group({
      todo: this.formBuilder.array([])
    });
    this.formArr = this.form.get('todo') as FormArray;
    this.addControl();
  }

  createControl(): FormControl {
    return this.formBuilder.control('');
  }

  addControl(): void {
    this.formArr.push(this.createControl());
  }

  removeControl(index: number): void {
    this.formArr.removeAt(index);
  }

  clearControl(index: number): void {
    this.formArr.at(index).reset();
  }

}
