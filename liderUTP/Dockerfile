FROM node:16-alpine

ENV IONIC_VERSION=5.4.16
ENV PORT=8200

WORKDIR /app
COPY package*.json  ./

RUN npm install -g cordova ionic@${IONIC_VERSION} 
RUN npm install  

COPY . .

CMD [ "ionic" ,"serve","--port=${PORT}","--address","0.0.0.0"]