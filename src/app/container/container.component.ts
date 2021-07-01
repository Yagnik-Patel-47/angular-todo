import { Component, OnInit } from "@angular/core";
import Task from "../taskInterface";

@Component({
  selector: "app-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.css"],
})
export class ContainerComponent implements OnInit {
  tasks: Array<Task> = [];
  localStorageTodos: any = localStorage.getItem("appTodos");

  showTaskCreator = true;

  constructor() {}

  ngOnInit(): void {
    if (this.localStorageTodos === null) {
      this.tasks = [];
    } else {
      this.tasks = JSON.parse(this.localStorageTodos);
    }
  }

  addTaskToLocalStorage(task: Task) {
    let Tasks: Array<Task> = this.tasks;
    Tasks.unshift(task);
    localStorage.setItem("appTodos", JSON.stringify(Tasks));
  }

  removeTaskFromLocalStorage(index: number) {
    console.log(index);
    let Tasks: Array<Task> = this.tasks;
    Tasks.splice(index, 1);
    console.log(Tasks);
    localStorage.setItem("appTodos", JSON.stringify(Tasks));
  }

  toggleTaskCreator() {
    this.showTaskCreator = !this.showTaskCreator;
  }
}
