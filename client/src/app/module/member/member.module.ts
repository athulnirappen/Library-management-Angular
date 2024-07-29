import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MemberComponent,
    DetailsComponent,
    AddComponent,
    EditComponent,
  ],
  imports: [CommonModule, MemberRoutingModule, FormsModule],
})
export class MemberModule {}
