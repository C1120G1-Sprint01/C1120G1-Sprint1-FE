import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceCustomerService} from '../../../service/service-customer/service-customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Ward} from '../../../../model/Ward';
import {District} from '../../../../model/District';
import {Province} from '../../../../model/Province';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  formAddNewCustomer: FormGroup;
  listWard: Ward[];
  listDistrict: District[];
  listProvince: Province[];
  listError: any = '';
  isMessage = false;
  isMessage1 = false;


  constructor(private formBuilder: FormBuilder,
              private userService: ServiceCustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.formAddNewCustomer = new FormGroup({
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      ward: new FormControl(''),
      province: new FormControl(''),
      district: new FormControl(''),
      // avatar :new FormControl('',[Validators.required]),
      registerDate: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  }

  onReset() {
    this.formAddNewCustomer.reset();
  }


  onSubmit() {

    if (this.formAddNewCustomer.valid) {
      if (this.formAddNewCustomer.value.password === this.formAddNewCustomer.value.confirmPassword) {
        this.userService.save(this.formAddNewCustomer.value).subscribe(res => {
          console.log(this.formAddNewCustomer.value);
        });
      }
    }
  }
}
