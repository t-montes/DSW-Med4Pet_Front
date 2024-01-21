import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastrService } from "ngx-toastr";
import { PseService } from '../pse.service';

@Component({
  selector: 'app-pse-create',
  templateUrl: './pse-create.component.html',
  styleUrls: ['./pse-create.component.scss']
})
export class PseCreateComponent implements OnInit {

  pseForm: UntypedFormGroup;
  constructor(private formBuilder: UntypedFormBuilder, private toastr: ToastrService,
    private pseService:PseService) { }

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
    this.pseService.createPse(newPse).subscribe(p => {
      this.toastr.success('PSE creado exitosamente');
    });
    this.pseForm.reset();
  }

}
