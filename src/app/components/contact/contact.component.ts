import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment.development';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent {
  toast = inject(ToastrService);

  fb = inject(FormBuilder);
  contactForm: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  send(): void {
    if (this.contactForm.invalid) {
      this.toast.warning(
        'Please fill all fields correctly.',
        'Form Incomplete',
        {
          timeOut: 3000,
          progressBar: true,
          tapToDismiss: true,
          progressAnimation: 'increasing',
          closeButton: true,
          positionClass: 'toast-bottom-right',
        }
      );
      this.contactForm.markAllAsTouched();
      return;
    }

    const { name, email, message } = this.contactForm.value;
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(environment.ServiceID, environment.TemplateID, templateParams, {
        publicKey: environment.PublicKey,
      })
      .then(() => {
        this.toast.success('Message sent successfully!', 'Success', {
          timeOut: 3000,
          progressBar: true,
          tapToDismiss: true,
          progressAnimation: 'increasing',
          closeButton: true,
          positionClass: 'toast-bottom-right',
        });
        this.contactForm.reset();
      })
      .catch((err) => {
        console.error(err);
        this.toast.error('Failed to send message. Please try again.', 'Error', {
          timeOut: 3000,
          progressBar: true,
          tapToDismiss: true,
          progressAnimation: 'increasing',
          closeButton: true,
          positionClass: 'toast-bottom-right',
        });
      });
  }

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }
}
