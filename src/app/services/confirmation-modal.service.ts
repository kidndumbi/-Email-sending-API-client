import { BehaviorSubject, Subject } from 'rxjs';
import {
  Component,
  Injectable,
  Input,
  EventEmitter,
  Output,
  NgModuleRef,
} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationModalService {
  constructor(private modalService: NgbModal) {}

  open(header?: string, body?: string) {
    const modalRef = this.modalService.open(ModalView);
    const componentInstance = modalRef.componentInstance as ModalView;
    componentInstance.body = body;
    componentInstance.header = header;
    return {
      dismissed: modalRef.dismissed,
      closed: modalRef.closed,
      ok: componentInstance.$ok,
    };
  }
}

@Component({
  selector: 'ngbd-modal-confirm-autofocus',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">
        {{ header ? header : 'Please confirm!' }}
      </h4>
      <button
        type="button"
        class="btn-close"
        aria-label="Close button"
        aria-describedby="modal-title"
        (click)="modal.dismiss('Cross click')"
      ></button>
    </div>
    <div class="modal-body">
      <p>
        <strong>{{ body ? body : 'Are you sure' }} </strong>
      </p>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-secondary"
        (click)="modal.dismiss('cancel click')"
      >
        Cancel
      </button>
      <button
        type="button"
        ngbAutofocus
        class="btn btn-danger"
        (click)="onOk()"
      >
        Ok
      </button>
    </div>
  `,
})
export class ModalView {
  @Input() header: string | undefined = '';
  @Input() body: string | undefined = '';

  private ok = new Subject();
  $ok = this.ok.asObservable();

  constructor(public modal: NgbActiveModal) {}

  onOk() {
    this.modal.close();
    this.ok.next('i said ok!');
  }
}
