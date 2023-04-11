import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URLS } from '../urls';
import { ProductTemplate } from '../product-template';

@Component({
  selector: 'app-update-asset',
  templateUrl: './update-asset.component.html',
  styleUrls: ['./update-asset.component.scss']
})
export class UpdateAssetComponent implements OnInit {
  stores = [];
  isEdit: Boolean = false;
  aseet= { "type": "", "location": "", "weight": "", "temperature": "", "usebydate": "" };
  buttonText = "Save";
  form = new FormGroup({
    location: new FormControl(''),
    weight: new FormControl(''),
    temperature: new FormControl(''),
    usebydate:new FormControl('')

  });
  httpOptions: any;
  data:any;
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

  UpdateLocation(){
    var request = {"id":this.data.id,"location":this.form.value.location}
    console.log('Entered update location');
    this._http.post(URLS.UpdateLocation,JSON.stringify(request),{headers:new HttpHeaders({'Content-type':'application/json'}),responseType:"text"}).subscribe((data:any)=>{
      this.data.location=this.form.value.location;
      this.dialogRef.close(this.data);
    })
  }

  UpdateTemperature(){
    var request={"id":this.data.id,"temp":this.form.value.temperature}
    console.log('Entered update temperature');
    this._http.post(URLS.UpdateTemperature,JSON.stringify(request),this.httpOptions).subscribe((data:any)=>{
      console.log(data);
      this.data.location=this.form.value.location;
      this.dialogRef.close(this.data);
    })

  }

  UpdateWeight(){
    var request={"id":this.data.id,"weight":this.form.value.weight};
    console.log('Entered update weight');
    this._http.post(URLS.UpdateWeight,JSON.stringify(request),this.httpOptions).subscribe((data:any)=>{
      console.log(data);
      this.data.location=this.form.value.location;
      this.dialogRef.close(this.data);
    })

  }


  
  close() {
    this.dialogRef.close();
  }
  
  }


