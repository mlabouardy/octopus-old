FROM golang:1.8.0
MAINTAINER mlabouardy <mohamed@labouardy.com>

COPY . /app

WORKDIR /app

RUN go get -v github.com/gorilla/mux

EXPOSE 5000

CMD go run main.go
