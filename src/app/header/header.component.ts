import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  animations: [
    trigger("headerAnim", [
      transition("void => *", [
        style({ transform: "translateY(-100%)" }),
        animate(300, style({ transform: "translateY(0)" })),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  @Output() toggleAddTask: EventEmitter<boolean> = new EventEmitter();
  @Input() showCreator!: boolean;

  btnText = "Close New";

  constructor() {}

  ngOnInit(): void {}

  toggleTaskCreator() {
    this.toggleAddTask.emit();
    if (!this.showCreator) {
      this.btnText = "Close New";
    } else {
      this.btnText = "New Task";
    }
  }
}
