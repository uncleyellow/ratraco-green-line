import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardRoutingModule } from './dash-board-routing.module';
import { MaterialModule } from 'app/material/material.module';
import { DashBoardComponent } from './dash-board.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { HireComponent } from './hire/hire.component';
import { ContactComponent } from './contact/contact.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { TranslocoModule } from '@ngneat/transloco';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashBoardComponent,
    NewsComponent,
    ServicesComponent,
    SolutionsComponent,
    HireComponent,
    ContactComponent,
    IntroduceComponent,
    ContactUsFormComponent,
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    MaterialModule,
    NgApexchartsModule, // Thêm module này vào
    
    TranslocoModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
})
export class DashBoardModule { }
