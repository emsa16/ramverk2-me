# Me page for ramverk2 course

[![Build Status](https://travis-ci.org/emsa16/ramverk2-me.svg?branch=master)](https://travis-ci.org/emsa16/ramverk2-me)
[![CircleCI](https://circleci.com/gh/emsa16/ramverk2-me.svg?style=svg)](https://circleci.com/gh/emsa16/ramverk2-me)
[![Maintainability](https://api.codeclimate.com/v1/badges/e01f59ff40dc859e5645/maintainability)](https://codeclimate.com/github/emsa16/ramverk2-me/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e01f59ff40dc859e5645/test_coverage)](https://codeclimate.com/github/emsa16/ramverk2-me/test_coverage)
[![BCH compliance](https://bettercodehub.com/edge/badge/emsa16/ramverk2-me?branch=master)](https://bettercodehub.com/)

## Installera projektet
    $ git clone https://github.com/emsa16/ramverk2-me
    $ cd ramverk2-me
    $ npm|make install
    $ npm|make test

Såväl `npm` som `make` är möjliga att köra tillsammans med kommandona `install` och `test`

## Kör igång Express-servern
    $ [env DBWEBB_PORT=XXXX] npm start     # DBWEBB_PORT anger vilken port servern körs på, default är 3000

## Köra projektet i Docker
    $ npm run|make node1            # node 9-alpine
    $ npm run|make node2            # node 8-alpine
    $ npm run|make node3            # node 6-alpine
    $ npm run|make docker-start     # Kör alla tre containers
    $ npm run|make docker-stop      # Stoppar alla aktiva containers
    $ npm run|make docker-build     # Bygger ovan nämnda images från respektive Dockerfile

Alla dessa kommandon kan alltså också köras med både `make` och `npm run`.

## Ladda ner projektets image
https://store.docker.com/community/images/emsa16/ramverk2-me

BTH 2017
