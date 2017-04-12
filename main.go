/*package main

import "html/template"

func main() {

	t := template.New("create template")
	t, _ := t.ParseFiles("tmpl/telegraf.conf", nil)
	r := mux.NewRouter()
	r.PathPrefix("/").Handler(http.StripPrefix("/", http.FileServer(http.Dir("./build/"))))
	err := http.ListenAndServe("localhost:4000", r)
	if err != nil {
		panic(err)
	}
}
*/
package main

import (
	"os"
	"text/template"
)

type Telegraf struct {
	Hostname string
	IsCpu    bool
	IsDisk   bool
	IsNet    bool
	IsMem    bool
	IsSwap   bool
	IsSystem bool
}

func main() {
	config := Telegraf{Hostname: "vm-test", IsCpu: true, IsDisk: true, IsNet: true, IsMem: true, IsSwap: false, IsSystem: false}
	tmpl, err := template.New("telegraf.conf").ParseFiles("tmpl/telegraf.conf")
	if err != nil {
		panic(err)
	}
	err = tmpl.Execute(os.Stdout, config)
	if err != nil {
		panic(err)
	}
}
