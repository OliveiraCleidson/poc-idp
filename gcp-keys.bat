ECHO OFF
cls
set /p rootDir=digite seu rootDir "ex: C: D:"
set /p emailVar=digite seu email:
SETX GCP_KEY_PATH %rootDir%\Users\%username%\AppData\Roaming\gcloud\legacy_credentials\%emailVar%/adc.json /m

echo. Variavel adicionada com sucesso
PAUSE