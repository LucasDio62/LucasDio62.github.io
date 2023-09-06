import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("taskList") || "[]");

  constructor() {}

  ngDoCheck(): void {
    this.setLocalStorage()
  }

  public validation(event: string, index: number) {
    if(!event.length) {
      const confirm = window.confirm("task vazia deseja excluir?")
      if(confirm) {
        this.deleteItem(index)
      }
    }    
  }
  public setLocalStorage() {//toda a vez que ouvre atualizaçoes na lista de tarefas sera salva no locaStorage
    
    localStorage.setItem("taskList", JSON.stringify(this.taskList))
    //locasStorage funciona como os cokies dos sites ou seja se limpar o cache do navegador o localStorage sera resetado 
  }
  public deleteItem(event: number) {//funçao de deletar apenas 1 item de acordo com o seu index
    this.taskList.splice(event, 1)
    console.log(this.taskList, event)
  }
  public deleteAll() {//funçao resetar o taskList
    const confirm = window.confirm("deseja excluir todas as tarefas?")
    if (confirm) {
      this.taskList = []
    }
  }
  public setEmitValue(event: string) {
    this.taskList.push({task: event, checked: false})//funçao para dar um push no taskList atualizando as tasks
    
  }

}
