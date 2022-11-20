import { EmailTemplateComponent } from './../email-template/email-template.component';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailTemplateModel } from 'src/app/models/emailTemplate.model';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss'],
})
export class TemplateListComponent {
  @Input() emailTemplates: EmailTemplateModel[] = [];
  @Output() onUpdateTemplate = new EventEmitter<EmailTemplateModel>();
  @Output() onUpdateDelete = new EventEmitter<string>();

  constructor(private modalService: NgbModal) {}

  openModal(templateData: EmailTemplateModel) {
    const modalRef = this.modalService.open(EmailTemplateComponent);
    const modalComponent = modalRef.componentInstance as EmailTemplateComponent;
    modalComponent.isExistingTemplate = true;
    modalComponent.templateData = templateData;
    modalComponent.onTemplateUpdate.subscribe((data) => {
      this.onUpdateTemplate.emit(data);
    });
    modalComponent.onTemplatedelete.subscribe((_id) => {
      this.onUpdateDelete.emit(_id);
    });
  }
}
