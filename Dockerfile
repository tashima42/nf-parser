FROM node:22-alpine
WORKDIR /app
COPY ./package.json ./
RUN npm install
USER node
COPY --chown=node:node ./ ./
ENV PORT=3000
EXPOSE ${PORT}
CMD ["node", "src/index.js"]
