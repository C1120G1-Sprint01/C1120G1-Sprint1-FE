import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import firebase from 'firebase';
import {Chat} from '../../models/chat';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {Notification} from '../../models/notification';
import {Room} from '../../models/room';
import {ChatService} from '../../service/chat-box/chat.service';
import {Account, AccountRole, Role} from '../../models/account';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ZoomComponent} from '../../admin/admin-chat/zoom/zoom.component';
import {MatDialog} from '@angular/material/dialog';
import {User} from '../../models/user';
import {District, Province, Ward} from '../../models/address';
import {EmojiEvent} from "@ctrl/ngx-emoji-mart/ngx-emoji";

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  chats = new Array<Chat>();
  account: Account;
  user: User;
  ward: Ward;
  district: District;
  province: Province;
  chatFormUser: FormGroup;
  room: Room;
  accountRole: AccountRole;
  role: Role;
  notifications = new Array<Notification>();
  loadImage: boolean;
  selectedImages = [];
  tempFile = [];

  emojiPickerVisible = "";
  isEmojiPickerVisible = true;

  constructor(private formBuilder: FormBuilder,
              private datePipe: DatePipe,
              private chatService: ChatService,
              public storage: AngularFireStorage,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) {
  }

  async ngOnInit(): Promise<void> {
    this.hideChat(0);
    this.chatFormUser = this.formBuilder.group({
      message: [null, [Validators.required, Validators.maxLength(50)]]
    });
    this.account = {
      userName: 'chipucu123',
      password: '123456',
      registerDate: '27/05/2021'
    };
    this.role = {
      roleId: 1,
      roleName: 'user'
    };
    this.accountRole = {
      accountRoleId: 1,
      account: this.account,
      role: this.role
    };
    this.province = {
      provinceId: 1,
      provinceName: 'Thành Phố Hà Nội'
    };
    this.district = {
      districtId: 1,
      districtName: 'Quận Ba Đình',
      province: this.province
    };
    this.ward = {
      wardId: 1,
      district: this.district,
      wardName: 'Phường Phúc Xá'
    };
    this.user = {
      userId: 1,
      email: 'chipucu@gmail.com',
      name: 'Chi Pu',
      avatar: 'https://vnn-imgs-a1.vgcloud.vn/cdn.24h.com.vn/upload/1-2020/images/2020-02-01/1580492835-617-s---thanh67-1580445576-width650height650.jpg',
      phone: '0941514430',
      account: this.account,
      ward: this.ward
    };
    await this.chatService.refChats.on('value', resp => {
      this.chats = this.chatService.snapshotToArray(resp).filter(x => x.roomName === this.account.userName);
      let index = this.chats.length;
      if (index == 0) {
        let chat: Chat = new Chat();
        chat.roomName = this.account.userName;
        chat.nickname = 'admin';
        chat.timeSkip = this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss');
        chat.date = new Date().getTime();
        chat.type = 'message';
        chat.message = 'Xin chào ' + this.user.name + '! Chào mừng bạn đến với chức năng trò chuyện trực tuyến cùng chúng tôi';
        this.chatService.refChats.push().set(chat).then(data => {
          $('#chat_converse').scrollTop($('#chat_converse')[0].scrollHeight);
        });
      }
      this.setTimeForChat();
    });
    this.chatService.refNoti.orderByChild('role').equalTo('admin').on('value', (resp: any) => {
      this.notifications = this.chatService.snapshotToArray(resp)
        .filter(x => x.isRead === false && x.chat.roomName === this.account.userName);
    });
    setTimeout(function () {
      $('#chat_converse').scrollTop($('#chat_converse')[0].scrollHeight);
    }, 2000);
  }

  toggleFab() {
    this.selectedImages = [];
    this.ngOnInit();
    $('.prime').toggleClass('zmdi-comment-outline');
    $('.prime').toggleClass('zmdi-close');
    $('.prime').toggleClass('is-active');
    $('.prime').toggleClass('is-visible');
    $('#prime').toggleClass('is-float');
    $('.chat').toggleClass('is-visible');
    $('.fab').toggleClass('is-visible');
    this.emojiPickerVisible = "";
    this.isEmojiPickerVisible = true
  }

  hideChat(hide) {
    switch (hide) {
      case 0:
        $('#chat_converse').css('display', 'none');
        $('#chat_body').css('display', 'none');
        $('.chat_login').css('display', 'block');
        $('.chat_fullscreen_loader').css('display', 'none');
        $('#chat_fullscreen').css('display', 'none');
        break;
      case 1:
        $('#chat_converse').css('display', 'block');
        $('#chat_body').css('display', 'none');
        $('.chat_login').css('display', 'none');
        $('.chat_fullscreen_loader').css('display', 'block');
        this.readAllNoti();
        if (this.account) {
          this.chatService.refRooms.orderByChild('roomName').equalTo(this.account.userName).on('value', (resp: any) => {
            if (!resp.exists()) {
              const room = new Room(this.account.userName, this.user, 0);
              this.chatService.addNewRoom(room);
            }
          });
        }
        $('#chat_converse').scrollTop($('#chat_converse')[0].scrollHeight);
        break;
    }
  }

  fullscreen() {
    $('.fullscreen').toggleClass('zmdi-window-maximize');
    $('.fullscreen').toggleClass('zmdi-window-restore');
    $('.fullscreen').toggleClass('zmdi zmdi-image');
    $('.chat').toggleClass('chat_fullscreen');
    $('.fab').toggleClass('is-hide');
    $('.header_img').toggleClass('change_img');
    $('.img_container').toggleClass('change_img');
    $('.chat_header').toggleClass('chat_header2');
    $('.fab_field').toggleClass('fab_field2');
    $('.chat_converse').toggleClass('chat_converse2');
  }

  readAllNoti() {
    for (const readNotification of this.notifications) {
      this.chatService.readNoti(readNotification.key);
    }
  }

  private setTimeForChat() {
    const currentDate = new Date().getTime();
    for (const chat of this.chats) {
      const minute = (currentDate - chat.date) / (1000 * 60);
      if (minute < 1) {
        chat.timeSkip = 'vừa xong';
        continue;
      } else if (minute > 1 && minute < 60) {
        chat.timeSkip = Math.round(minute) + ' phút trước';
        continue;
      }
      const hour = minute / 60;

      if (hour < 2) {
        chat.timeSkip = Math.round(hour) + ' giờ trước';
      } else if (hour > 2 && hour < 24) {
        chat.timeSkip = Math.round(hour) + ' giờ trước';
      } else {
        chat.timeSkip = chat.timeSkip.slice(0, 10);
      }
    }
  }

  async onFormSubmit(form: any, type: string) {
    let messageUser: string;
    this.tempFile = this.selectedImages;
    this.selectedImages = [];
    if (this.chatFormUser.get('message').errors?.required || this.chatFormUser.get('message').value.trim() == '') {
      if (this.tempFile.length != 0) {
        await this.addImageToFireBase();
        setTimeout(function () {
          $('#chat_converse').scrollTop($('#chat_converse')[0].scrollHeight);
        }, 2000);
        this.chatFormUser.reset();
        return;
      } else {
        this.snackBar.open('Không được để trống nội dung', 'X',
          {
            duration: 5000,
          });
        this.chatFormUser.reset();
        return;
      }
    }
    if (this.chatFormUser.get('message').errors?.maxlength) {
      this.snackBar.open('Tin nhắn bạn nhập quá dài', 'X',
        {
          duration: 5000,
        });
      this.chatFormUser.reset();
      return;
    }
    this.addImageToFireBase();
    $('#file-input').val('');
    if (form.message) {
      const chat = form;
      chat.roomName = this.account.userName;
      chat.nickname = this.account.userName;
      chat.timeSkip = this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss');
      chat.date = new Date().getTime();
      chat.type = type;
      chat.message = form.message.trim();
      this.chatService.refChats.push().set(chat).then(data => {
        $('#chat_converse').scrollTop($('#chat_converse')[0].scrollHeight);
      });
      let notification: Notification;
      if (this.user) {
        notification = new Notification(chat, false, 'user', this.user.name);
      }
      this.chatService.addNewNoti(notification);
      this.chatService.refRooms.orderByChild('roomName').equalTo(chat.roomName).on('child_added', (resp: any) => {
        this.room = resp.val();
        this.room.key = resp.key;
        this.room.newMess++;
        firebase.database().ref('rooms').child(this.room.key).child('newMess').set(this.room.newMess++);
      });
      messageUser = form.message;
      this.chatFormUser.reset();
      let that = this;
      setTimeout(function () {
        that.botRepMessage(messageUser);
      }, 1500);
    }
  }

  botRepMessage(messageUser: string) {
    let chat: Chat = new Chat();
    this.chatService.findAnswerByBot(messageUser).subscribe(data => {
      let mess: string;
      if (data) {
        mess = data.answer;
      } else {
        mess = 'Vui lòng đợi trong giây lát!!';
      }
      chat.roomName = this.account.userName;
      chat.nickname = 'admin';
      chat.timeSkip = this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss');
      chat.date = new Date().getTime();
      chat.type = 'message';
      chat.message = mess;
      this.chatService.refChats.push().set(chat).then(data => {
        $('#chat_converse').scrollTop($('#chat_converse')[0].scrollHeight);
      });
    });
  }


  importImages($event) {
    const files = $event.target.files;
    for (const file of files) {
      const name = file.type.toString();
      const size = file.size;
      if (!name.includes('image')) {
        this.snackBar.open('Đây không phải hình ảnh', 'X',
          {
            duration: 5000,
          }
        );
        return;
      }
      if (size > 1000000) {
        this.snackBar.open('Dung lượng ảnh quá cao', 'X',
          {
            duration: 5000,
          }
        );
        return;
      }
    }
    if (files) {
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.selectedImages.push({url: e.target.result, file});
        };
        reader.readAsDataURL(file);
      }
    }
    $('#chat_converse').scrollTop($('#chat_converse')[0].scrollHeight);
  }

  addImageToFireBase() {
    return new Promise(resolve => {
      Promise.all(this.tempFile.map(file =>
        new Promise((resolve) => {
          this.loadImage = true;
          const name = file.file.name;
          const fileRef = this.storage.ref(name);
          this.storage.upload(name, file.file).snapshotChanges().pipe(
            finalize(() => {
              fileRef.getDownloadURL()
                .subscribe((url) => {
                  const chat = new Chat();
                  chat.message = url;
                  chat.roomName = this.account.userName;
                  chat.nickname = this.account.userName;
                  chat.timeSkip = this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss');
                  chat.date = new Date().getTime();
                  chat.type = 'image';
                  this.chatService.refChats.push().set(chat).then(data => {
                    this.loadImage = false;
                    $('#chat_converse').scrollTop($('#chat_converse')[0].scrollHeight);
                  });
                  resolve(1);
                });
            })).subscribe();
        }))).then(() => {
        resolve(1);
      });
    });
  }

  deleteUpdateImage($event) {
    if (this.selectedImages.length === 1) {
      this.selectedImages = [];
      $('#file-input').val('');
      return;
    }
    const index = $event.target.attributes['data-index'].value;
    this.selectedImages.splice(index, 1);
  }

  zoom(url) {
    this.dialog.open(ZoomComponent, {
      data: url,
      panelClass: 'custom-modalbox'
    });
  }

  addEmoji($event: EmojiEvent) {
    const value = this.chatFormUser.get("message");
    if (this.chatFormUser.get("message").value == null) {
      this.chatFormUser.get("message").setValue($event.emoji.native);
    } else {
      this.chatFormUser.get("message").setValue(value.value + $event.emoji.native);
    }
  }

  show() {
    if (this.isEmojiPickerVisible) {
      this.emojiPickerVisible = "show";
      this.isEmojiPickerVisible = false
    } else {
      this.emojiPickerVisible = "";
      this.isEmojiPickerVisible = true
    }
  }
}
