import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponds,Gif } from '../interfaces/gifs.interfaces';
import { JsonPipe } from '@angular/common';

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[]=[];

  private _tagsHistory: string[] = [];

  private apiKey:     string='TrGTMtmlmuGsIaqxguVEZsJD1QpcCUrR';

  private serviceUrl: string ='https://api.giphy.com/v1/gifs';

  constructor(private http:HttpClient) {
    this.LoadLocalStorage();
    console.log('Gifs Service Ready')
  }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private OrganizeHistory(tag : string){
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldtag)=> oldtag !== tag)
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(){
    localStorage.setItem('history',JSON.stringify(this._tagsHistory));

  }

  private LoadLocalStorage (){
    if(!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')! );
    if (this._tagsHistory.length === 0) return;
    this.SearchTag(this.tagsHistory[0]);

    localStorage.getItem('history');

  }

  SearchTag(tag : string):void {

    if(tag.length === 0 ) return;
    this.OrganizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', tag)

    this.http.get<SearchResponds> (`${this.serviceUrl}/search`,{params})
      .subscribe(resp =>{

        this.gifList = resp.data;
        // console.log({gifs:this.gifList});

      })
  }

}
