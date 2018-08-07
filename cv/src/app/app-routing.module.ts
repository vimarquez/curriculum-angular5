import {Routes, RouterModule} from "@angular/router";
import {StudyComponent} from './study/study.component';
import {GalleryComponent} from './gallery/gallery.component';
import {HomeComponent} from './home/home.component';
import {ExperienceComponent} from './experience/experience.component';
import {KnowledgesComponent} from './knowledges/knowledges.component';
const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: 'full' },	
  { path: 'gallery',                    component: GalleryComponent },
  { path: 'knowledges',                 component: KnowledgesComponent },
  { path: 'study',                      component: StudyComponent },
  { path: 'experience',                 component: ExperienceComponent },
  { path: '**', redirectTo: 'HomeComponent' }
];

export const routing = RouterModule.forRoot(routes,{ useHash: true});
