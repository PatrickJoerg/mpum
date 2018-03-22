import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SessionService } from './services/session.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from './my-private-page/my-private-page.component';

import { routes } from './routes/app.routing';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MilesMoreCollectComponent } from './programs/miles-more-collect/miles-more-collect.component';
import { MilesMoreRedeemComponent } from './programs/miles-more-redeem/miles-more-redeem.component';
import { MilesMoreStatusComponent } from './programs/miles-more-status/miles-more-status.component';
import { AmericanExpressCollectComponent } from './programs/american-express-collect/american-express-collect.component';
import { FlyingBlueCollectComponent } from './programs/flying-blue-collect/flying-blue-collect.component';
import { FlyingBlueRedeemComponent } from './programs/flying-blue-redeem/flying-blue-redeem.component';
import { FlyingBlueStatusComponent } from './programs/flying-blue-status/flying-blue-status.component';
import { ExecutiveClubCollectComponent } from './programs/executive-club-collect/executive-club-collect.component';
import { ExecutiveClubRedeemComponent } from './programs/executive-club-redeem/executive-club-redeem.component';
import { ExecutiveClubStatusComponent } from './programs/executive-club-status/executive-club-status.component';
import { GermanyMilesComponent } from './creditcards/germany-miles/germany-miles.component';
import { GermanyCashComponent } from './creditcards/germany-cash/germany-cash.component';
import { AustriaMilesComponent } from './creditcards/austria-miles/austria-miles.component';
import { AustriaCashComponent } from './creditcards/austria-cash/austria-cash.component';
import { AboutPatrickComponent } from './about-patrick/about-patrick.component';
import { MilesConsultingComponent } from './miles-consulting/miles-consulting.component';
import { ContactComponent } from './contact/contact.component';
import { CollectComponent } from './programs/collect/collect.component';
import { RedeemComponent } from './programs/redeem/redeem.component';
import { StatusComponent } from './programs/status/status.component';
import { CardsComponent } from './creditcards/cards/cards.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { RightBarComponent } from './right-bar/right-bar.component';

//services
import {MailService} from './services/mail.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    MyPrivatePageComponent,
    HomePageComponent,
    MilesMoreCollectComponent,
    MilesMoreRedeemComponent,
    MilesMoreStatusComponent,
    AmericanExpressCollectComponent,
    FlyingBlueCollectComponent,
    FlyingBlueRedeemComponent,
    FlyingBlueStatusComponent,
    ExecutiveClubCollectComponent,
    ExecutiveClubRedeemComponent,
    ExecutiveClubStatusComponent,
    GermanyMilesComponent,
    GermanyCashComponent,
    AustriaMilesComponent,
    AustriaCashComponent,
    AboutPatrickComponent,
    MilesConsultingComponent,
    ContactComponent,
    CollectComponent,
    RedeemComponent,
    StatusComponent,
    CardsComponent,
    ImpressumComponent,
    RightBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }

