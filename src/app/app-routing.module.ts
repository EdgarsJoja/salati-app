import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './views/games/games.component';
import { EditComponent as BundleEditComponent } from './views/bundles/edit/edit.component';
import { ListComponent as BundlesListComponent } from './views/bundles/list/list.component';
import { ListComponent as WordsListComponent } from './views/words/list/list.component';

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
    path: 'bundles',
    children: [
      {
        path: '',
        component: BundlesListComponent
      },
      {
        path: 'edit/:id',
        component: BundleEditComponent
      },
      {
        path: 'edit',
        component: BundleEditComponent
      },
      {
        path: 'words/:id',
        component: WordsListComponent
      }
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
