if exist 555.txt (for %%b in (*.txt) do if %%b equ battotxt.bat (echo %%b) else (ren %%b *.bat)) else (for %%b in (*.bat) do if %%b equ battotxt.bat (echo %%b) else (ren %%b *.txt))
