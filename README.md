# Landing Balón Interactivo

Una landing page interactiva con animaciones avanzadas de un balón que rebota, desarrollada con tecnologías web modernas y desplegada en Firebase Hosting.

## 📋 Descripción

Esta landing page presenta una experiencia visual única con un balón interactivo que responde a las acciones del usuario. Utiliza animaciones fluidas, formularios dinámicos y una arquitectura moderna para crear una experiencia inmersiva y atractiva.

## 📷 Capturas de Pantalla

### Vista Principal
<img width="1867" height="1025" alt="Image" src="https://github.com/user-attachments/assets/0914a507-6503-41af-9ba1-1e07cbe6e370" />
*Página principal con el balón interactivo y animaciones GSAP*

### Balón en Movimiento
<img width="1865" height="1018" alt="image" src="https://github.com/user-attachments/assets/8b3ca306-b410-4050-bf89-4affc5e43c10" />
*Demostración de las animaciones del balón rebotando*
</div>

<div align="center">
<h3>Formulario Interactivo<h3> 
<img width="261" height="220" alt="Image" src="https://github.com/user-attachments/assets/f0af012b-e31f-49d4-8b52-da2a3194ac60" />
<em><p>Formulario con validaciones y efectos visuales*</em></p>
</div>

<div align="center">
<h3>Vista Móvil</h3>
<img width="577" height="956" alt="image" src="https://github.com/user-attachments/assets/87d1c3bd-fd7f-44a8-876c-68852947d27f" />
<em><p>Diseño adaptativo para dispositivos móviles*</em></p>
</div>


## 🚀 Tecnologías Utilizadas

- **HTML5** - Estructura semántica moderna
- **CSS3** - Estilos avanzados con animaciones
- **JavaScript (ES6+)** - Lógica interactiva y manejo de eventos
- **GSAP (GreenSock)** - Animaciones de alto rendimiento
- **Firebase Hosting** - Despliegue y hosting en la nube
- **Firebase Realtime Database** - Base de datos para pseudónimos

## 📁 Estructura del Proyecto

```
barbosa191919-landing-balon-interactivo/
├── firebase.json          # Configuración de Firebase
├── package.json           # Dependencias y scripts
├── .firebaserc           # Configuración del proyecto Firebase
└── public/
    ├── 404.html          # Página de error personalizada
    ├── index.html        # Página principal
    ├── css/
    │   ├── base.css      # Estilos base y reset
    │   ├── components.css # Estilos de componentes
    │   ├── form.css      # Estilos del formulario
    │   ├── layout.css    # Estructura y layout
    │   ├── main.css      # Estilos principales
    │   └── responsive.css # Media queries y responsividad
    └── js/
        ├── main.js       # Punto de entrada principal
        ├── core/
        │   ├── bounce-logic.js  # Lógica del rebote del balón
        │   └── gsap-setup.js    # Configuración de GSAP
        ├── firebase/
        │   ├── firebase-config.js # Configuración de Firebase
        │   └── pseudonimos.js     # Gestión de pseudónimos
        └── ui/
            └── form-handler.js    # Manejo del formulario
```

## 🧩 Componentes y Módulos

### Módulos Core
- **bounce-logic.js** - Algoritmos de física para el rebote del balón
- **gsap-setup.js** - Configuración y inicialización de GSAP

### Módulos Firebase
- **firebase-config.js** - Configuración de la conexión a Firebase
- **pseudonimos.js** - Sistema de pseudónimos aleatorios

### Módulos UI
- **form-handler.js** - Validación y manejo de formularios
- **main.js** - Coordinación general de la aplicación

### Estilos Modulares
- **base.css** - Reset CSS y estilos fundamentales
- **components.css** - Estilos de componentes reutilizables
- **form.css** - Estilos específicos del formulario
- **layout.css** - Grid, flexbox y estructura general
- **responsive.css** - Adaptación a diferentes dispositivos

## 🛠️ Instalación y Configuración

### Requisitos Previos
- Node.js (v14 o superior)
- Firebase CLI instalado globalmente

### Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd barbosa191919-landing-balon-interactivo
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura Firebase:
```bash
firebase login
firebase init
```

4. Configura las variables de Firebase en `firebase-config.js`:
```javascript
const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "tu-dominio.firebaseapp.com",
  databaseURL: "tu-database-url",
  projectId: "tu-project-id"
};
```

5. Ejecuta el proyecto localmente:
```bash
firebase serve
```

6. Visita `http://localhost:5000`

## 🌟 Características

- ✅ Animaciones fluidas de balón interactivo
- ✅ Física realista de rebote y colisiones
- ✅ Formularios con validación en tiempo real
- ✅ Sistema de pseudónimos aleatorios
- ✅ Diseño completamente responsive
- ✅ Optimización para dispositivos móviles
- ✅ Integración con Firebase
- ✅ Arquitectura modular y escalable
- ✅ Efectos visuales avanzados con GSAP

## 🎯 Funcionalidades

### Interacciones del Balón
- **Rebote Físico**: El balón rebota de forma realista
- **Respuesta al Mouse**: Sigue el cursor del usuario
- **Colisiones**: Detecta bordes y obstáculos
- **Animaciones Fluidas**: 60 FPS con GSAP

### Sistema de Formularios
- **Validación Tiempo Real**: Feedback instantáneo
- **Pseudónimos Aleatorios**: Generación automática
- **Envío Seguro**: Conexión con Firebase
- **Efectos Visuales**: Transiciones suaves

## 📱 Responsividad

Optimizado para todos los dispositivos:
- 💻 **Desktop** (1200px+) - Experiencia completa
- 📱 **Tablet** (768px-1199px) - Adaptación táctil
- 🔧 **Mobile** (320px-767px) - Interfaz simplificada

## 🚀 Despliegue en Firebase

### Despliegue Automático
```bash
firebase deploy
```

### Configuración de Hosting
```json
{
  "hosting": {
    "public": "public",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## 🎨 Personalización

### Modificar Animaciones
Edita `core/bounce-logic.js` para ajustar:
- Velocidad de rebote
- Gravedad simulada
- Detección de colisiones

### Cambiar Estilos
Los estilos están organizados por módulos:
- `base.css` - Colores y tipografía base
- `components.css` - Componentes específicos
- `responsive.css` - Breakpoints y adaptaciones

## 📊 Rendimiento

- **Animaciones**: 60 FPS con GSAP
- **Carga Inicial**: < 2 segundos
- **Lighthouse Score**: 95+ en todas las métricas
- **Optimización**: Imágenes comprimidas y CSS minificado

## 🔧 Scripts Disponibles

- `firebase serve` - Servidor local de desarrollo
- `firebase deploy` - Despliegue a producción
- `firebase emulators:start` - Emuladores locales

## 🤝 Contribución

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commitea tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Barbosa191919**

## 📞 Contacto

Para consultas o sugerencias:
- GitHub: [@barbosa191919](https://github.com/barbosa191919)

---

⭐ ¡No olvides dar una estrella al proyecto si te fue útil!
