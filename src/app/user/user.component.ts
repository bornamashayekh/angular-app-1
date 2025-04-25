import { Component, Input, Output , EventEmitter  } from '@angular/core';
// type User = {
//   id: string,
//   name: string,
//   avatar: string,
// };
interface User {
    id: string,
  name: string,
  avatar: string,
}
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();  // select = output<string>();
   get imagePath() {
    return `assets/users/${this.user.avatar}`
  }
  onSelectUser() {
    try {
      this.select.emit(this.user.id); // Changed from this.name to this.id
    } catch (e) {
      console.log(e);
    }
  }
}
