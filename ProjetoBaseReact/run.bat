@echo off
cls

cd C:\dev\fleek\ProjetoBaseReact

start cmd /k npm run start

start cmd /k json-server src\mock\db.json --p 3002 --id idEscola
