package main

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/3dev/rewards/api"
)

func main() {

	r := gin.Default()
	r.Use(static.Serve("/", static.LocalFile("./UI", true)))
	r.NoRoute(func(c *gin.Context) {
		c.File("./UI/index.html")
	})


	api.RegisterControllers(r)

	r.Run(":8080")
}
