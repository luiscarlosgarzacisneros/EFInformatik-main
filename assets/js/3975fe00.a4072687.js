"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[772],{2358:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var l=a(7462),t=(a(7294),a(3905));const i={},s="Log Buch",r={permalink:"/EFInformatik/2022/08/16/blog",editUrl:"https://github.com/luiscarlosgarzacisneros/EFInformatik/tree/main/blog/2022-08-16-blog.md",source:"@site/blog/2022-08-16-blog.md",title:"Log Buch",description:"26. Aug.",date:"2022-08-16T00:00:00.000Z",formattedDate:"16. August 2022",tags:[],readingTime:2.995,hasTruncateMarker:!1,authors:[],frontMatter:{}},p={authorsImageUrls:[]},o=[],g={toc:o};function u(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,l.Z)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("ol",{start:26},(0,t.kt)("li",{parentName:"ol"},"Aug.\npython repetition gemacht. Habe ein paar Sachen \xfcbersprungen, bin bis zum Pythagoras-Baum gekommen.")),(0,t.kt)("ol",{start:2},(0,t.kt)("li",{parentName:"ol"},"sept. 2022\nalle listen-aufgaben gemacht. ")),(0,t.kt)("ol",{start:8},(0,t.kt)("li",{parentName:"ol"},"sept.\nListen gemacht")),(0,t.kt)("ol",{start:16},(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"sept.\nspielfeld gemacht")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"okt.\nhangman angefangen, topdown modell angeschaut"))),(0,t.kt)("p",null,"28.okt\nhangman, aufgaben funktionen * viereck, selbsttest"),(0,t.kt)("ol",{start:25},(0,t.kt)("li",{parentName:"ol"},"Nov. 2022")),(0,t.kt)("p",null,"Ich habe am Numtrip weitergearbeitet. Jetzt kann der spieler Felder l\xf6schen und der Input wird \xfcberpr\xfcft, so dass das Programm nicht crasht, falls er Falsch ist. Dieser Prozess wird auch unendlich lange wiederholt."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-py"},"def feldl\xf6schen():\n    zeile = input('zeile: ')\n    spalte = input('spalte: ')\n#Welches Feld soll gel\xf6scht werden?\n    eingabe_zeile = True\n    eingabe_spalte = True\n#Variabel ist True falls input korrekt ist\n\n    if not zeile.isnumeric():\n        eingabe_zeile = False\n    if not spalte.isnumeric():\n        eingabe_spalte = False\n#wenn eingabe keine ganze zahl ist - falsch\n    if zeile.isnumeric():\n        zeile = int(zeile)\n\n        if zeile < 0:\n            eingabe_zeile = False\n        if zeile > 5:\n            eingabe_zeile = False\n\n    if spalte.isnumeric():\n        spalte = int(spalte)\n\n        if spalte < 0:\n            eingabe_spalte = False\n        if spalte > 5:\n            eingabe_spalte = False\n#zahl muss zwischen 1 und 5 sein\n\n    if eingabe_zeile and eingabe_spalte == True:\n        board[zeile - 1][spalte - 1] = ' '\n#wenn eingabe richtig ist - feld l\xf6schen\n    else:\n        print('Fehlerhafte Eingabe')\n# wenn eingabe falsch - mitteilen\n\n")),(0,t.kt)("ol",{start:2},(0,t.kt)("li",{parentName:"ol"},"Dez. 2022")),(0,t.kt)("p",null,"Ich habe das Darstellen von einem Feld vereinfacht:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-py"},"print('I', end='')\nfor g in range(6 - int(len(str(board[zeile][spalte])))):\n    print(' ', end='')\n# feld ist 6 zeichen lang. 6 - stellen zahl = anzahl leerzeichen.\nprint(board[zeile][spalte], end='')\n")),(0,t.kt)("p",null,"und habe das Programm ge\xe4ndert, so dass der Spieler bei einer falschen eingabe eine genaue R\xfcckmeldung bekommt, indem ich eine Variabel 'fehler' brauche. Diese wird je nachdem was der Fehler war ge\xe4ndert und am Schluss geprintet."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-py"},"def feldl\xf6schen():\n    zeile = input('zeile: ')\n    spalte = input('spalte: ')\n\n    eingabe_zeile = True\n    eingabe_spalte = True\n\n    if not zeile.isnumeric():\n        eingabe_zeile = False\n        fehler = 'eingabe muss eine zahl sein'\n    if not spalte.isnumeric():\n        eingabe_spalte = False\n        fehler = 'eingabe muss eine (ganze) zahl sein'\n\n    if zeile.isnumeric():\n        zeile = int(zeile)\n\n        if zeile < 1:\n            eingabe_zeile = False\n            fehler = 'zahl muss gr\xf6sser als 1 sein'\n        if zeile > 5:\n            eingabe_zeile = False\n            fehler = 'zahl muss kleiner als 5 sein'\n\n    if spalte.isnumeric():\n        spalte = int(spalte)\n\n        if spalte < 1:\n            eingabe_spalte = False\n            fehler = 'zahl muss gr\xf6sser als 1 sein'\n        if spalte > 5:\n            eingabe_spalte = False\n            fehler = 'zahl muss kleiner als 5 sein'\n\n    if eingabe_zeile and eingabe_spalte == True:\n        board[zeile - 1][spalte - 1] = ' '\n    else:\n        print('Fehlerhafte Eingabe')\n        print(fehler)\n# fehler: sagt was der Spieler falsch gemacht hat\n")),(0,t.kt)("ol",{start:6},(0,t.kt)("li",{parentName:"ol"},"Dez 2022\nNachbarnzellen der gleichen Zahl werden jetzt auch gel\xf6scht.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-py"},"def gameloop():\n    global spielen\n    verloren = True\n    gewonnen = False\n    y = 0\n    for i in range(4):\n        x = 0\n        for j in range(4):\n            a = board[x][y]\n            if a == 1024:\n                gewonnen = True\n            if x < 5 and x > -1 and y < 5 and y > -1:\n                if int(board[x + 1][y]) == a:\n                    verloren = False\n            if x < 5 and x > -1 and y < 5 and y > -1:\n                if int(board[x - 1][y]) == a:\n                    verloren = False\n            if x < 5 and x > -1 and y < 5 and y > -1:\n                if int(board[x][y + 1]) == a:\n                    verloren = False\n            if x < 5 and x > -1 and y < 5 and y > -1:\n                if int(board[x][y - 1]) == a:\n                    verloren = False\n            x = x + 1\n        y = y + 1\n    if gewonnen == True:\n        print('GEWONNEN!!!')\n        spielen = False\n    if verloren == True:\n        print('GAME OVER')\n        spielen = False\n    else:\n        spielen = True\n")))}u.isMDXComponent=!0}}]);