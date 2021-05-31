import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { CreateChildCategoryComponent } from './create-child-category/create-child-category.component';
import { DeleteChildCategoryComponent } from './delete-child-category/delete-child-category.component';
import { EditChildCategoryComponent } from './edit-child-category/edit-child-category.component';
import { HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListChildCategoryComponent } from './list-child-category/list-child-category.component';
import { MainCategoryComponent } from './main-category/main-category.component';
import {NgxPaginationModule} from "ngx-pagination";



@NgModule({
  declarations: [
    EditCategoryComponent,
    ListCategoryComponent,
    CreateCategoryComponent,
    DeleteCategoryComponent,
    CreateChildCategoryComponent,
    DeleteChildCategoryComponent,
    EditChildCategoryComponent,
    ListChildCategoryComponent,
    MainCategoryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ]
})
export class CategoryAdminModule { }
