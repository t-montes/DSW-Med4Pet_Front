import { Component, OnInit } from '@angular/core';
import { Pse } from '../pse';
import { PseService } from '../pse.service';

@Component({
  selector: 'app-pse-listar',
  templateUrl: './pse-listar.component.html',
  styleUrls: ['./pse-listar.component.css']
})
export class PseListarComponent implements OnInit {

  constructor(private pseService: PseService) { }
  pses: Array<Pse>;

  ngOnInit() {
    this.getPses();
  }

  getPses(): void {
    this.pseService.getPses().subscribe(pses => {
      this.pses = pses;
    })
  }

}
