# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@1.7.1

# add app
COPY . /usr/src/app

CMD ng serve --host 0.0.0.0 --port 4200

#$ docker build -t music-smoker .   [ESTO SE UTILIZARÁ PARA CREAR LA IMAGEN DEL CONTENEDOR]

#$ docker run -it \
#  -v ${pwd}:/usr/src/app \
#  -v /usr/src/app/node_modules \
#  -p 4200:4200 \
#  --rm \
#  music-smoker