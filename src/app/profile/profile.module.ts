import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";
import { HeaderComponent } from './header/header.component';
import { SuggestedFriendsComponent } from './suggested-friends/suggested-friends.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [ProfileComponent, HeaderComponent, SuggestedFriendsComponent, GalleryComponent, AboutComponent],
  imports: [SharedModule, ProfileRoutingModule],
})
export class ProfileModule {}
