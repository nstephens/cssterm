#!/bin/sh
USER="ignatenkobrain"
rsync --exclude ".git/" --exclude "sync-fedora.sh" -avz * "${USER}"@fedorapeople.org:/home/fedora/"${USER}"/public_html/cssterm/
