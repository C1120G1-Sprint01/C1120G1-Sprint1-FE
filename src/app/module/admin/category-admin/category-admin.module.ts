import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoyAdminComponent } from './add-categoy-admin/add-categoy-admin.component';
import { EditCategoyAdminComponent } from './edit-categoy-admin/edit-categoy-admin.component';
import { DeleteCategoyAdminComponent } from './delete-categoy-admin/delete-categoy-admin.component';
import { ListCategoyAdminComponent } from './list-categoy-admin/list-categoy-admin.component';



@NgModule({
  declarations: [AddCategoyAdminComponent, EditCategoyAdminComponent, DeleteCategoyAdminComponent, ListCategoyAdminComponent],
  imports: [
    CommonModule
  ]
})
export class CategoryAdminModule { }
