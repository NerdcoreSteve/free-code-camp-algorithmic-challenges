#!/bin/bash
# My first script

cp title_case.js $1.js; cp spec/title_case_spec.js spec/$1_spec.js; vim -p $1.js spec/$1_spec.js
