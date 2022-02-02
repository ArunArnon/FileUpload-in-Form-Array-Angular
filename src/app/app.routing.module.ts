import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreqDocsComponent } from '../freq-docs/freq-docs.component';

const routes: Routes = [
  { path: 'docs', component: FreqDocsComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
