# Me-sida för kursen ramverk2

[![Build Status](https://travis-ci.org/emsa16/ramverk2-me.svg?branch=master)](https://travis-ci.org/emsa16/ramverk2-me)
[![CircleCI](https://circleci.com/gh/emsa16/ramverk2-me.svg?style=svg)](https://circleci.com/gh/emsa16/ramverk2-me)
[![Maintainability](https://api.codeclimate.com/v1/badges/e01f59ff40dc859e5645/maintainability)](https://codeclimate.com/github/emsa16/ramverk2-me/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e01f59ff40dc859e5645/test_coverage)](https://codeclimate.com/github/emsa16/ramverk2-me/test_coverage)
[![BCH compliance](https://bettercodehub.com/edge/badge/emsa16/ramverk2-me?branch=master)](https://bettercodehub.com/)

Projektet bygger på scaffolding från [Create React App](https://github.com/facebook/create-react-app).

## Installera projektet

    $ git clone https://github.com/emsa16/ramverk2-me
    $ cd ramverk2-me
    $ npm|make install
    $ npm|make test                 # OBS! npm test kör react-scripts test medan make test kör linters

Såväl `npm` som `make` är möjliga att köra tillsammans med kommandona `install` och `test`

## Köra projektet

    $ npm start                     # Starta React i utvecklingsläge (port 3000)
    $ npm run build                 # Bygg appen för produktion i `build`-katalogen.
    $ npm run deploy                # Bygg appen och för över filerna till produktionsservern

När projektet körs i utvecklingsläge med `npm start` hittas den i webbläsaren på [http://localhost:3000](http://localhost:3000)

BTH 2019
