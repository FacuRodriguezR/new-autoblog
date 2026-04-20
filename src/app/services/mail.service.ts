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
    const cuerpo = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Solicitud Club de Beneficios</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f4; padding: 20px 0;">
        <tbody>
          <tr>
            <td align="center">
              <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; shadow: 0 4px 10px rgba(0,0,0,0.1);">
                <tbody>
                  <tr>
                    <td align="center" style="background-color: #1a1a1a; padding: 30px 0;">
                      <img src="https://www.redautoshop.com.ar/assets/images/icons2/horizontal_negativo.png" alt="Autoshop Logo" style="display: block; height: 80px; width: auto;">
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 40px 30px;">
                      <h1 style="color: #cc2b1e; font-size: 22px; font-weight: 800; text-align: center; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: -0.5px;">
                        ¡Bienvenido al Club de Beneficios!
                      </h1>
                      <p style="color: #666666; font-size: 16px; text-align: center; margin: 0 0 30px 0;">
                        Hola <b>${benefitForm.nombreApellido}</b>, hemos recibido tu solicitud correctamente y ya está siendo procesada.
                      </p>

                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #fafafa; border-radius: 12px; padding: 20px; border: 1px solid #eeeeee;">
                        <tbody>
                          <tr>
                            <td style="padding-bottom: 10px; border-bottom: 1px solid #f0f0f0;">
                              <span style="color: #999999; font-size: 11px; text-transform: uppercase; font-weight: bold;">Empresa / CUIT</span><br>
                              <span style="color: #333333; font-size: 14px;"><b>${benefitForm.empresa}</b> (${benefitForm.cuit})</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                              <span style="color: #999999; font-size: 11px; text-transform: uppercase; font-weight: bold;">Cargo del solicitante</span><br>
                              <span style="color: #333333; font-size: 14px;">${benefitForm.cargo}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                              <span style="color: #999999; font-size: 11px; text-transform: uppercase; font-weight: bold;">Contacto Directo</span><br>
                              <span style="color: #333333; font-size: 14px;">${benefitForm.correo} | ${benefitForm.telefono}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top: 10px;">
                              <span style="color: #999999; font-size: 11px; text-transform: uppercase; font-weight: bold;">Mensaje adjunto</span><br>
                              <p style="color: #555555; font-size: 13px; font-style: italic; margin: 5px 0 0 0; line-height: 1.5; white-space: pre-line;">"${benefitForm.mensaje}"</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <p style="color: #444444; font-size: 14px; text-align: center; margin: 30px 0 0 0; line-height: 1.6;">
                        En breve un asesor de nuestro equipo se pondrá en contacto para finalizar el alta corporativa.<br>
                        <strong style="color: #cc2b1e;">¡Gracias por confiar en nosotros!</strong>
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td align="center" style="background-color: #fdfdfd; padding: 20px; border-top: 1px solid #eeeeee;">
                      <a href="https://redautoshop.com.ar" style="color: #cc2b1e; font-size: 12px; font-weight: bold; text-decoration: none; font-family: Arial, sans-serif;">VISITAR REDAUTOSHOP.COM.AR</a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table border="0" cellpadding="0" cellspacing="0" width="600">
                <tr>
                  <td style="padding: 20px; color: #aaaaaa; font-size: 10px; text-align: center; line-height: 1.4;">
                    Este es un mensaje automático generado por el sistema de gestión de Autoshop.<br>
                    © 2026 Autoshop Argentina. Todos los derechos reservados.
                  </td>
                </tr>
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
      cliente: benefitForm.correo,
      subject: 'Tu solicitud está en proceso - Club de Beneficios',
      body: cuerpo,
      text: '-'
    };

    return this.http.post<any>(`${apiUrl}/pedidos/emailCe`, solicitud);
  }
}