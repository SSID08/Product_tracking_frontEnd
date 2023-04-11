import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URLS } from '../urls';
@Component({
  selector: 'app-view-asset',
  templateUrl: './view-asset.component.html',
  styleUrls: ['./view-asset.component.scss']
})
export class ViewAssetComponent implements OnInit {
  httpOptions: any;
  data:any;
  aseet= { "type": "", "location": "", "weight": "", "temperature": "", "usebydate": "" };
  form = new FormGroup({
    id: new FormControl(''),
    location: new FormControl(''),
    weight: new FormControl(''),
    temperature: new FormControl(''),
    usebydate:new FormControl(''),
    transfer_status:new FormControl(''),

  });
  constructor(public dialogRef: MatDialogRef<any, any>,
    @Inject(MAT_DIALOG_DATA) public dialogdata: Data, private snackBar: MatSnackBar, private _http: HttpClient) {
    console.log(dialogdata);
    this.data=dialogdata;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'Access-Control-Allow-Origin': '*'
      }),
    }

  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
  

}
