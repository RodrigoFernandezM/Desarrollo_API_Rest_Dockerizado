# Define cómo construir la imagen del contenedor que ejecutará la API.

# Indica la imagen base que vamos a utilizar. En este caso usamos una imagen oficial de Node.js.
FROM node:18

# Define el directorio de trabajo dentro del contenedor donde se ejecutará la aplicación.
WORKDIR /app

# Copia los archivos de dependencias del proyecto al contenedor.
COPY package*.json ./

# Instala las dependencias del proyecto dentro del contenedor.
RUN npm install

# Copia el resto del código del proyecto al contenedor.
COPY . .

# Indica que la aplicación usará el puerto 3000.
EXPOSE 3000


# Define el comando que se ejecutará cuando el contenedor arranque, en este caso iniciar el servidor Node.js.
CMD ["npm", "start"]