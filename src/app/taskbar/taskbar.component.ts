import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import Task from "../taskInterface";
import {
  transition,
  trigger,
  style,
  animate,
  sequence,
  stagger,
  query,
} from "@angular/animations";

@Component({
  selector: "app-taskbar",
  templateUrl: "./taskbar.component.html",
  styleUrls: ["./taskbar.component.css"],
  animations: [
    trigger("taskAnim", [
      transition("void => *", [
        style({ transform: "translateY(2rem)", opacity: 0 }),
        animate(200, style({ transform: "translateY(0)", opacity: 1 })),
      ]),
      transition("* => void", [
        sequence([
          animate(200, style({ transform: "scale(0.8)" })),
          animate(
            200,
            style({ transform: "scale(0.8) translateY(10rem)", opacity: 0 })
          ),
        ]),
      ]),
    ]),
    trigger("staggerTaskAnim", [
      transition("void => *", [
        query(":enter", [
          style({ transform: "translateY(2rem)", opacity: 0 }),
          stagger(100, [
            animate(300, style({ transform: "translateY(0)", opacity: 1 })),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class TaskbarComponent implements OnInit {
  @Input() tasks!: Task[];
  @Output() removeToDoByIndex: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  passRemoveEvent(index: number) {
    this.removeToDoByIndex.emit(index);
  }
}
