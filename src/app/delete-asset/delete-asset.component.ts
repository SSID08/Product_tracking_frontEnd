import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URLS } from '../urls';
import { ProductTemplate } from '../product-template';

@Component({
  selector: 'app-delete-asset',
  templateUrl: './delete-asset.component.html',
  styleUrls: ['./delete-asset.component.scss']
})
export class DeleteAssetComponent implements OnInit {
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
      responseType:'text',
    }

    if (dialogdata) {
      var data = dialogdata;
      this.aseet.type = data['type'];
      this.aseet.location = data['location'];
      this.aseet.weight = data['weight'];
      this.aseet.temperature = data['temperature'];
      this.aseet.usebydate = data['usebydate']
      //var owner = JSON.parse(data['Owner'])
      //this.aseet.Owner = owner.user;
    }

  }
  ngOnInit() {

  }

  openSnackBar() {
    this.snackBar.open('Product Deleted', 'Close', {
      duration: 2000,
    });
    this.dialogRef.close(); // close the dialog form
  }

  DeleteAsset(){
    var request={"id":this.data.id};
    this._http.post(URLS.DELETEASSET,JSON.stringify(request),this.httpOptions).subscribe((data:any)=>{
      console.log(data);
      this.dialogRef.close(this.data);
    })

  }

  close() {
    this.dialogRef.close();
  }
  
  }