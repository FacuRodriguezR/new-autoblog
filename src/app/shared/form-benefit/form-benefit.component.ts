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

  isLoading = false;

  constructor(private fb: FormBuilder) {
    this.benefitsForm = this.fb.group({
      empresa: ['', Validators.required],
      cuit: ['', [Validators.required, Validators.maxLength(13)]],
      nombreApellido: ['', Validators.required],
      cargo: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.maxLength(14)]],
      mensaje: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  onSubmit() {
    if (this.benefitsForm.valid && !this.isLoading) {
      this.isLoading = true; // Iniciamos el loading

      this.mailService.enviarEmail(this.benefitsForm.value).subscribe({
        next: () => {
          this.isLoading = false; // Apagamos el loading
          alert('Formulario enviado exitosamente');
          this.benefitsForm.reset();
        },
        error: (err) => {
          this.isLoading = false; // Apagamos el loading incluso si hay error
          console.error(err);
          alert('Hubo un error al enviar el formulario');
        }
      });
    } else {
      this.benefitsForm.markAllAsTouched();
    }
  }
}
