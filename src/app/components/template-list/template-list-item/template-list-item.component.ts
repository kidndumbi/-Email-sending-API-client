import { EmailTemplateModel } from './../../../models/emailTemplate.model';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-template-list-item',
  templateUrl: './template-list-item.component.html',
  styleUrls: ['./template-list-item.component.scss'],
})
export class TemplateListItemComponent {
  @Input() emailTemplate: EmailTemplateModel | undefined;
}
