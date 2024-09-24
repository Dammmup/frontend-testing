FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3333

CMD ["npx", "live-server", "--port=3333", "--host=0.0.0.0"]
