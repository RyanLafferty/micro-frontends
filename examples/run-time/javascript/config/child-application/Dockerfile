FROM node:13.10-slim

WORKDIR /app

# Copy server & client
COPY server .
COPY child-application client

# Build client
RUN yarn --cwd client install
RUN yarn --cwd client build

# Move client & build server
RUN mv client/dist dist
RUN yarn install

# Cleanup
RUN rm -rf client

# Start client server
EXPOSE 3000
CMD ["app.js"]