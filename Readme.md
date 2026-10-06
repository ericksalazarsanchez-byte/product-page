# GeoCompass - Landing Page de Brújulas Geológicas Profesionales

Landing Page y portal de productos de precisión geológica desarrollada durante el Módulo 1.

- **URL de GitHub Pages:** https://ericksalazarsanchez-byte.github.io/product-page/
- **Repositorio:** https://github.com/ericksalazarsanchez-byte/product-page

---

## Sistema de Tokens CSS (Variables)

| Token | Valor | Uso Principal |
| :--- | :--- | :--- |
| `--color-primary` | `#121212` | Fondo general de la aplicación (Dark Mode) |
| `--color-accent` | `#00A8E8` | Enlaces hover, botones activos y acentos |
| `--color-accent-gold` | `#D4AF37` | Precios e insignias de planes de compra |
| `--color-bg` | `#1E1E1E` | Tarjetas de productos, planes y contenedor del formulario |
| `--color-bg-soft` | `#2A2A2A` | Cabecera, pie de página e insumos de inputs |
| `--color-border` | `#333333` | Bordes delimitadores de tarjetas y campos de texto |
| `--font-size-title` | `28px` | Títulos principales de sección |
| `--radius` | `8px` | Redondeo unificado de tarjetas e insumos |
| `--shadow-md` | `0 6px 16px rgba(0,0,0,0.7)` | Elevación interactiva al pasar el cursor sobre los planes |

---

## Validaciones del Formulario de Contacto

| Campo | Atributo / Regla | Comportamiento del Navegador |
| :--- | :--- | :--- |
| **Nombre** | `required`, `minlength="3"` | Exige un mínimo de 3 caracteres para permitir el envío. |
| **Email** | `required`, `type="email"` | Comprueba automáticamente la sintaxis del correo electrónico (`@` y dominio). |
| **Teléfono** | `required`, `pattern="[0-9]{9}"` | Exige exactamente 9 dígitos numéricos. |
| **Motivo** | `<select required>` | Bloquea el envío si no se ha elegido una opción válida. |
| **Mensaje** | `required`, `minlength="10"` | Pide una descripción mínima de 10 caracteres. |
| **Términos** | `checkbox required` | Exige la aceptación de las políticas para enviar. |

---

## Historias de Usuario Implementadas (Proyecto Final)

### HU1: Navegación Fluida a Sección de Planes de Compra
- **Como** comprador interesado o geólogo.
- **Quiero** acceder a los planes de compra mediante un enlace directo en la navegación y retornar al inicio.
- **Criterios de Aceptación:** Navegación suave por id (`#inicio`, `#planes`), maquetación en CSS Grid, tarjetas destacadas con insignias.

### HU2: Formulario de Cotización con Validación HTML5 Nativa
- **Como** cliente corporativo.
- **Quiero** enviar mis datos asegurándome de ingresar la información correcta antes del envío.
- **Criterios de Aceptación:** Validación nativa del navegador sin JavaScript adicional, bloqueo ante errores de sintaxis.