
/*
    See: https://github.com/extrabacon/google-oauth-jwt
*/

Package.describe({
  name: "pfafman:google-oauth-jwt",
  summary: "Google OAuth 2.0 authentication for server-to-server applications with Meteor"
});

Npm.depends({"google-oauth-jwt": '0.1.6'});

Package.on_use(function (api) {
  api.use(['coffeescript'], 'server');

  api.add_files('google-server-auth.coffee', 'server');
  
  if(api.export)
    api.export('GoogleServerAuth', 'server');
});