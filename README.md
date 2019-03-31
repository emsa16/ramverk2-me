# Me-sida för kursen ramverk2

[![Build Status](https://travis-ci.org/emsa16/ramverk2-me.svg?branch=master)](https://travis-ci.org/emsa16/ramverk2-me)
[![CircleCI](https://circleci.com/gh/emsa16/ramverk2-me.svg?style=svg)](https://circleci.com/gh/emsa16/ramverk2-me)
[![Maintainability](https://api.codeclimate.com/v1/badges/e01f59ff40dc859e5645/maintainability)](https://codeclimate.com/github/emsa16/ramverk2-me/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e01f59ff40dc859e5645/test_coverage)](https://codeclimate.com/github/emsa16/ramverk2-me/test_coverage)
[![BCH compliance](https://bettercodehub.com/edge/badge/emsa16/ramverk2-me?branch=master)](https://bettercodehub.com/results/emsa16/ramverk2-me)

Projektet bygger på scaffolding från [Create React App](https://github.com/facebook/create-react-app).

## Krav
Node och yarn behöver finnas installerade.

## Installera projektet

    $ git clone https://github.com/emsa16/ramverk2-me
    $ cd ramverk2-me
    $ yarn install
    $ yarn test

## Köra projektet

    $ yarn start    # Starta React i utvecklingsläge - körs på [http://localhost:3000](http://localhost:3000)
    $ yarn build    # Bygg appen för produktion i `build`-katalogen.
    $ yarn deploy   # Bygg appen och för över filerna till produktionsservern


## Köra projektet i Docker

    $ yarn docker-start     # Startar alla containers (se nedan)
    $ yarn docker-stop      # Stoppar alla aktiva containers
    $ yarn docker-build     # Bygger alla images nedan från respektive Dockerfile

    $ yarn docker-node1     # node latest-alpine (testa på http://localhost:8030)
    $ yarn docker-node2     # node 10-alpine (testa på http://localhost:8031)
    $ yarn docker-node3     # node 8-alpine (testa på http://localhost:8032)

    $ yarn test-node1       # Kör yarn test inuti node1-containern
    $ yarn test-node2       # Kör yarn test inuti node2-containern
    $ yarn test-node3       # Kör yarn test inuti node3-containern

BTH 2019
