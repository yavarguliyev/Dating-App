import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-photo-management',
  templateUrl: './photo-management.component.html',
})
export class PhotoManagementComponent implements OnInit {
  photos: any;

  constructor(
    private adminService: AdminService,
    private toastr: ToasterService
  ) {}

  ngOnInit() {
    this.getPhotosForApproval();
  }

  getPhotosForApproval() {
    this.adminService.getPhotosForApproval().subscribe(
      (photos) => {
        this.photos = photos;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  approvePhoto(photoId) {
    this.toastr.success('You approved the selected photo', '');
  }

  rejectPhoto(photoId) {
    this.toastr.info('You rejected the selected photo', '');
  }
}
