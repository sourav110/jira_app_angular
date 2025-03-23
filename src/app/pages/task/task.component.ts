import { DatePipe, NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  imports: [FormsModule, DatePipe, NgClass, NgIf],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  taskObj: Task;// = new Task();
  taskList: Task[] = [];
  originalTaskList: Task[] = [];

  taglist: string[] = ['Work', 'Health', 'Hobby', 'Sports', 'Education', 'Travel', 'Fun', 'Holiday'];
  filterType: string = '';
  selectedTag: string = '';

  constructor() {
    this.taskObj = new Task();
    const localData = localStorage.getItem("taskList");
    if(localData != null) {
      this.taskList = JSON.parse(localData);
      console.log(this.taskList);
      this.originalTaskList = this.taskList;
    }
  }
  
  addNewTask() {
    debugger
    const task = JSON.stringify(this.taskObj);
    const taskJson = JSON.parse(task);

    this.taskList.push(taskJson);
    this.originalTaskList = this.taskList;
    localStorage.setItem("taskList", JSON.stringify(this.taskList));
  }

  onComplete() {
    debugger
    this.originalTaskList = this.taskList;
    localStorage.setItem("taskList", JSON.stringify(this.taskList));
  }

  onRemove(index: number) {
    debugger
    this.taskList.splice(index, 1);
    this.originalTaskList = this.taskList;
    localStorage.setItem("taskList", JSON.stringify(this.taskList));
  }

  getArrayFromCommaSepStr(tags: string): string[] {
    const arr = tags.split(',');
    return arr;
  }

  clearAll() {
    debugger;
    localStorage.removeItem("taskList");
  }

  setFilterType(type: string) {
    this.filterType = type;
    this.selectedTag = '';
    this.taskList = this.originalTaskList;
    if(this.filterType == 'completed') {
      this.taskList = this.originalTaskList.filter(x=> x.isComplete);
    } else{
      this.taskList = this.originalTaskList;
    }
  }

  filterByType(tag: string) {
    debugger
    this.selectedTag = tag;
    const filteredData = this.originalTaskList.filter((item)=> {
      return item.tags.includes(tag);
    })
    this.taskList = filteredData;
  }
}

export class Task {
  taskName: string;
  dueDate: string;
  tags: string;
  isComplete: boolean;

  constructor() {
    this.taskName = "";
    this.dueDate = "";
    this.tags = "";
    this.isComplete = false;
  }
}