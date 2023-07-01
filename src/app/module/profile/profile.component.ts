import {
  Component,
  ChangeDetectorRef,
  forwardRef, OnInit
} from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProfileComponent),
      multi: true,
    },
  ],
})
export class ProfileComponent {
  isDisabled = false;
  saveButtonDisable = true;
  acceptedFile = ['.jpg', '.png', '.jpeg'];
  maxSize = 1024 * 1024;
  errorMsg: string = '';
  selectedIndexFile!: number;
  selectedFile!: File;
  selectedImage!: string;
  loggedInUser!: User | null;

  constructor(private formBuilder: FormBuilder, private readonly changeDetectorRef: ChangeDetectorRef, private _snackBar: MatSnackBar, private auth: AuthService,
    private userService: UserService) { }
  ngOnInit(): void {
    this.userDetailForm.disable();
    //this.loggedInUser = this.auth.loggedInUser;
    // console.log(this.loggedInUser?.name + " in profile");
    //this.loggedInUser = this.userService.getLoggedInUser();
  }

  public onChange = (_: unknown) => { };
  public onTouched = () => { };

  writeValue(value: any): void {
    this.selectedIndexFile = value;
    this.changeDetectorRef.detectChanges();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  valueChanged(value: unknown) {
    this.onChange(value);
    this.onTouched();
  }

  userDetailForm = this.formBuilder.group({
    name: ['Thushan Dananjana'],
    email: ['td@gmail.com'],
    phone: ['0737867550'],
    image: [''],
    line1: ['No.170/A'],
    line2: ['Kalawana Rd'],
    city: ['Radawana'],
    town: ['Gampaha']
  })

  enableForm() {
    this.userDetailForm.enable();
    this.saveButtonDisable = false;
  }

  saveDetail() {
    this.userDetailForm.disable();
    this._snackBar.open("Save Successfully", 'x', {
      duration: 1000,
    });
    this.saveButtonDisable = true;
  }

  OnFileSelect(event: any) {
    const file = event.target.files[0];
    if (file.size > this.maxSize) {
      this.errorMsg = '* File size is too large. Maximum size is 1mb';
      return;
    } else {
      this.errorMsg = '';
      this.selectedFile = file;
      this.valueChanged(file);

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
        this.changeDetectorRef.detectChanges();
      };
      reader.readAsDataURL(file);
    }
  }
}
