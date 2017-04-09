package main

import (
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	r.PathPrefix("/").Handler(http.StripPrefix("/", http.FileServer(http.Dir("./build/"))))
	err := http.ListenAndServe("localhost:5000", r)
	if err != nil {
		panic(err)
	}
}
