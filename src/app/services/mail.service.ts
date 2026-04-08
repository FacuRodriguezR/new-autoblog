import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'https://api.redautoshop.com.ar';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private http = inject(HttpClient);

  constructor() { }

  enviarEmail(benefitForm: any): Observable<any> {
    // Usamos Template Literals para un HTML más limpio
    const cuerpo = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta charset="UTF-8">
      </head>
      <body>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tbody>
            <tr>
              <td align="center" valign="top">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="714">
                  <tbody>
                    <tr>
                      <td align="center">
                        <img src="https://redautoshop.com.ar/assets/images/brand/AS-01.JPG" style="display: block; height: 200px;">
                      </td>
                    </tr>
                  </tbody>
                </table>
                
                <table border="0" cellpadding="0" cellspacing="0" width="714">
                  <tbody>
                    <tr>
                      <td>
                        <p style="color: #cc2b1e; font-family: verdana, arial, sans-serif; font-size: 14px; line-height: 30px; text-align: center;">
                          <b>TU SOLICITUD ESTÁ EN PROCESO</b>
                        </p>
                        
                        <div style="font-family: verdana, arial, sans-serif; font-size: 12px; color: #000000; line-height: 1.8em;">
                          <p>Nombre: <b>${benefitForm.nombreApellido}</b></p>
                          <p>Correo: <b>${benefitForm.correo}</b></p>
                       
                         
                          <p>Empresa: <b>${benefitForm.empresa}</b></p>
                          <p>Motivo: <b style="white-space: pre-line;">${benefitForm.mensaje}</b></p>
                        </div>

                        <p style="color: #cc2b1e; font-family: verdana, arial, sans-serif; font-size: 14px; line-height: 30px; text-align: center;">
                          En breve nos estaremos comunicando con vos.<br>
                          <b>Gracias por confiar en <a href="https://redautoshop.com.ar">Autoshop</a>!</b>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
      </html>
    `;

    const solicitud = {
      envio: benefitForm,
      cliente: benefitForm.email,
      subject: 'Tu solicitud está en proceso',
      body: cuerpo,
      text: '-'
    };

    return this.http.post<any>(`${apiUrl}/pedidos/emailA`, solicitud);
  }
}