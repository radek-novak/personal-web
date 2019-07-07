const testdata = `
32	/Users/rdkn/.config
128	/Users/rdkn/Music
7384	/Users/rdkn/.node-gyp
1794576	/Users/rdkn/gh
0	/Users/rdkn/.thumbnails
524296	/Users/rdkn/bin
8	/Users/rdkn/Pictures
159480	/Users/rdkn/.nvm
503616	/Users/rdkn/code
19464	/Users/rdkn/Desktop
21285456	/Users/rdkn/Library
79480	/Users/rdkn/Calibre Library
16	/Users/rdkn/Public
120360	/Users/rdkn/.dropbox
13938104	/Users/rdkn/MEGA
104	/Users/rdkn/.ssh
0	/Users/rdkn/Movies
4416	/Users/rdkn/Applications
0	/Users/rdkn/MEGAsync
2680	/Users/rdkn/Dropbox
25758016	/Users/rdkn/.Trash
616	/Users/rdkn/.zoomus
212744	/Users/rdkn/.npm
1384	/Users/rdkn/Documents
488888	/Users/rdkn/.vscode
39472	/Users/rdkn/.oh-my-zsh
33107976	/Users/rdkn/Downloads
16	/Users/rdkn/.cache
1416	/Users/rdkn/.zsh
98050472	/Users/rdkn
`;
const testdata2 = `
8	/Users/radeknovak/.oh-my-zsh/plugins/rbenv
16	/Users/radeknovak/.oh-my-zsh/plugins/fzf
24	/Users/radeknovak/.oh-my-zsh/plugins/zeus
72	/Users/radeknovak/.oh-my-zsh/plugins/git
16	/Users/radeknovak/.oh-my-zsh/plugins/cabal
16	/Users/radeknovak/.oh-my-zsh/plugins/svcat
8	/Users/radeknovak/.oh-my-zsh/plugins/fasd
16	/Users/radeknovak/.oh-my-zsh/plugins/cake
16	/Users/radeknovak/.oh-my-zsh/plugins/sublime
24	/Users/radeknovak/.oh-my-zsh/plugins/laravel
64	/Users/radeknovak/.oh-my-zsh/plugins/swiftpm
16	/Users/radeknovak/.oh-my-zsh/plugins/gitignore
40	/Users/radeknovak/.oh-my-zsh/plugins/git-extras
8	/Users/radeknovak/.oh-my-zsh/plugins/lein
16	/Users/radeknovak/.oh-my-zsh/plugins/marked2
32	/Users/radeknovak/.oh-my-zsh/plugins/supervisor
40	/Users/radeknovak/.oh-my-zsh/plugins/vault
16	/Users/radeknovak/.oh-my-zsh/plugins/bgnotify
16	/Users/radeknovak/.oh-my-zsh/plugins/spring
16	/Users/radeknovak/.oh-my-zsh/plugins/knife
16	/Users/radeknovak/.oh-my-zsh/plugins/nyan
16	/Users/radeknovak/.oh-my-zsh/plugins/jake-node
32	/Users/radeknovak/.oh-my-zsh/plugins/taskwarrior
32	/Users/radeknovak/.oh-my-zsh/plugins/rails
16	/Users/radeknovak/.oh-my-zsh/plugins/laravel5
24	/Users/radeknovak/.oh-my-zsh/plugins/gem
8	/Users/radeknovak/.oh-my-zsh/plugins/terminitor
7024	/Users/radeknovak/.oh-my-zsh/plugins
24	/Users/radeknovak/.oh-my-zsh/.github/ISSUE_TEMPLATE
32	/Users/radeknovak/.oh-my-zsh/.github
176	/Users/radeknovak/.oh-my-zsh/lib
8	/Users/radeknovak/.oh-my-zsh/templates
0	/Users/radeknovak/.oh-my-zsh/log
8	/Users/radeknovak/.oh-my-zsh/.git/objects/9e
8	/Users/radeknovak/.oh-my-zsh/.git/objects/5f
8	/Users/radeknovak/.oh-my-zsh/.git/objects/b2
8	/Users/radeknovak/.oh-my-zsh/.git/objects/bb
8	/Users/radeknovak/.oh-my-zsh/.git/objects/c7
8	/Users/radeknovak/.oh-my-zsh/.git/objects/fc
16	/Users/radeknovak/.oh-my-zsh/.git/objects/f5
12392	/Users/radeknovak/.oh-my-zsh/.git/objects/pack
8	/Users/radeknovak/.oh-my-zsh/.git/objects/74
8	/Users/radeknovak/.oh-my-zsh/.git/objects/7b
8	/Users/radeknovak/.oh-my-zsh/.git/objects/19
16	/Users/radeknovak/.oh-my-zsh/.git/objects/43
0	/Users/radeknovak/.oh-my-zsh/.git/objects/info
8	/Users/radeknovak/.oh-my-zsh/.git/objects/0a
8	/Users/radeknovak/.oh-my-zsh/.git/objects/ea
8	/Users/radeknovak/.oh-my-zsh/.git/objects/ce
16	/Users/radeknovak/.oh-my-zsh/.git/objects/1b
8	/Users/radeknovak/.oh-my-zsh/.git/objects/4a
8	/Users/radeknovak/.oh-my-zsh/.git/objects/47
16	/Users/radeknovak/.oh-my-zsh/.git/objects/78
12568	/Users/radeknovak/.oh-my-zsh/.git/objects
8	/Users/radeknovak/.oh-my-zsh/.git/info
8	/Users/radeknovak/.oh-my-zsh/.git/logs/refs/heads
16	/Users/radeknovak/.oh-my-zsh/.git/logs/refs/remotes/origin
16	/Users/radeknovak/.oh-my-zsh/.git/logs/refs/remotes
24	/Users/radeknovak/.oh-my-zsh/.git/logs/refs
32	/Users/radeknovak/.oh-my-zsh/.git/logs
96	/Users/radeknovak/.oh-my-zsh/.git/hooks
8	/Users/radeknovak/.oh-my-zsh/.git/refs/heads
0	/Users/radeknovak/.oh-my-zsh/.git/refs/tags
16	/Users/radeknovak/.oh-my-zsh/.git/refs/remotes/origin
16	/Users/radeknovak/.oh-my-zsh/.git/refs/remotes
24	/Users/radeknovak/.oh-my-zsh/.git/refs
12944	/Users/radeknovak/.oh-my-zsh/.git
8	/Users/radeknovak/.oh-my-zsh/custom/plugins/example
8	/Users/radeknovak/.oh-my-zsh/custom/plugins
8	/Users/radeknovak/.oh-my-zsh/custom/themes
24	/Users/radeknovak/.oh-my-zsh/custom
1144	/Users/radeknovak/.oh-my-zsh/themes
21616	/Users/radeknovak/.oh-my-zsh
510296	/Users/radeknovak/Downloads/Egghead - Practical Advanced Typescript
48	/Users/radeknovak/Downloads/keys
88	/Users/radeknovak/Downloads/LCC Installer.app/Contents/_CodeSignature
288	/Users/radeknovak/Downloads/LCC Installer.app/Contents/MacOS
128	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/de.lproj
576	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/ja.lproj
8	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/US/LogitechHIDDevices.kext/Contents/_CodeSignature
816	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/US/LogitechHIDDevices.kext/Contents/MacOS
856	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/US/LogitechHIDDevices.kext/Contents
856	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/US/LogitechHIDDevices.kext
856	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/US
584	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/English.lproj
136	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/es.lproj
8	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/ISO/LogitechHIDDevices.kext/Contents/_CodeSignature
816	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/ISO/LogitechHIDDevices.kext/Contents/MacOS
856	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/ISO/LogitechHIDDevices.kext/Contents
856	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/ISO/LogitechHIDDevices.kext
856	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/ISO
136	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/it.lproj
56	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Logitech.bundle/Contents/_CodeSignature
8	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Logitech.bundle/Contents/Resources/de.lproj
8	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Logitech.bundle/Contents/Resources/English.lproj
8	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Logitech.bundle/Contents/Resources/es.lproj
8	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Logitech.bundle/Contents/Resources/da.lproj
8	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Logitech.bundle/Contents/Resources/it.lproj
8	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Logitech.bundle/Contents/Resources/sv.lproj
8	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Logitech.bundle/Contents/Resources/no.lproj
8	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Logitech.bundle/Contents/Resources/fr.lproj
8	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Logitech.bundle/Contents/Resources/fi.lproj
8	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Logitech.bundle/Contents/Resources/nl.lproj
8	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Logitech.bundle/Contents/Resources/pt.lproj
224	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Logitech.bundle/Contents/Resources
288	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Logitech.bundle/Contents
288	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Logitech.bundle
8	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/JPN/LogitechHIDDevices.kext/Contents/_CodeSignature
816	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/JPN/LogitechHIDDevices.kext/Contents/MacOS
856	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/JPN/LogitechHIDDevices.kext/Contents
856	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/JPN/LogitechHIDDevices.kext
856	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/JPN
8	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Signed/US/LogitechHIDDevices.kext/Contents/_CodeSignature
816	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Signed/US/LogitechHIDDevices.kext/Contents/MacOS
856	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Signed/US/LogitechHIDDevices.kext/Contents
856	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Signed/US/LogitechHIDDevices.kext
856	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Signed/US
8	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Signed/ISO/LogitechHIDDevices.kext/Contents/_CodeSignature
816	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Signed/ISO/LogitechHIDDevices.kext/Contents/MacOS
856	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Signed/ISO/LogitechHIDDevices.kext/Contents
856	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Signed/ISO/LogitechHIDDevices.kext
856	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Signed/ISO
8	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Signed/JPN/LogitechHIDDevices.kext/Contents/_CodeSignature
816	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Signed/JPN/LogitechHIDDevices.kext/Contents/MacOS
856	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Signed/JPN/LogitechHIDDevices.kext/Contents
856	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Signed/JPN/LogitechHIDDevices.kext
856	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Signed/JPN
8	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Signed/LogitechUnifying.kext/Contents/_CodeSignature
304	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Signed/LogitechUnifying.kext/Contents/MacOS
336	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Signed/LogitechUnifying.kext/Contents
336	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Signed/LogitechUnifying.kext
2904	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/Signed
8	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/LogitechUnifying.kext/Contents/_CodeSignature
304	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/LogitechUnifying.kext/Contents/MacOS
328	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/LogitechUnifying.kext/Contents
328	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/LogitechUnifying.kext
136	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/fr.lproj
136	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/nl.lproj
24	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/KeyboardChooser.app/Contents/_CodeSignature
64	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/KeyboardChooser.app/Contents/MacOS
48	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/KeyboardChooser.app/Contents/Resources/de.lproj
136	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/KeyboardChooser.app/Contents/Resources/English.lproj
48	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/KeyboardChooser.app/Contents/Resources/es.lproj
48	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/KeyboardChooser.app/Contents/Resources/da.lproj
48	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/KeyboardChooser.app/Contents/Resources/it.lproj
48	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/KeyboardChooser.app/Contents/Resources/sv.lproj
48	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/KeyboardChooser.app/Contents/Resources/no.lproj
48	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/KeyboardChooser.app/Contents/Resources/fr.lproj
48	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/KeyboardChooser.app/Contents/Resources/fi.lproj
48	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/KeyboardChooser.app/Contents/Resources/nl.lproj
48	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/KeyboardChooser.app/Contents/Resources/pt.lproj
760	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/KeyboardChooser.app/Contents/Resources
864	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/KeyboardChooser.app/Contents
864	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources/KeyboardChooser.app
40184	/Users/radeknovak/Downloads/LCC Installer.app/Contents/Resources
40576	/Users/radeknovak/Downloads/LCC Installer.app/Contents
40576	/Users/radeknovak/Downloads/LCC Installer.app
10475960	/Users/radeknovak/Downloads/IE11 - Win7
3056	/Users/radeknovak/Downloads/12x16 template
760	/Users/radeknovak/Downloads/Old-Downloads/$RECYCLE.BIN/.prl_rec
760	/Users/radeknovak/Downloads/Old-Downloads/$RECYCLE.BIN
444256	/Users/radeknovak/Downloads/Old-Downloads/#bluetooth
8	/Users/radeknovak/Downloads/Old-Downloads/.thunderbird/Crash Reports
32	/Users/radeknovak/Downloads/Old-Downloads/.thunderbird
32	/Users/radeknovak/Downloads/Old-Downloads/PrintfulAPI-node
1377744	/Users/radeknovak/Downloads/Old-Downloads
12461016	/Users/radeknovak/Downloads
195682528	/Users/radeknovak
195682536	/Users

`;
export { testdata, testdata2 };
