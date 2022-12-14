import { EmailTemplateModel } from 'src/app/models/emailTemplate.model';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalService } from 'src/app/services/confirmation-modal.service';

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.scss'],
})
export class EmailTemplateComponent {
  @Input() templateData!: EmailTemplateModel;

  @Input() isExistingTemplate = false;

  @Output() onTemplateUpdate = new EventEmitter<EmailTemplateModel>();
  @Output() onTemplatedelete = new EventEmitter<string>();

  constructor(
    public activeModal: NgbActiveModal,
    private confirmationModalService: ConfirmationModalService
  ) {}

  updateTemplate() {
    this.onTemplateUpdate.emit(this.templateData);
    this.activeModal.close('Close click');
  }

  deleteTemplate() {
    this.onTemplatedelete.emit(this.templateData._id);
    this.activeModal.close('Close click');
  }

  async openConfirm() {
    const modalRef = await this.confirmationModalService.open();
    modalRef.ok.subscribe((ok) => {
      this.deleteTemplate();
    });
  }
}
