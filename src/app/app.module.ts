import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AssetDialogComponent } from './asset-dialog/asset-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UpdateAssetComponent } from './update-asset/update-asset.component';
import { ViewAssetComponent } from './view-asset/view-asset.component';
import{DeleteAssetComponent} from './delete-asset/delete-asset.component';
import {TransferAssetComponent} from './transfer-asset/transfer-asset.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetDialogComponent,
    UpdateAssetComponent,
    ViewAssetComponent,
    DeleteAssetComponent,
    TransferAssetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatTableModule,MatInputModule,MatButtonModule,MatPaginatorModule,
    MatDialogModule,FormsModule, ReactiveFormsModule,MatSnackBarModule,MatIconModule,MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
