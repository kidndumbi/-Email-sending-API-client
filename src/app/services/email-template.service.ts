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

  constructor(private http: HttpClient) {}

  async getTemplates() {
    const templates = await lastValueFrom(
      this.http.get<EmailTemplateModel[]>('/api/templates')
    );

    this.templateList.next(templates);
  }
}
