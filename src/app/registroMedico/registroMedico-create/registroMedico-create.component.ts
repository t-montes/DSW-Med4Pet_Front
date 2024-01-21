import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegistroMedico } from '../registroMedico';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { RegistroMedicoService } from '../registroMedico.service';


export class DatepickerOverviewExample {}
@Component({
  selector: 'app-registroMedico-create',
  templateUrl: './registroMedico-create.component.html',
  styleUrls: ['./registroMedico-create.component.css']
})
export class RegistroMedicoCreateComponent implements OnInit {
  picker:Date
  registroForm: UntypedFormGroup;
  model: NgbDateStruct;
  date: {year: number, month: number};
  @Output() newItemEvent = new EventEmitter<number>();
  constructor(private formBuilder: UntypedFormBuilder,private toastr: ToastrService,private calendar: NgbCalendar,private registroService:RegistroMedicoService) { }

    addNewItem(value: number) {
      this.newItemEvent.emit(value);
    }
  selectToday() {
    this.model = this.calendar.getToday();
  }
ngOnInit() {
  this.registroForm = this.formBuilder.group({
    identificacion: ["", [Validators.required, Validators.minLength(2)]],
    fechaExpedicion: ["", [Validators.required]],
    imagen:["", [Validators.required]]
  });
}
createRegistroMedico(newRegistro: RegistroMedico) {
  // Process checkout data here
  console.warn("el registro medico fue creado", newRegistro);
  this.registroService.createRegistroMedico(newRegistro).subscribe(calif => {
    this.toastr.success(calif.identificacion);
    this.addNewItem(calif.id);
    this.registroForm.reset();
     });
  this.registroForm.reset();

}
cancelCreation() {
  console.log("Cancelando ...");
  this.registroForm.reset();
}

}
