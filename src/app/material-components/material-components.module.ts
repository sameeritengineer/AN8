import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule,MatButtonToggleModule,
  MatIconModule,MatBadgeModule,MatProgressSpinnerModule,
  MatToolbarModule,MatSidenavModule,MatMenuModule,
  MatListModule,MatDividerModule,MatGridListModule,
  MatExpansionModule,MatCardModule,MatTabsModule,
  MatStepperModule,MatFormFieldModule,MatInputModule,
  MatSelectModule,MatAutocompleteModule,MatCheckboxModule,
  MatRadioModule,MatDatepickerModule,MatNativeDateModule,
  MatTooltipModule,MatSnackBarModule,MatDialogModule,
  MatTableModule,MatSortModule,MatPaginatorModule
} from '@angular/material';

const material = [
  MatButtonModule,MatButtonToggleModule,MatIconModule,
  MatBadgeModule,MatProgressSpinnerModule,MatToolbarModule,
  MatSidenavModule,MatMenuModule,MatListModule,MatDividerModule,
  MatGridListModule,MatExpansionModule,MatCardModule,MatTabsModule,
  MatStepperModule,MatFormFieldModule,MatInputModule,MatSelectModule,
  MatAutocompleteModule,MatCheckboxModule,MatRadioModule,MatDatepickerModule,
  MatNativeDateModule,MatTooltipModule,MatSnackBarModule,MatDialogModule,
  MatTableModule,MatSortModule,MatPaginatorModule
];

@NgModule({
  exports: [material],
  imports: [
    CommonModule,material
  ]
})
export class MaterialComponentsModule { }
