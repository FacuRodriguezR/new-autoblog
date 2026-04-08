import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-form-benefit',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-benefit.component.html',
  styleUrl: './form-benefit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBenefitComponent {
  benefitsForm: FormGroup;
  public mailService = inject(MailService)

  constructor(private fb: FormBuilder) {
    this.benefitsForm = this.fb.group({
      nombreApellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      empresa: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  onSubmit() {
    if (this.benefitsForm.valid) {
      console.log('Formulario enviado:', this.benefitsForm.value);

      this.mailService.enviarEmail(this.benefitsForm.value).subscribe((data) => {
        console.log(this.benefitsForm.value);
      })

      //? Aca agregamos la lógica para enviar el formulario
      alert('Formulario enviado exitosamente');
      this.benefitsForm.reset();
    } else {

      Object.keys(this.benefitsForm.controls).forEach(key => {
        this.benefitsForm.get(key)?.markAsTouched();
      });
    }
  }
}
