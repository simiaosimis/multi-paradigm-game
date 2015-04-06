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
	def springSecurityService
	def index(){
		[lista : Player.list() as grails.converters.JSON]
	}

	def printa(){

		def user = springSecurityService.getCurrentUser()
		print user.username
		user.userScore =  params.attr
	}

}