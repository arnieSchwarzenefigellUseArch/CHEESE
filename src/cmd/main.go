package main

import (
	Handlers "komario/backend/internal/handlers"
	"log"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Загружаем шаблоны
	r.LoadHTMLGlob("templates/*")
	r.GET("/", Handlers.HomeHandler)
	r.GET("/about", Handlers.AboutHandler)
	r.GET("/catalog", Handlers.Catalog)
	r.GET("/history", Handlers.History)
	r.Static("/css", "/home/roman/.projects/komario/backend/css")
	r.Static("/assets", "/home/roman/.projects/komario/backend/assets")
	r.Static("/js", "/home/roman/.projects/komario/backend/js")

	log.Println("Server started on 8080!")
	r.Run(":8080")
}
