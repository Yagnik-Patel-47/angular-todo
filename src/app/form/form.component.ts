import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import Task from "../taskInterface";
import {
  trigger,
  style,
  animate,
  transition,
  sequence,
} from "@angular/animations";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
  animations: [
    trigger("formAnim", [
      transition("void => *", [
        style({ transform: "scale(0.8) translateY(-4rem)", opacity: 0 }),
        animate(
          300,
          style({ transform: "scale(1) translateY(0)", opacity: 1 })
        ),
      ]),
      transition("* => void", [
        sequence([
          animate(150, style({ transform: "scale(0.8)" })),
          animate(
            250,
            style({ transform: "scale(0.8) translateY(10rem)", opacity: 0 })
          ),
        ]),
      ]),
    ]),
  ],
})
export class FormComponent implements OnInit {
  @Output() AddNewTask: EventEmitter<Task> = new EventEmitter();
  @Input() showCreator!: boolean;

  title: string = "";
  description: string = "";

  constructor() {}

  ngOnInit(): void {}

  saveToLocalStorage() {
    if (!this.title) {
      alert("please write title.");
      return;
    }

    const newTask: Task = { title: this.title, description: this.description };

    this.AddNewTask.emit(newTask);

    this.title = "";
    this.description = "";
  }
}
