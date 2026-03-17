import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-benefit',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-benefit.component.html',
  styleUrl: './form-benefit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBenefitComponent {
  benefitsForm: FormGroup;

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
      // Aquí puedes agregar la lógica para enviar el formulario
      alert('Formulario enviado exitosamente');
      this.benefitsForm.reset();
    } else {
      // Marcar todos los campos como touched para mostrar errores
      Object.keys(this.benefitsForm.controls).forEach(key => {
        this.benefitsForm.get(key)?.markAsTouched();
      });
    }
  }
}
