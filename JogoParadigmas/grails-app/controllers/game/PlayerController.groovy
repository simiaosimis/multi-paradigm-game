package game

class PlayerController{
	
	def index(){
		[lista : Player.list() as grails.converters.JSON]
	}

	def printa(){
		print params.attr
	}

}