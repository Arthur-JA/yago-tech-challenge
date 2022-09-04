FROM node:14

ENV NODE_ENV development
WORKDIR /app

COPY . .
RUN npm ci
RUN npm run build

CMD [ "node","--max-old-space-size=800", "./dist/main.js"]
