#!/bin/bash

usage="Usage: $(basename "$0") -e staging|production"

. ./NENV/bin/activate

[ $# -eq 0 ] && echo "$usage"

while getopts ":e:" opt; do
  case $opt in
    e)
      echo "Deploying picture-pile component to $OPTARG"

      if [ "$OPTARG" = "md-staging" ];then
        yarn build-component --mode md-staging
        REMOTE_USER="zopeuser"
        REMOTE_SERVER="staging-nl.milieudefensie.nl"
        REMOTE_FOLDER="/var/www/html/ppc"
      elif [ "$OPTARG" = "md-production" ];then
        yarn build-component --mode md-production
        REMOTE_USER="zopeuser"
        REMOTE_SERVER="milieudefensie.nl"
        REMOTE_FOLDER="/var/www/html/ppc"
      fi
      echo "rsync -avz --rsync-path=\"mkdir -p $REMOTE_FOLDER && rsync\" --progress dist/* $REMOTE_USER@$REMOTE_SERVER:$REMOTE_FOLDER/"
      rsync -avz --rsync-path="mkdir -p $REMOTE_FOLDER && rsync" --progress dist/* $REMOTE_USER@$REMOTE_SERVER:$REMOTE_FOLDER/
      ;;
    \?)
      echo "Invalid argument $OPTARG" >&2
      echo "$usage"
      exit 1
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      exit 1
      ;;
  esac
done

