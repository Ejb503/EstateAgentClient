import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// Material  inputs
import { MatInputModule, MatCheckboxModule, MatToolbarModule, MatTableModule } from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';

// Pipes
import { ReversePipe } from './reverse.pipe';

// Components
import { AppComponent } from './app.component';

// Services
import { DataService } from '../services/data-service.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule, 
    MatCheckboxModule,
    MatButtonModule,
    MatGridListModule,
    MatChipsModule,
    MatMenuModule,
    MatSidenavModule,
    MatSelectModule,
    MatStepperModule,
    MatRadioModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    FormsModule, 
    MatMenuModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    FlexLayoutModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
