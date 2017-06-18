# mAdapt Web App Front End

[![Build Status](https://travis-ci.org/RHoKAustralia/madapt-react-frontend.svg?branch=master)](https://travis-ci.org/RHoKAustralia/madapt-react-frontend)

## About

### mAdapt

[mAdapt](http://www.madapt.org/) will use mobile technology to provide refugees with information concerning their most pressing reproductive health needs.

mAdapt will also collect anonymous data that can help inform service delivery and policy development by mapping what services are being sought, in what region, and how often.

### This repo

This repository contains the code for the web app front end written in React using [`create-react-app`](https://github.com/facebookincubator/create-react-app).

## Contributing

## Deployment

Continuous integration and deployment are provided through [Travis CI](https://travis-ci.org/). This happens automatically through the [.travis.yml](.travis.yml) file. 

This has anonymised Amazon Web Services credentials -- do not change these.

Travis currently runs tests, compiles down to optimised JS, and sends these to a public S3 bucket. The deployed site can then be accessed [here](http://madapt.s3-website-ap-southeast-2.amazonaws.com/).

Only master is built and deployed. It will not deploy if it does not build, so check `npm run build` locally and fix any errors before merging to master.