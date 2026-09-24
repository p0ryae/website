{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShell {
  packages = with pkgs; [
    deno
  ];

  shellHook = ''
    exec fish
  '';
}
