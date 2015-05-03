
/*
    See: https://github.com/extrabacon/google-oauth-jwt
*/

Package.describe({
  name: "pfafman:google-oauth-jwt",
  summary: "Google OAuth 2.0 authentication for server-to-server applications with Meteor",
  version: "0.1.6_1",
  git: "https://github.com/pfafman/meteor-google-oauth-jwt.git"
});

Npm.depends({"google-oauth-jwt": '0.1.6'});

Package.on_use(function (api) {

  api.add_files('google-server-auth.js', 'server');
  
  if(api.export)
    api.export('GoogleServerAuth', 'server');
});