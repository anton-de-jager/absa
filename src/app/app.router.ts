import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserRemoveComponent } from './components/user-remove/user-remove.component';

export const router: Routes = [
    { path: '', component: UsersComponent },
    { path: 'user-add', component: UserAddComponent },
    { path: 'user-update', component: UserUpdateComponent },
    { path: 'user-remove', component: UserRemoveComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);