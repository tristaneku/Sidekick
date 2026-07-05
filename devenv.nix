{ ... }:

{
  env.GREET = "Sidekick dev environment";

  languages.deno.enable = true;

  enterShell = ''
    echo $GREET
  '';
}
