<%@ page import="game.User" %>



			<div class="control-group fieldcontain ${hasErrors(bean: userInstance, field: 'username', 'error')} required">
				<label for="username" class="control-label"><g:message code="user.username.label" default="Username" /><span class="required-indicator">*</span></label>
				<div class="controls">
					<g:textField name="username" required="" value="${userInstance?.username}"/>
					<span class="help-inline">${hasErrors(bean: userInstance, field: 'username', 'error')}</span>
				</div>
			</div>

			<div class="control-group fieldcontain ${hasErrors(bean: userInstance, field: 'password', 'error')} required">
				<label for="password" class="control-label"><g:message code="user.password.label" default="Password" /><span class="required-indicator">*</span></label>
				<div class="controls">
					<g:passwordField name="password" required="" value="${userInstance?.password}"/>
					<span class="help-inline">${hasErrors(bean: userInstance, field: 'password', 'error')}</span>
				</div>
			</div>



			<div class="control-group fieldcontain ${hasErrors(bean: userInstance, field: 'userEmail', 'error')} ">
				<label for="userEmail" class="control-label"><g:message code="user.userEmail.label" default="User Email" /></label>
				<div class="controls">
					<g:textField name="userEmail" value="${userInstance?.userEmail}"/>
					<span class="help-inline">${hasErrors(bean: userInstance, field: 'userEmail', 'error')}</span>
				</div>
			</div>

			<div class="control-group fieldcontain ${hasErrors(bean: userInstance, field: 'userNick', 'error')} ">
				<label for="userNick" class="control-label"><g:message code="user.userNick.label" default="User Nick" /></label>
				<div class="controls">
					<g:textField name="userNick" value="${userInstance?.userNick}"/>
					<span class="help-inline">${hasErrors(bean: userInstance, field: 'userNick', 'error')}</span>
				</div>
			</div>

