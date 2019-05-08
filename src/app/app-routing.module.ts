import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  {
    path: 'notes',
    children: [{
      path: '',
      loadChildren: './notes/notes.module#NotesPageModule'
    },
    {
      path: 'add',
      loadChildren: './notes/add-note/add-note.module#AddNotePageModule'
    },
    {
      path: ':noteId',
      loadChildren: './notes/notes-detail/notes-detail.module#NotesDetailPageModule'
    }
    ]
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
