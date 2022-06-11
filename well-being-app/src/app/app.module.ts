import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MenusModule } from '@progress/kendo-angular-menu';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes = [
  { path: '', component: DashboardComponent, text: 'Home' },
  { path: 'articles', component: DashboardComponent, text: 'Articles',
    children: [
      { path: 'all', component: DashboardComponent, text: 'All' },
      { path: 'support', component: DashboardComponent, text: 'Support' }
    ] },
  {
    path: '',
    component: DashboardComponent,
    text: 'Quizes',
    children: [
      { path: 'quiz1', component: DashboardComponent, text: 'Quiz1' },
      { path: 'quiz2', component: DashboardComponent, text: 'Quiz2' }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenusModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
