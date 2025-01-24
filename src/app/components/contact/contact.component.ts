import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment.development';
interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent {
  form: ContactForm = {
    name: '',
    email: '',
    message: '',
  };
  send() {
    const templateParams = {
      from_name: this.form.name,    
      from_email: this.form.email, 
      message: this.form.message,  
    };
    console.log('Form submitted:', this.form);
    emailjs
      .send(
        environment.ServiceID,
        environment.TemplateID,
        templateParams,
        { publicKey: environment.PublicKey }
      )
      .then((res) => console.log(res));
  }
}
