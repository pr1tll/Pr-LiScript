@Echo Off&Setlocal Enabledelayedexpansion
for  %%b in (*.zip ) do (
set /a n=0
echo %%~nb
for /f "delims=" %%i in ('certutil -hashfile %%b MD5') do (
Set /a n+=1
If  !n!==2 Echo {"PbVersion":"0.0.4","ShowFile":[{"fileName":"%%~nb","fileSize":%%~zb,"fileURL":"https://pt-starfile.didistatic.com/static/starfile/node20210908/895f1e95e30aba5dd56d6f2ccf768b57/%%~nb.zip?expire=1626256263&signiture=w5ASHddEXUyP_7HAhjriWy_OfkMkY2Ho_xN3xVfm8hk=","fileMd5":"%%i"}]
"Time":1626169971,"TrackId":26}) >> proto.txt)
pause