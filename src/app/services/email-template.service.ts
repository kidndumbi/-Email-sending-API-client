import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { EmailTemplateModel } from '../models/emailTemplate.model';

@Injectable({
  providedIn: 'root',
})
export class EmailTemplateService {
  private templateList = new BehaviorSubject<EmailTemplateModel[]>([]);
  templateList$ = this.templateList.asObservable();

  domain = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  async getTemplates() {
    const templates = await lastValueFrom(
      this.http.get<EmailTemplateModel[]>(this.domain + '/api/templates')
    );

    this.templateList.next(templates);
  }

  async updateTemplate(emailTemplatedata: EmailTemplateModel) {
    await lastValueFrom(
      this.http.patch(this.domain + '/api/updateTemplate', emailTemplatedata)
    );
  }

  async createTemplate(emailTemplatedata: EmailTemplateModel) {
    const { _id, ...templateDataNoId } = emailTemplatedata;
    const createddata = await lastValueFrom(
      this.http.post(this.domain + '/api/createTemplate', templateDataNoId)
    );
  }
}
