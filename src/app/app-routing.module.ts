import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from './pages/main/main.component'
const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule {}
