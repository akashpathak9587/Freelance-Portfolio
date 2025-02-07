FROM node:lts-alpine
ENV VITE_API_BASE_URL=http://localhost:3001/v1/
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent && mv node_modules ../
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npm", "run", "preview"]
