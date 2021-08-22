import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../../quotes'

@Component({
  selector: 'app-add-quotes',
  templateUrl: './add-quotes.component.html',
  styleUrls: ['./add-quotes.component.css']
})
export class AddQuotesComponent implements OnInit {
  quoteAnother = new Quotes("","","","");
  @Output() displayQuote = new EventEmitter<Quotes>();

  displayNew(){
    this.displayQuote.emit(this.quoteAnother);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
