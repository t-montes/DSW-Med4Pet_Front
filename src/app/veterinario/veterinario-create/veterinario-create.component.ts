import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { Agenda } from 'src/app/agenda/agenda';
import { AgendaService } from 'src/app/agenda/agenda.service';
import { Servicio } from 'src/app/servicio/servicio';
import { ServicioService } from 'src/app/servicio/servicio.service';
import { ServicioDetail } from 'src/app/servicio/servicioDetail';
import { Veterinario } from '../veterinario';
import { VeterinarioService } from '../veterinario.service';
import { VeterinarioDetail } from '../veterinarioDetail';

@Component({
  selector: 'app-veterinario-create',
  templateUrl: './veterinario-create.component.html',
  styleUrls: ['./veterinario-create.component.scss']
})
export class VeterinarioCreateComponent implements OnInit {
  veterinarioForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder, private toastr: ToastrService,
    private veterinarioService: VeterinarioService,
    private servicioService:ServicioService,
    private agendaService: AgendaService,
    private router: Router) { }

    servicios:ServicioDetail[];
    idRegistro:number;
    idContacto:number;
    yar:boolean = false;
    yac:boolean= false;

    addRegistro(registro:number)
    {
      this.idRegistro=registro;
      this.yar = true;
    }
    addContacto(contacto:number)
    {
      this.idContacto=contacto;
      this.yac = true;
      console.log(this.idContacto);
    }

  createVeterinario(newVeterinario: VeterinarioDetail){
    let lSstr:String[] = ((newVeterinario.serviciosOfrecidos as unknown) as String).split(',');
    let listServ:Servicio[] = [];
    for (let sstr of lSstr){
      let found:boolean = false;
      for (let s of this.servicios){
        if (s.nombre == sstr) {
          listServ.push(s);
          found=true;
          break;
        }
      }
      if (!found) {
        console.log("Servicio '"+sstr+"' no existe");
        return null;
      }
    }
    console.log(listServ);

    newVeterinario.calificacion = 0.0;
    console.warn("el veterinario fue creado", newVeterinario);
    this.veterinarioService.createVeterinario(newVeterinario).subscribe(v =>{
        this.showSuccess(v);
        //Se le asigna una agenda nueva al veterinario apenas se crea
        let newAgenda:Agenda = new Agenda(null,0,0,0,[]);
        this.agendaService.createAgenda(newAgenda).subscribe(ag => {
          this.toastr.success('Agenda creada exitosamente');
          this.veterinarioService.createRegistroMedicoVeterinario(v.id,this.idRegistro).subscribe(rm => {
            this.toastr.success('El registro médico ha sido asignado correctamente');
          });
          this.veterinarioService.createContactoVeterinario(v.id,this.idContacto).subscribe(co => {
            this.toastr.success('El contacto ha sido asignado correctamente');
          });
          for (let s of listServ) {
            this.veterinarioService.createServicioVeterinario(v.id,s.id).subscribe(s2 => {
              this.toastr.success('El servicio fue creado correctamente');
            });
          }
          this.agendaService.createAgendaVeterinario(ag.id, v.id).subscribe(ag2 => {
            this.toastr.success('La agenda ha sido asignada correctamente');
            this.router.navigate(['/veterinarios/'+v.id])
          });
        });
        this.veterinarioForm.reset();
      });
  }

  showSuccess(v: Veterinario){
    this.toastr.success('Creado exitosamente!', 'Veterinario ${{v.nombre}}', {"progressBar": true, timeOut: 4000});
  }

  cancelCreation(){
    console.log("Cancelando ...");
    this.veterinarioForm.reset();
  }

  ngOnInit() {
    this.veterinarioForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      especialidad: ["", Validators.required],
      certificadoEntrenamiento: ["", Validators.required],
      experienciaPrevia: ["", Validators.required],
      serviciosOfrecidos: ["", Validators.required]
    })
    this.servicioService.getServicios().subscribe((servicios)=>{
      this.servicios = servicios;
    })
  }

}
