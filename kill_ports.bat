@echo off
echo Killing processes on ports 3000-3003...

FOR %%p IN (3000,3001,3002,3003) DO (
    FOR /F "tokens=5" %%a IN ('netstat -ano ^| findstr /r "%%p"') DO (
        echo Killing process with PID: %%a on port %%p
        taskkill /F /PID %%a 2>nul
    )
)

echo Done!
pause
