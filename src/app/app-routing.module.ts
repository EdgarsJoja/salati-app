import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './views/games/games.component';
import { EditComponent } from './views/words/bundles/edit/edit.component';
import { ListComponent } from './views/words/bundles/list/list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'games'
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'words',
    children: [
      {
        path: 'bundles',
        children: [
          {
            path: '',
            component: ListComponent
          },
          {
            path: 'edit/:id',
            component: EditComponent
          },
          {
            path: 'edit',
            component: EditComponent
          },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
