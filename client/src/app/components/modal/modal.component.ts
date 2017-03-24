import {Component, OnInit, ElementRef} from "@angular/core";

declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  modalEl = null;
  id: string = uniqueId('modal_');

  constructor(private _rootNode: ElementRef) {}

  open() {
    this.modalEl.modal('show');
  }

  close() {
    this.modalEl.modal('hide');
  }

  ngOnInit() {
    this.modalEl = $(this._rootNode.nativeElement).find('div.modal');
    this.open();
  }

}

let modal_id: number = 0;
export function uniqueId(prefix: string): string {
  return prefix + ++modal_id;
}
