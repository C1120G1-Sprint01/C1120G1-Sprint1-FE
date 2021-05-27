import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Room} from '../../../models/room';
import {Notification} from '../../../models/notification';
import {ChatService} from '../../../service/chat-box/chat.service';
import {Account, AccountRole, Role} from '../../../models/Account';
import {User} from '../../../models/user';
import {District, Province, Ward} from '../../../models/address';

@Component({
  selector: 'app-admin-chat',
  templateUrl: './admin-chat.component.html',
  styleUrls: ['./admin-chat.component.css']
})
export class AdminChatComponent implements OnInit {
  nickname = '';
  rooms = new Array<Room>();
  isLoadingResults: boolean;
  notifications = new Array<Notification>();
  roomName: string;
  account: Account;
  admin: User;
  ward: Ward;
  accountRole: AccountRole;
  role: Role;
  province: Province;
  district: District;
  searchValue: string;
  tempRooms = new Array<Room>();

  constructor(private route: ActivatedRoute, private router: Router,
              private chatService: ChatService) {
  }

  ngOnInit(): void {
    this.account = {
      userName: 'bichtram1704',
      password: '123456',
      registerDate: '27/05/2021'
    };
    this.role = {
      roleId: 1,
      roleName: 'admin'
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
    this.admin = {
      userId: 1,
      email: 'bichtram@gmail.com',
      name: 'Bích Trâm',
      phone: '0941514430',
      account: this.account,
      ward: this.ward
    };
    this.isLoadingResults = true;
    this.nickname = this.admin.account.userName;
    this.chatService.refRooms.on('value', resp => {
      this.rooms = this.chatService.snapshotToArray(resp);
      this.tempRooms = this.rooms;
      if (this.rooms) {
        this.isLoadingResults = false;
      }
      for (const roomFB of this.rooms) {
        if (roomFB.active){
          this.roomName = roomFB.roomName;
          break;
        }
      }
    });

    this.chatService.getNotiOfUser().on('value' , (resp: any) => {
      this.notifications = this.chatService.snapshotToArray(resp).filter(x => x.isRead === false);
    });

  }


  enterChatRoom(room: Room) {
    this.chatService.readNewMess(room.key);
    for (const readNotification of this.notifications) {
      if (readNotification.chat.roomName === room.roomName) {
        this.chatService.readNoti(readNotification.key);
      }
    }
    for (const roomFB of this.rooms) {
      if (roomFB.key === room.key) {
        this.chatService.refRooms.child(roomFB.key).child('active').set(true);
      }
      else {
        this.chatService.refRooms.child(roomFB.key).child('active').set(false);
      }
    }
    this.roomName = room.roomName;
  }

  search() {
    if (this.searchValue === undefined || this.searchValue.trim() === '') {
      this.searchValue = '';
      this.rooms = this.tempRooms;
    }
    const tempt = new Array<Room>();
    for (const room of this.rooms) {
      if (room.user){
        if (room.user.account.userName.includes(this.searchValue)) {
          tempt.push(room);
        }
      } else {
        if (room.roomName.includes(this.searchValue)) {
          tempt.push(room);
        }
      }
    }
    this.rooms = tempt;
    this.searchValue = '';
  }
}
