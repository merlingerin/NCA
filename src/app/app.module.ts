import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './firebase.credential';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { RecipesPage } from '../pages/recipes/recipes';
import { ResourcesPage } from '../pages/resources/resources';
import { MenuPage } from '../pages/menu/menu';
import { VideoPage } from '../pages/video/video';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeadToolbarComponent } from '../components/head-toolbar/head-toolbar';
import { RecipeCardComponent } from '../components/recipe-card/recipe-card';
import { InnerVideoPage } from '../pages/inner-video/inner-video';
import { PostsListService } from '../services/posts-list.service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    RecipesPage,
    ResourcesPage,
    MenuPage,
    VideoPage,
    HeadToolbarComponent,
    RecipeCardComponent,
    InnerVideoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      tabsHideOnSubPages: true,
    }),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HeadToolbarComponent,    
    HomePage,
    RecipesPage,
    ResourcesPage,
    MenuPage,
    VideoPage,
    InnerVideoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostsListService
  ]
})
export class AppModule {}
