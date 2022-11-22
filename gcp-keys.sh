#!/bin/sh

addSheels() {
ZSH=~/.zshrc
BASH=~/.bashrc
  if [ -f "$ZSH" ]; then
     echo "  " >> $ZSH
     echo "# EXPORT DA ENV DO GCLOUD " >> $ZSH
     echo "export GCP_KEY_PATH=$GCP_PATH" >>$ZSH
     echo "export GOOGLE_APPLICATION_CREDENTIALS=$GCP_PATH" >>$ZSH
     echo "Env exportada com sucesso";
     
     zsh
  elif [ -f "$BASH" ]; then
     echo "  " >> $BASH
     echo "# EXPORT DA ENV DO GCLOUD " >> $BASH
     echo "export GCP_KEY_PATH=$GCP_PATH" >> $BASH
     echo "export GOOGLE_APPLICATION_CREDENTIALS=$GCP_PATH" >> $BASH
     echo "env exportada com sucesso";

     bash
  else
    echo "Ocorreu um problema ao exportar a Env"
  fi
}


echo "Digite seu email da Player 1";
read EMAIL

FILE=~/.config/gcloud/legacy_credentials/$EMAIL/adc.json
FILE2=~/keys/project-key.json
if [ -f "$FILE" ]; then
    GCP_PATH=$FILE
    addSheels 
elif [ -f "$FILE2" ]; then
    GCP_PATH=$FILE2
    addSheels 
else 
    echo "Não encontramos sua chave do Gcloud"
fi

