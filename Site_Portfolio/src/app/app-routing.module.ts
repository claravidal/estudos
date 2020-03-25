import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuemsouComponent } from './quemsou/quemsou.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'body', component:BodyComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'home', component: HomeComponent},
  {path: 'navbar', component:NavbarComponent},
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'quemsou', component:QuemsouComponent},
  {path: '', component:HomeComponent}
 
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
