#!/usr/bin/env bash
## path:
ROOT_PATH=$(dirname $BASH_SOURCE);

alias pm2-ls='pm2 list';
alias pm2-st='pm2 start';
alias pm2-sp='pm2 stop';
alias pm2-rt='pm2 restart';
alias pm2-del='pm2 delete';
alias pm2-logs='pm2 logs';

alias pm2-stt='pm2 start all';
alias pm2-spp='pm2 stop all';
alias pm2-dell='pm2 delete all';
alias pm2-rs="pm2 reset all";
alias pm22='pm2 start ecosystem.config.js';

unset ROOT_PATH;
