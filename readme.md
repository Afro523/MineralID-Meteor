********PERSONAL SETUP NOTES**************

to use jarsigner
"C:\Program Files\Java\jdk1.8.0_05\bin\jarsigner.exe" -verbose -sigalg SHA1withRSA -tsa http://tsa.safecreative.org -digestalg SHA1 C:\Users\JewFro\Documents\Apps\build\android\release-unsigned.apk com.meteor.josh.mineral

to zipalign
C:/Users/JewFro/AppData/Local/Android/Sdk/build-tools/25.0.2/zipalign 4 C:\Users\JewFro\Documents\Apps\build\android\release-unsigned.apk C:\Users\JewFro\Documents\Apps\build\android\com.meteor.josh.mineral.apk

importing db
mongoimport -h localhost:3001 --db meteor --collection minerals --type json --file baseDb.json --jsonArray
