import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ChatComponent,
  ExerciseComponent,
  GenerateComponent,
} from './pages/index';

const routes: Routes = [
  { path: '', redirectTo: '/exercise', pathMatch: 'full' },
  { path: 'exercise', component: ExerciseComponent },
  { path: 'generate', component: GenerateComponent },
  { path: 'chat', component: ChatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
