import { Component, OnInit } from '@angular/core';
import {Quotes} from '../../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  removeQuotes(quotesDelete, index){
    if(quotesDelete){
      this.quote.splice(index,1);
    }
  }
  toggleInfo(index){
    this.quote[index].showInfo = !this.quote[index].showInfo
  }

  constructor() { }

  ngOnInit(): void {
  }
  quote: Quotes[] = [
    new Quotes("Mark Twain", "Kyle","love", "Live in my heart pay no rent", "poems of Hafiz", new Date(2017, 5, 9)),
    new Quotes("Mark Twain", "Kyle","love", "Live in my heart pay no rent", "poems of Hafiz", new Date(2008, 7, 22)),
    new Quotes("Mark Twain", "Kyle","love", "Live in my heart pay no rent", "poems of Hafiz", new Date(2015, 11, 18))
  ];
  showAddedQuote(goal){
    goal.completeDate = new Date(goal.completeDate)
    this.quote.push(goal)
  }
}
