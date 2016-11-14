package main

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {

	r := gin.Default()
	r.Use(static.Serve("/", static.LocalFile("./UI", true)))
	//r.NoRoute(static.Serve("/", static.LocalFile("./UI", false)))
	r.GET("/*action", func(c *gin.Context) {
		c.File("./UI/index.html")
	})

	r.Run(":8080")
}
