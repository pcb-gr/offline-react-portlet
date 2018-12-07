@echo OFF
@RD /S /Q src\
xcopy index.js src\
robocopy  %0\..\..\src\main\resources\META-INF\resources\js src\ /E /XC /XN /XO


