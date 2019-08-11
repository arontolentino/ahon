import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'learn',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../learn/learn.module').then(m => m.LearnPageModule)
          }
        ]
      },
      {
        path: 'thoughts',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../thoughts/thoughts.module').then(
                m => m.ThoughtsPageModule
              )
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../settings/settings.module').then(
                m => m.SettingsPageModule
              )
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/learn',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/learn',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
