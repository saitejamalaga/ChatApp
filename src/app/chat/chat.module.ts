import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { ChatRouteGuardService } from './chat-route-guard.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([ 
      { path: 'chat', component: ChatBoxComponent,canActivate:[ChatRouteGuardService] }
    ]),
    SharedModule
  ],
  declarations: [ChatBoxComponent],
  providers:[ChatRouteGuardService]
})
export class ChatModule { }
