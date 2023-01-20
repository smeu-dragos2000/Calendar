import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Material MatCalendar(Datepicker)
import { MatNativeDateModule } from '@angular/material/core';
import { MatCalendar } from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MAT_DATE_LOCALE} from '@angular/material/core';
// Material Table(Admin Table)
import { MatTableModule } from '@angular/material/table';

// Swiper
import { SwiperModule } from 'swiper/angular';
// ng-image-slider
import { NgImageSliderModule } from 'ng-image-slider';



// Components & Pages
import { HeaderComponent } from './MyComponents/header/header.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { HomeComponent } from './MyPages/home/home.component';
import { TurismComponent } from './MyPages/turism/turism.component';
import { AtractiiTuristiceComponent } from './MyComponents/atractii-turistice/atractii-turistice.component';
import { CalendarComponent } from './MyComponents/calendar/calendar.component';
import { FormRezervaComponent } from './MyComponents/form-rezerva/form-rezerva.component';
import { PacheteTuristiceComponent } from './MyComponents/pachete-turistice/pachete-turistice.component';
import { TurismAnaComponent } from './MyPages/turism-ana/turism-ana.component';
import { TurismDescriereAnaComponent } from './MyComponents/turism-descriere-ana/turism-descriere-ana.component';
import { TurismHanComponent } from './MyPages/turism-han/turism-han.component';
import { TurismDescriereHanComponent } from './MyComponents/turism-descriere-han/turism-descriere-han.component';
import { AdminLoginComponent } from './MyPages/admin-login/admin-login.component';
import { AdminComponent } from './MyPages/admin/admin.component';
import { ContactComponent } from './MyPages/contact/contact.component';
import { ContactFormComponent } from './MyComponents/contact-form/contact-form.component';
import { TabelRezervariAnaComponent } from './MyComponents/tabel-rezervari-ana/tabel-rezervari-ana.component';
import { TabelRezervariHanComponent } from './MyComponents/tabel-rezervari-han/tabel-rezervari-han.component';
import { TabelRezervariComponent } from './Ciorne/tabel-rezervari/tabel-rezervari.component';



import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TurismComponent,
    AtractiiTuristiceComponent,
    CalendarComponent,
    FormRezervaComponent,
    PacheteTuristiceComponent,
    TurismAnaComponent,
    TurismDescriereAnaComponent,
    TurismHanComponent,
    TurismDescriereHanComponent,
    AdminLoginComponent,
    AdminComponent,
    ContactComponent,
    ContactFormComponent,
    TabelRezervariAnaComponent,
    TabelRezervariHanComponent,
    TabelRezervariComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    SwiperModule,
    NgImageSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'ro-RO' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
