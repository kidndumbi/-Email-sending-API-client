import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailTemplateModel } from 'src/app/models/emailTemplate.model';
import { EmailTemplateComponent } from '../email-template/email-template.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Output() onCreateTemplate = new EventEmitter<EmailTemplateModel>();

  constructor(private modalService: NgbModal) {}

  openModal() {
    const modalRef = this.modalService.open(EmailTemplateComponent);
    const modalComponent = modalRef.componentInstance as EmailTemplateComponent;
    modalComponent.isExistingTemplate = false;
    modalComponent.templateData = {
      description: '',
      name: '',
      content: '',
    };
    modalComponent.onTemplateUpdate.subscribe((data) => {
      this.onCreateTemplate.emit(data);
    });
  }
}
