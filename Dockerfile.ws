# Stage1: UI Build
FROM node:14-slim AS ui-build
WORKDIR /usr/src
COPY ./client/ ./ui/
RUN cd ui && npm install && npm run build

# Stage2: API Build
FROM node:14-slim AS api-build
WORKDIR /usr/src
COPY ./server/ ./api/
RUN cd api && npm install
RUN ls

# Stage3: Packagign the app
FROM node:14-slim
WORKDIR /root/
COPY --from=ui-build /usr/src/ui/build ./build
COPY --from=api-build /usr/src/api .
RUN ls

EXPOSE 1150

CMD ["node", "app.js"]