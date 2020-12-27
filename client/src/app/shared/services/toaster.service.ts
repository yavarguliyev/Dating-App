import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  constructor(private toastr: ToastrService) { }

  public success(message: string, title: string) {
    this.toastr.success(message, title, {
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
      easing: '500',
      easeTime: '500',
      enableHtml: true
    });
  }

  public info(message: string, title: string) {
    this.toastr.info(message, title, {
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
      easing: '500',
      easeTime: '500',
      enableHtml: true
    });
  }

  public danger(message: string, title: string) {
    this.toastr.error(message, title, {
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
      easing: '500',
      easeTime: '500',
      enableHtml: true
    });
  }
}
