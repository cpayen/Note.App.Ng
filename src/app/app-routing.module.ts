import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { EntriesComponent } from './components/entries/entries.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './helpers';

const routes: Routes = [
  { 
    path: '', 
    component: NotesComponent, 
    canActivate: [AuthGuard], 
    children: [
      { 
        path: '', 
        component: EntriesComponent 
      },
      { 
        path: 'list', 
        component: EntriesComponent,
        children: [
          {
            path: '**', 
            component: EntriesComponent,
          }
        ]
      }
    ]
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
