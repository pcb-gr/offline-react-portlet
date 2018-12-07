@echo OFF
echo Deleting node_modules folder
@RD /S /Q "node_modules"
echo Deleting package-lock.json
DEL package-lock.json

