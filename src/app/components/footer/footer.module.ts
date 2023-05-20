import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { FooterComponent } from './footer.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, OverlayModule, MatIconModule],
  exports: [FooterComponent],
})
export class FooterModule {}
