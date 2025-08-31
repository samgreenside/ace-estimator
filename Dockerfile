
FROM node:20-slim AS base
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM node:20-slim
WORKDIR /app
COPY --from=base /app .
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm","run","start"]
