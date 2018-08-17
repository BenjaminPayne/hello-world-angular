import { MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatIconModule, MatListModule, MatGridListModule, MatToolbar, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatIconModule, MatListModule, MatGridListModule, MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatIconModule, MatListModule, MatGridListModule, MatToolbarModule],
})
export class MaterialModule { }
