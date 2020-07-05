FROM node:14 AS BUILD_IMAGE

WORKDIR /app

COPY . /app

EXPOSE 8080

RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin \
    && npm ci \
    && npm run build \
    && npm prune --production \
    && /usr/local/bin/node-prune

FROM node:14

WORKDIR /app

COPY --from=BUILD_IMAGE /app/dist ./dist
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules

RUN npm install --global http-server

CMD http-server ./dist