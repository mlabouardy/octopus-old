package main

import (
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	r.Handle("/", http.FileServer(http.Dir("./public")))
	err := http.ListenAndServe("localhost:5000", r)
	if err != nil {
		panic(err)
	}
}
