# 🚀 Plataforma con Ollama y Node.js

Este proyecto permite ejecutar un servidor Node.js que utiliza **Ollama** para procesar texto con inteligencia artificial.

## 📌 Requisitos
- Tener **Ollama** instalado en tu sistema.
- Tener **Node.js** y **npm** instalados.

## 🛠️ Instalación y Configuración

1. Dirígete a la página oficial de **Ollama**: [https://ollama.com/](https://ollama.com/)
2. Descarga la versión para tu sistema operativo (Windows, Mac o Linux).
3. Ejecuta el instalador (`.exe` en Windows o el script en Linux/Mac).
4. Sigue las instrucciones de instalación hasta finalizar.
5. Abre una terminal y asegúrate de que Ollama está instalado ejecutando:
   ```sh
   ollama --version
6. Ingresa nuevamente a https://ollama.com/ y busca el modelo de deep seek y puedes copiar el de 7b,8b,14b
7. Copiar el comando para instalar culaquier de esas opciones
```sh
ollama run deepseek-r1:8b
```
8. Espera a que se descargue completamente.
9. Ahora debemos clonar este repositorio.
```sh
git clone https://github.com/Roberto640Alvarado/deepseek-code.git
```
10. Instalamos los paquetes necesarios con:
```sh
npm i
```
11. Para ejecutar el proyecto:
```sh
npm start
```
12. Para hacer uso de este proyecto debe estar corriendo el modelo de manera local con:
  ```sh
ollama run deepseek-r1:8b
```  
