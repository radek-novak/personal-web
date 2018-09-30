#! /bin/bash

convert $1 -resize 600 -quality 92 $1
guetzli $1 $1