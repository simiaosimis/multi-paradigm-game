package game

import org.codehaus.groovy.grails.plugins.springsecurity.SpringSecurityUtils

import org.springframework.security.authentication.AccountExpiredException
import org.springframework.security.authentication.CredentialsExpiredException
import org.springframework.security.authentication.DisabledException
import org.springframework.security.authentication.LockedException
import org.springframework.security.core.context.SecurityContextHolder as SCH
import org.springframework.security.web.WebAttributes
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter
import org.springframework.dao.DataIntegrityViolationException

class PlayerController{
	 static allowedMethods = [save: "POST", update: "POST", delete: "POST"]
	def springSecurityService
	def index(){
		[lista : Player.list() as grails.converters.JSON]
	}

	def printa(){

		def user = springSecurityService.getCurrentUser()
		print user.username
		print params.score 
		if (params.score > user.userScore)
			user.userScore =  params.score
		print "score: " + user.userScore
	}

	def highScore(){

		  List<User> userList = User.list(max: 10, sort: "userScore", order: "desc")
		[userList :userList] 
		  
		  

	}

}