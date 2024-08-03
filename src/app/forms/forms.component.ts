import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder,FormArray} from '@angular/forms';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
onSubmit(msgForm:any){
  console.log(msgForm.value)
}

myForm: FormGroup|any;

constructor(private fb: FormBuilder) { }
formdata:FormGroup | any;
ngOnInit(){
 
  this.formdata=this.fb.group({
    items:this.fb.array([])
  })  ;
  this.addItem()
  
}
onReactive(){
  if(this.formdata.valid){
    console.log(this.formdata.value)
  }
    
}
 // Convenience getter for easy access to form array control
 get itemsFormArray() {
  return this.formdata.get('items') as FormArray;
}

// Method to add new item to the FormArray
addItem() {
const itemFormGroup=this.fb.group({
    rfname:new FormControl('',Validators.required),
    rlname:new FormControl ('',Validators.required),
    rmsg:new FormControl
  }) ;
  this.itemsFormArray.push(itemFormGroup); // Add new FormGroup to FormArray
}

// Method to remove item from the FormArray
removeItem(index: number) {
  this.itemsFormArray.removeAt(index); // Remove FormGroup at index
}


}
