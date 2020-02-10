import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employeeform';
  eForm:FormGroup;
  items:FormArray;

  constructor(private fb:FormBuilder){
this.eForm = this.fb.group({
  items: this.fb.array([
    this.createItem() 
  ])
})
  }

  createItem(): FormGroup {
    return this.fb.group({
      eId: ['',Validators.required],
      eName: ['',Validators.required]
      
    });
  }

  addEmp(): void {
    this.items = this.eForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  details(values){
console.log(values);
  }


}
