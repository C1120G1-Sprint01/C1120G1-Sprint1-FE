import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminChatComponent } from './admin-chat/admin-chat.component';
import { ChatRoomAdminComponent } from './chat-room-admin/chat-room-admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {ZoomComponent} from './zoom/zoom.component';

@NgModule({
  declarations: [AdminChatComponent, ChatRoomAdminComponent, ZoomComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ]
})
export class AdminChatModule { }
