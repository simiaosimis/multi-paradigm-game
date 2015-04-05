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
					<g:textField name="password" required="" value="${userInstance?.password}"/>
					<span class="help-inline">${hasErrors(bean: userInstance, field: 'password', 'error')}</span>
				</div>
			</div>

			<div class="control-group fieldcontain ${hasErrors(bean: userInstance, field: 'accountExpired', 'error')} ">
				<label for="accountExpired" class="control-label"><g:message code="user.accountExpired.label" default="Account Expired" /></label>
				<div class="controls">
					<bs:checkBox name="accountExpired" value="${userInstance?.accountExpired}" />
					<span class="help-inline">${hasErrors(bean: userInstance, field: 'accountExpired', 'error')}</span>
				</div>
			</div>

			<div class="control-group fieldcontain ${hasErrors(bean: userInstance, field: 'accountLocked', 'error')} ">
				<label for="accountLocked" class="control-label"><g:message code="user.accountLocked.label" default="Account Locked" /></label>
				<div class="controls">
					<bs:checkBox name="accountLocked" value="${userInstance?.accountLocked}" />
					<span class="help-inline">${hasErrors(bean: userInstance, field: 'accountLocked', 'error')}</span>
				</div>
			</div>

			<div class="control-group fieldcontain ${hasErrors(bean: userInstance, field: 'enabled', 'error')} ">
				<label for="enabled" class="control-label"><g:message code="user.enabled.label" default="Enabled" /></label>
				<div class="controls">
					<bs:checkBox name="enabled" value="${userInstance?.enabled}" />
					<span class="help-inline">${hasErrors(bean: userInstance, field: 'enabled', 'error')}</span>
				</div>
			</div>

			<div class="control-group fieldcontain ${hasErrors(bean: userInstance, field: 'passwordExpired', 'error')} ">
				<label for="passwordExpired" class="control-label"><g:message code="user.passwordExpired.label" default="Password Expired" /></label>
				<div class="controls">
					<bs:checkBox name="passwordExpired" value="${userInstance?.passwordExpired}" />
					<span class="help-inline">${hasErrors(bean: userInstance, field: 'passwordExpired', 'error')}</span>
				</div>
			</div>

			<div class="control-group fieldcontain ${hasErrors(bean: userInstance, field: 'userAge', 'error')} required">
				<label for="userAge" class="control-label"><g:message code="user.userAge.label" default="User Age" /><span class="required-indicator">*</span></label>
				<div class="controls">
					<bs:datePicker name="userAge" precision="day"  value="${userInstance?.userAge}"  />
					<span class="help-inline">${hasErrors(bean: userInstance, field: 'userAge', 'error')}</span>
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

			<div class="control-group fieldcontain ${hasErrors(bean: userInstance, field: 'userRankPosition', 'error')} required">
				<label for="userRankPosition" class="control-label"><g:message code="user.userRankPosition.label" default="User Rank Position" /><span class="required-indicator">*</span></label>
				<div class="controls">
					<g:field type="number" name="userRankPosition" required="" value="${userInstance.userRankPosition}"/>
					<span class="help-inline">${hasErrors(bean: userInstance, field: 'userRankPosition', 'error')}</span>
				</div>
			</div>

			<div class="control-group fieldcontain ${hasErrors(bean: userInstance, field: 'userScore', 'error')} required">
				<label for="userScore" class="control-label"><g:message code="user.userScore.label" default="User Score" /><span class="required-indicator">*</span></label>
				<div class="controls">
					<g:field type="number" name="userScore" required="" value="${userInstance.userScore}"/>
					<span class="help-inline">${hasErrors(bean: userInstance, field: 'userScore', 'error')}</span>
				</div>
			</div>

