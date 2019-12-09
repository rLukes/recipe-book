import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "header",
  templateUrl: "header.component.html"
})
export class HeaderComponent {
  name: string = "co";
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(type: string) {
    this.featureSelected.emit(type);
  }
}
