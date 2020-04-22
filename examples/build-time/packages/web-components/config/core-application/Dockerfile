FROM node:13.10-slim

WORKDIR /app

# Copy server & child application & client
COPY server .
COPY core-application client
COPY child-application child-application

# Build child application
RUN yarn --cwd child-application install
RUN yarn --cwd child-application build

# Build client
RUN yarn --cwd client install
RUN yarn --cwd client build

# Move client & build server
RUN mv client/build dist
RUN yarn install

# Cleanup
RUN rm -rf client
RUN rm -rf child-application

# Start client server
EXPOSE 3000
CMD ["app.js"]