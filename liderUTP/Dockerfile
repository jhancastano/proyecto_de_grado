FROM node:14-alpine

ENV IONIC_VERSION=5.4.16


EXPOSE 8100

WORKDIR /app

COPY . /app

RUN npm install -g cordova ionic@${IONIC_VERSION} 
RUN npm install && rm -rf /root/.npm 

HEALTHCHECK --interval=10s --timeout=3s --start-period=30s CMD curl -f http://localhost:8100 || exit 1

CMD ["ionic","serve"]