import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5> Buscar: </h5>
  <input type="text"
  class="form-control"
  placeholder="Busca tus Gifs..."
  (keyup.enter)="searchTag()"
  #txtTagInput
  >
  `
})

export class SearchBoxComponent{

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef <HTMLInputElement>;

  constructor(private GifsService:GifsService) { }

  //searchTag(newTag:string){
    searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.GifsService.SearchTag(newTag);

    this.tagInput.nativeElement.value = '';

  }


}
