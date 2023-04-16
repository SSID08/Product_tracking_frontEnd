import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URLS } from '../urls';
import { ProductTemplate } from '../product-template';

@Component({
  selector: 'app-transfer-asset',
  templateUrl: './transfer-asset.component.html',
  styleUrls: ['./transfer-asset.component.scss']
})
export class TransferAssetComponent implements OnInit {
    httpOptions: any;
    data:any;
    aseet= { "current_org": "", "newOwnerOrg": ""};
    form = new FormGroup({
      id: new FormControl(''),
      current_org: new FormControl(''),
      newOwnerOrg: new FormControl('')
  
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
      this.aseet.newOwnerOrg = data['newOwnerOrg']
    }

  }
  ngOnInit() {

  }

  openSnackBar() {
    this.snackBar.open('Product Transfered', 'Close', {
      duration: 2000,
    });
    this.dialogRef.close(); // close the dialog form
  }

  TransferAsset(){
    var request = {"id":this.data.id,"newOwnerOrg":this.form.value.newOwnerOrg}
    console.log('Entered update location');
    this._http.post(URLS.TRANSFER,JSON.stringify(request),{headers:new HttpHeaders({'Content-type':'application/json'}),responseType:"text"}).subscribe((data:any)=>{
      this.data.newOwnerOrg=this.form.value.newOwnerOrg;
      this.dialogRef.close(this.data);
    })
  }

  close() {
    this.dialogRef.close();
  }
  
  }