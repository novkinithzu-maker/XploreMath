XPLORE MATH - build the Android APK + desktop apps (nothing to install on your computer)

1. Make a free account at github.com and click New repository (name it xplore-math).
2. On the new repository page click "uploading an existing file". Drag in EVERYTHING from this folder
   (www, electron, .github, package.json, capacitor.config.json, .gitignore).
   Tip: if the hidden ".github" folder will not drag in, use Add file > Create new file, type
   .github/workflows/build.yml as the name and paste in the contents of that file.
3. Click Commit changes. Open the "Actions" tab: "Build Xplore Math" starts by itself (about 5-10 minutes).
4. When it turns green, open the run and scroll down to "Artifacts":
     XploreMath-Android-APK             -> app-debug.apk (copy to the phone, tap it, allow "install unknown apps")
     XploreMath-Desktop-windows-latest  -> Setup .exe
     XploreMath-Desktop-macos-latest    -> .dmg
     XploreMath-Desktop-ubuntu-latest   -> .AppImage
To update the game later: replace www/index.html in the repository and commit; everything rebuilds.
