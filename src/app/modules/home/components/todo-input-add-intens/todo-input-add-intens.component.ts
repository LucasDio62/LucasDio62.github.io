import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-intens',
  templateUrl: './todo-input-add-intens.component.html',
  styleUrls: ['./todo-input-add-intens.component.scss']
})
export class TodoInputAddIntensComponent implements OnInit {
  @Output() public emitItemTask = new EventEmitter()
  public addItemEmitter: string = ""
  constructor() {}
  ngOnInit(): void {
    
  }
  public submitItem() {
    this.addItemEmitter = this.addItemEmitter.trim()
    if(this.addItemEmitter) {
      this.emitItemTask.emit(this.addItemEmitter)
      this.addItemEmitter = ""
    }
  }
}
