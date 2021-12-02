import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-pse-create',
  templateUrl: './pse-create.component.html',
  styleUrls: ['./pse-create.component.scss']
})
export class PseCreateComponent implements OnInit {

  pseForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {

    this.pseForm = this.formBuilder.group({
      banco: ["", Validators.required],
      numeroTarjeta: ["", [Validators.required, Validators.minLength(12), Validators.maxLength(12)]]
    });
  }

  cancelCreation(){
    console.log("Cancelando ...");
    this.pseForm.reset();
  }

  createPse(newPse: any){
    console.warn("El pse fue creado", newPse);
    this.pseForm.reset();
  }

}
