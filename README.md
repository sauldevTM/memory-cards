# Memory Cards

Este es un juego de memoria desarrollado con React y Vite.

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/sauldevTM/memory-cards.git
   cd memory-cards

2. Instala las dependencias:

```
npm install
```

Scripts
- npm run dev: Inicia el servidor de desarrollo.
- npm run build: Construye la aplicación para producción.
- npm run lint: Ejecuta ESLint para encontrar y corregir problemas en el código.
- npm run preview: Previsualiza la aplicación construida.

## Levantar el Proyecto

1. Inicia el servidor de desarrollo:

```
npm run dev
```

2. Abre tu navegador y navega a http://localhost:3000 para ver la aplicación en funcionamiento.

## Estructura del Proyecto

- src: Contiene el código fuente de la aplicación.
- App.jsx: Componente principal de la aplicación.
- Tablero.jsx: Componente que representa el tablero del juego.
- Carta.jsx: Componente que representa una carta individual.
- main.jsx: Punto de entrada de la aplicación.
- App.css: Estilos específicos de la aplicación.
- index.css: Estilos globales de la aplicación.
- public: Contiene archivos estáticos como el favicon.

## Descripción del Juego

El juego de memoria consiste en encontrar todas las parejas de cartas. Al hacer clic en una carta, esta se voltea. Si se voltean dos cartas y son iguales, permanecen volteadas. Si no son iguales, se voltean nuevamente después de un segundo. El juego termina cuando se encuentran todas las parejas.

## Reiniciar el Juego

Para reiniciar el juego, haz clic en el botón "Reiniciar Juego".

## Contribuir

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (```git checkout -b feature/nueva-funcionalidad```).
3. Realiza tus cambios y haz commit (```git commit -am 'Agrega nueva funcionalidad'```).
4. Sube tus cambios (```git push origin feature/nueva-funcionalidad```).
5. Abre un Pull Request.