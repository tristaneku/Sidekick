{ ... }:

{
  env = {
    GREET = "Sidekick dev environment";
    DB_FILE_NAME = "file:local.db";
  };

  languages.deno.enable = true;

  enterShell = ''
    echo $GREET
  '';
}
