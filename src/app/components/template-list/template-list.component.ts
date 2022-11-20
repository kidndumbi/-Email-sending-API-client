import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { EmailTemplateModel } from 'src/app/models/emailTemplate.model';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss'],
})
export class TemplateListComponent implements OnInit, OnChanges {
  @Input() emailTemplates: EmailTemplateModel[] = [];

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('in here? ', this.emailTemplates);
  }
}
