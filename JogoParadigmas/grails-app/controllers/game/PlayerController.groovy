package game

class PlayerController{
	
	def player(){
		[lista : Player.list() as grails.converters.JSON]
	}

	def printa(){
		print params.attr
	}

}