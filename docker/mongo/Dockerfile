# Build with docker build -t tuesday-mongo . (in the directory where dockerfile is located)
# After building, run first time with docker run -d --name tuesday-mongo -p 27017:27017 tuesday-mongo
# Then, you can run it with docker start tuesday-mongo

# Use the official MongoDB image
FROM mongo:8.0

# (Optional) Set the root user credentials
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=admin123

# (Optional) Create a default database on startup
ENV MONGO_INITDB_DATABASE=test

# Expose MongoDB’s default port
EXPOSE 27017

# Mount the database files to a Docker volume
VOLUME [ "/data/db" ]