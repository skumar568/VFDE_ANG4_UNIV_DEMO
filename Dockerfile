# Choosing Base Image
FROM node:alpine

# Copy source code
COPY . /VFDE_DEMO

# Change working directory
WORKDIR /VFDE_DEMO

# Install dependencies
RUN npm install

# Build application
RUN npm run build:ssr

# Expose API port to the outside
EXPOSE 4000

# Launch application
CMD ["npm","serve:ssr"]