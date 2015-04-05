<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="${resource(dir: 'css', file: 'bootstrap.css')}" type="text/css">
   
  </head>



<form class="form-horizontal">
<g:form action="register" name="registerForm">
  <fieldset>
    <legend>Register</legend>

    <div class="form-group">
      <label for="inputEmail" class="col-lg-2 control-label">Email</label>
      <div class="col-lg-10">
        <g:textField name="email" class="form-control" id="inputEmail" placeholder="Email" value="${user?.userEmail}"></g:textField>
      </div>
    </div>

    <div class="form-group">
      <label for="inputNickName" class="col-lg-2 control-label">Name</label>
      <div class="col-lg-10">
        <g:textField name="login" class="form-control" value="${user?.userName}" id="inputNickname" placeholder="Nickname"></g:textField>
      </div>
    </div>

     <div class="form-group">
      <label for="inputNickName" class="col-lg-2 control-label">Nickname</label>
      <div class="col-lg-10">
        <g:textField name="login" class="form-control" value="${user?.userNick}" id="inputNickname" placeholder="Nickname"></g:textField>
      </div>
    </div>

    <div class="form-group">
      <label for="inputPassword" class="col-lg-2 control-label">Password</label>
      <div class="col-lg-10">
        <g:passwordField name="password" class="form-control" id="inputPassword" placeholder="Password" value="${user?.password}"></g:passwordField>
      </div>
    </div>

      <div class="col-lg-10 col-lg-offset-2">
        <g:submitButton class="btn btn-primary" name="register" value="Register"></g:submitButton>
      </div>
    </div>
  </fieldset>
  </g:form>
</form>
</html>