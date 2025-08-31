import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-test';

  // inject UserServiceService and log the data
  constructor(private userService: UserServiceService) {
    this.userService.getUsers().subscribe(users => {
      console.log(users);
    });
  }

  // unshift and pop method to rotate array to right
  rotateRight(arr: any[], k: number): any[] {
    if (!arr || arr.length === 0) return arr;
    const len = arr.length;
    const rotations = k % len;
    console.log(rotations);
    for (let i = 0; i < rotations; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
  }
  // ngOnInit method to call rotateRight function
  ngOnInit() {
    console.log(this.rotateRight([1, 2, 3, 4, 5], 2));
  }
}
