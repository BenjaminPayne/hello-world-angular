import { MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatIconModule, MatListModule, MatGridListModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatIconModule, MatListModule, MatGridListModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatIconModule, MatListModule, MatGridListModule],
})
export class MaterialModule { }
