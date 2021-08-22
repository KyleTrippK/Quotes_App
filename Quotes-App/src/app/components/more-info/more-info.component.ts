import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../../quotes'
import {faTrash}  from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {
  faTrash = faTrash;

  @Input() quote!: Quotes;
  @Output() quotesDelete = new EventEmitter<boolean>();
  quotesRemove(complete:boolean){
    this.quotesDelete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
