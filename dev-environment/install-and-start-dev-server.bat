@echo OFF
call delete-libs.bat
call clone-source-to-environment.bat
call install-libs.bat
call run-dev-server.bat