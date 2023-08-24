@echo off
cls

cd C:\dev\fleek\basedev

start cmd /k npm run start

start cmd /k json-server src\Mocks\Menu.json --p 3002 