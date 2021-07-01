import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ContainerComponent } from "./container/container.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./header/header.component";
import { FormComponent } from "./form/form.component";
import { TaskbarComponent } from "./taskbar/taskbar.component";
import { TaskComponent } from "./task/task.component";

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    FormComponent,
    TaskbarComponent,
    TaskComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
