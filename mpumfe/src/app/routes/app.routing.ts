import { Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { AuthLoginComponent } from '../auth-login/auth-login.component';
import { AuthSignupComponent } from '../auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from '../my-private-page/my-private-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { CollectComponent } from '../programs/collect/collect.component';
import { RedeemComponent } from '../programs/redeem/redeem.component';
import { StatusComponent } from '../programs/status/status.component';
import { CardsComponent } from '../creditcards/cards/cards.component';
import { AmericanExpressCollectComponent } from '../programs/american-express-collect/american-express-collect.component';
import { ExecutiveClubCollectComponent } from '../programs/executive-club-collect/executive-club-collect.component';
import { ExecutiveClubRedeemComponent } from '../programs/executive-club-redeem/executive-club-redeem.component';
import { ExecutiveClubStatusComponent } from '../programs/executive-club-status/executive-club-status.component';
import { FlyingBlueCollectComponent } from '../programs/flying-blue-collect/flying-blue-collect.component';
import { FlyingBlueRedeemComponent } from '../programs/flying-blue-redeem/flying-blue-redeem.component';
import { FlyingBlueStatusComponent } from '../programs/flying-blue-status/flying-blue-status.component';
import { MilesMoreCollectComponent } from '../programs/miles-more-collect/miles-more-collect.component';
import { MilesMoreRedeemComponent } from '../programs/miles-more-redeem/miles-more-redeem.component';
import { MilesMoreStatusComponent } from '../programs/miles-more-status/miles-more-status.component';
import { AustriaCashComponent } from '../creditcards/austria-cash/austria-cash.component';
import { AustriaMilesComponent } from '../creditcards/austria-miles/austria-miles.component';
import { GermanyCashComponent } from '../creditcards/germany-cash/germany-cash.component';
import { GermanyMilesComponent } from '../creditcards/germany-miles/germany-miles.component';
import { MilesConsultingComponent } from '../miles-consulting/miles-consulting.component';
import { AboutPatrickComponent } from '../about-patrick/about-patrick.component';
import { ContactComponent } from '../contact/contact.component';
import { ImpressumComponent } from '../impressum/impressum.component';

export const routes: Routes = [
    {path: 'login' , component: AuthLoginComponent},
    {path: 'signup' , component: AuthSignupComponent},
    {path: 'private', component: MyPrivatePageComponent},
    {path: '', component: HomePageComponent},
    {path: 'sammeln', component: CollectComponent},
    {path: 'einloesen', component: RedeemComponent},
    {path: 'status', component: StatusComponent},
    {path: 'kreditkarten', component: CardsComponent},
    {path: 'membership-rewards-punkte-sammeln', component: AmericanExpressCollectComponent},
    {path: 'executive-club-avios-sammeln', component: ExecutiveClubCollectComponent},
    {path: 'executive-club-avios-einloesen', component: ExecutiveClubRedeemComponent},
    {path: 'executive-club-status', component: ExecutiveClubStatusComponent},
    {path: 'flying-blue-meilen-sammeln', component: FlyingBlueCollectComponent},
    {path: 'flying-blue-meilen-einloesen', component: FlyingBlueRedeemComponent},
    {path: 'flying-blue-status', component: FlyingBlueStatusComponent},
    {path: 'miles-more-meilen-sammeln', component: MilesMoreCollectComponent},
    {path: 'miles-more-meilen-einloesen', component: MilesMoreRedeemComponent},
    {path: 'miles-more-status', component: MilesMoreStatusComponent},
    {path: 'kreditkarten-oesterreich-kostenlos-bargeld-abheben', component: AustriaCashComponent},
    {path: 'kreditkarten-oesterreich-meilen-sammeln', component: AustriaMilesComponent},
    {path: 'kreditkarten-deutschland-kostenlos-bargeld-abheben', component: GermanyCashComponent},
    {path: 'kreditkarten-deutschland-meilen-sammeln', component: GermanyMilesComponent},
    {path: 'meilenberatung', component: MilesConsultingComponent},
    {path: 'ueber-patrick-meilenexperte', component: AboutPatrickComponent},
    {path: 'kontakt', component: ContactComponent},
    {path: 'impressum', component: ImpressumComponent},
];
