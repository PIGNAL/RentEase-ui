import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../domain/models/user.model';
import { SharedCommonModule } from '../../../shared/common/common.module';

@Component({
  selector: 'app-register',
  imports:[SharedCommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user:User = {
    Username: '',
    FullName: '',
    Address: '',
    Email: '',
    Password: ''
  };
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.user).subscribe({
      next: () => {
        alert('Registro exitoso');
        this.router.navigate(['/login']);
      },
      error: () => alert('Error en el registro')
    });
  }

}
