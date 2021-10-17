import { Component, OnInit } from '@angular/core';
import { Agenda } from '../agenda'
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-agenda-listar',
  templateUrl: './agenda-listar.component.html',
  styleUrls: ['./agenda-listar.component.scss']
})
export class AgendaListarComponent implements OnInit {

  agendas: Array<Agenda>

  constructor(private agendaService:AgendaService) { }

  getAgendas(): void{
    this.agendaService.getAgendas().subscribe(agendas => {
      this.agendas = agendas;
    });
  }

  ngOnInit() {
    this.getAgendas();
  }

}
