FROM node:13.10-slim

WORKDIR /app

# Copy server & child application & client
COPY server .
COPY backbone-application dist
COPY child-application child-application

# Build child application
RUN yarn --cwd child-application install
RUN yarn --cwd child-application build

# Move client & build server
RUN mv child-application/dist/child-application.min.js dist
RUN yarn install

# Cleanup
RUN rm -rf child-application

# Start client server
EXPOSE 3000
CMD ["app.js"]