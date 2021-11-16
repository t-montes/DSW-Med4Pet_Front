import { Component, OnInit } from '@angular/core';
import { CitaDetail } from '../citaDetail'
import { CitaService } from '../cita.service';
import { Cita } from '../cita';

@Component({
  selector: 'app-cita-listar',
  templateUrl: './cita-listar.component.html',
  styleUrls: ['./cita-listar.component.scss']
})
export class CitaListarComponent implements OnInit {

  citas: Array<CitaDetail> = [];
  currentDate: Date;
  currentWeek: Array<Date> = [];
  days: Array<String> = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  months: Array<String> = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  selected: boolean = false;
  selectedCita: CitaDetail;

  constructor(private citaService: CitaService) { }

  getCitas(): void {
    this.citaService.getCitas().subscribe(citas => {
      let i = 0;
      while (i < citas.length) {
        citas[i].fecha = new Date(citas[i].fecha);
        i++;
      }
      this.citas = citas;
    });
  }

  addDays = (from:Date, days:number=1): Date => new Date(from.getTime() + (days*1000*60*60*24));
  range = (start:number, end:number) => Array.from(Array(end - start + 1).keys()).map(x => x + start);
  numHours = (c:Cita) => Math.floor(c.duracion/60);

  citaInTime(dt:Date, h:number) : Cita {
    dt.setHours(h,0,0,0);
    for (let c of this.citas) {
      if (c.fecha.getTime() == dt.getTime()) {
        return c;
      }
    }
    return null;
  }

  citaInBetween(dt:Date, h:number) : boolean {
    /*Informa si está entre una cita, pero no si es una cita!*/
    dt.setHours(h,0,0,0);
    for (let c of this.citas) {
      let from:Date = c.fecha;
      let to:Date = new Date(from.getTime() + c.duracion*1000*60);
      if (from.getTime() < dt.getTime() &&
            to.getTime() > dt.getTime()) {
        return false;
      }
    }
    return true;
  }

  weekNotInBetween(h:number) : Array<Date> {
    let subweek:Array<Date> = [];
    for (let d of this.currentWeek) {
      if (this.citaInBetween(d,h)) {
        subweek.push(d);
      }
    }
    return subweek;
  }

  inCurrent(d:Date) : boolean {
    d.setHours(0,0,0,0);
    return d >= this.currentDate && d < this.addDays(this.currentDate)
  }

  classOfCell(d:Date,h:number) : string {
    let c: Cita = this.citaInTime(d,h);
    let cls: string = '';
    if (c) {
      cls += 'bordercell';
      cls += c.disponible ? ' disponible' : ' reservado';
    } else {
      cls += 'lrbordercell';
      cls += this.inCurrent(d) ? ' todaycol' : '';
    }
    return cls;
  }

  textOfCell (d:Date,h:number) : string {
    let c: Cita = this.citaInTime(d,h);
    let txt: string = '';
    if (c) {
      txt = c.disponible ? 'Disponible' : 'Reservado';
    }
    return txt;
  }

  ngOnInit() {
    this.getCitas();
    this.currentDate = new Date();
    this.currentDate.setHours(0,0,0,0);
    while (this.currentWeek.length < 6) {
      this.currentWeek.push(this.addDays(this.currentDate,this.currentWeek.length+1-this.currentDate.getDay()));
    }
  }

  onSelected(c: CitaDetail): void {
    this.selected = true;
    this.selectedCita = c;
  }

}
