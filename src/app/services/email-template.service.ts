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
    try {
      const templates = await lastValueFrom(
        this.http.get<EmailTemplateModel[]>(this.domain + '/api/templates')
      );

      this.templateList.next(templates);
    } catch (error) {
      throw error;
    }
  }

  async updateTemplate(emailTemplatedata: EmailTemplateModel) {
    try {
      await lastValueFrom(
        this.http.patch(this.domain + '/api/updateTemplate', emailTemplatedata)
      );
    } catch (error) {
      throw error;
    }
  }

  async createTemplate(emailTemplatedata: EmailTemplateModel) {
    const { _id, ...templateDataNoId } = emailTemplatedata;

    try {
      const createddata = await lastValueFrom(
        this.http.post(this.domain + '/api/createTemplate', templateDataNoId)
      );

      this.getTemplates();
    } catch (error) {
      throw error;
    }
  }

  async deleteTemplate(_id: string) {
    try {
      await lastValueFrom(
        this.http.delete(this.domain + '/api/deleteTemplate/' + _id)
      );
      this.getTemplates();
    } catch (error) {
      throw error;
    }
  }
}
