import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// Libraries Modules
import {TabsModule, ModalModule, BsDatepickerModule} from 'ngx-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';

// Custom
import {AppComponent} from './app.component';
import {CommonService} from './shared/services/common.service';
import {OpportunityProfileComponent} from './opportunity-profile/opportunity-profile.component';
import {OpportunityGeneralComponent} from './opportunity-general/opportunity-general.component';
import {DirectivesModule} from './shared/directives/directives.module';
import {EditModalComponent} from './edit-modal/edit-modal.component';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import {AlertComponent} from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    OpportunityProfileComponent,
    OpportunityGeneralComponent,
    EditModalComponent,
    AlertComponent
  ],
  imports: [
    DirectivesModule,
    HttpClientModule,
    GooglePlaceModule,
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
