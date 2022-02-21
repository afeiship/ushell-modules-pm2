#!/usr/bin/env bash
## path:
ROOT_PATH=$(dirname $BASH_SOURCE);

alias pm2-ls='pm2 list';
alias pm2-start='pm2 start';
alias pm2-stop='pm2 stop';
alias pm2-restart='pm2 restart';
alias pm2-del='pm2 delete';
alias pm2-logs='pm2 logs';
alias pm2-logs-tail='pm2 logs --tail';

alias pm2-start-all='pm2 start all';
alias pm2-stop-all='pm2 stop all';
alias pm2-del-all='pm2 delete all';

unset ROOT_PATH;
