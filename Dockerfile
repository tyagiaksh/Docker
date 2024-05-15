FROM node:latest
WORKDIR /task5
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3030

RUN adduser --disabled-password --uid 1001 user

RUN chown -R user:user /task5 && \
    chmod -R 755 /task5

USER user
CMD ["npm", "start"]