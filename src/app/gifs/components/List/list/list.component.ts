import { Component, Input } from '@angular/core';
import { Gif } from '../../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-list-main',
  templateUrl: './list.component.html',
})
export class ListComponent {
  constructor() { }

  @Input()
  public gifs:Gif[]=[];

}
