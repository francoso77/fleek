
@echo off
cls

cd C:\dev\fleek\lab

start cmd /k npm run start

start cmd /k json-server src\mock\db.json --p 3002 --id idEscola

start cmd /k json-server src\mock\db.json --p 3004 --id idCliente

start cmd /k json-server src\mock\db.json --p 3006 --id idFornecedor