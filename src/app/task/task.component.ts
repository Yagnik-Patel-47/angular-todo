import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import Task from "../taskInterface";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Input() index!: number;
  @Output() passRemoveEvent: EventEmitter<number> = new EventEmitter();

  showDescription: boolean = false;
  btnText: string = "show description";

  constructor() {}

  ngOnInit(): void {}

  getIndex(index: number) {
    this.passRemoveEvent.emit(index);
  }

  toggleShowDes() {
    this.showDescription = !this.showDescription;
    if (this.showDescription === true) {
      this.btnText = "close description";
    } else {
      this.btnText = "show description";
    }
  }
}
