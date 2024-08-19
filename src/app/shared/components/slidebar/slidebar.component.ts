import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrl: './slidebar.component.css'
})
export class SlidebarComponent {

  constructor(private gifsService:GifsService) { }

  get Tags(): string[]{
    return this.gifsService.tagsHistory;
  }

  SearchAgain( tag : string): void{
    this.gifsService.SearchTag(tag);
  }

}
