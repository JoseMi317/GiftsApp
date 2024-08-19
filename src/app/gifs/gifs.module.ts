
import { CommonModule } from '@angular/common';
import { GifsCardsComponent } from './components/gifs-cards/gifs-cards.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { ListComponent } from './components/List/list/list.component';
import { NgModule } from '@angular/core';
import { SearchBoxComponent } from './components/Search-box/search-box.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    ListComponent,
    GifsCardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }
