"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[772],{2358:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var l=a(7462),i=(a(7294),a(3905));const t={},s="Log Buch",r={permalink:"/EFInformatik/2022/08/16/blog",editUrl:"https://github.com/luiscarlosgarzacisneros/EFInformatik/tree/main/blog/2022-08-16-blog.md",source:"@site/blog/2022-08-16-blog.md",title:"Log Buch",description:"26. Aug.",date:"2022-08-16T00:00:00.000Z",formattedDate:"16. August 2022",tags:[],readingTime:3.535,hasTruncateMarker:!1,authors:[],frontMatter:{}},p={authorsImageUrls:[]},d=[],h={toc:d};function g(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,l.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ol",{start:26},(0,i.kt)("li",{parentName:"ol"},"Aug.\npython repetition gemacht. Habe ein paar Sachen \xfcbersprungen, bin bis zum Pythagoras-Baum gekommen.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"sept. 2022\nalle listen-aufgaben gemacht. ")),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"sept.\nListen gemacht")),(0,i.kt)("ol",{start:16},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"sept.\nspielfeld gemacht")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"okt.\nhangman angefangen, topdown modell angeschaut"))),(0,i.kt)("p",null,"28.okt\nhangman, aufgaben funktionen * viereck, selbsttest"),(0,i.kt)("ol",{start:25},(0,i.kt)("li",{parentName:"ol"},"Nov. 2022")),(0,i.kt)("p",null,"Ich habe am Numtrip weitergearbeitet. Jetzt kann der spieler Felder l\xf6schen und der Input wird \xfcberpr\xfcft, so dass das Programm nicht crasht, falls er Falsch ist. Dieser Prozess wird auch unendlich lange wiederholt."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"def feldl\xf6schen():\n    zeile = input('zeile: ')\n    spalte = input('spalte: ')\n#Welches Feld soll gel\xf6scht werden?\n    eingabe_zeile = True\n    eingabe_spalte = True\n#Variabel ist True falls input korrekt ist\n\n    if not zeile.isnumeric():\n        eingabe_zeile = False\n    if not spalte.isnumeric():\n        eingabe_spalte = False\n#wenn eingabe keine ganze zahl ist - falsch\n    if zeile.isnumeric():\n        zeile = int(zeile)\n\n        if zeile < 0:\n            eingabe_zeile = False\n        if zeile > 5:\n            eingabe_zeile = False\n\n    if spalte.isnumeric():\n        spalte = int(spalte)\n\n        if spalte < 0:\n            eingabe_spalte = False\n        if spalte > 5:\n            eingabe_spalte = False\n#zahl muss zwischen 1 und 5 sein\n\n    if eingabe_zeile and eingabe_spalte == True:\n        board[zeile - 1][spalte - 1] = ' '\n#wenn eingabe richtig ist - feld l\xf6schen\n    else:\n        print('Fehlerhafte Eingabe')\n# wenn eingabe falsch - mitteilen\n\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Dez. 2022")),(0,i.kt)("p",null,"Ich habe das Darstellen von einem Feld vereinfacht:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"print('I', end='')\nfor g in range(6 - int(len(str(board[zeile][spalte])))):\n    print(' ', end='')\n# feld ist 6 zeichen lang. 6 - stellen zahl = anzahl leerzeichen.\nprint(board[zeile][spalte], end='')\n")),(0,i.kt)("p",null,"und habe das Programm ge\xe4ndert, so dass der Spieler bei einer falschen eingabe eine genaue R\xfcckmeldung bekommt, indem ich eine Variabel 'fehler' brauche. Diese wird je nachdem was der Fehler war ge\xe4ndert und am Schluss geprintet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"def feldl\xf6schen():\n    zeile = input('zeile: ')\n    spalte = input('spalte: ')\n\n    eingabe_zeile = True\n    eingabe_spalte = True\n\n    if not zeile.isnumeric():\n        eingabe_zeile = False\n        fehler = 'eingabe muss eine zahl sein'\n    if not spalte.isnumeric():\n        eingabe_spalte = False\n        fehler = 'eingabe muss eine (ganze) zahl sein'\n\n    if zeile.isnumeric():\n        zeile = int(zeile)\n\n        if zeile < 1:\n            eingabe_zeile = False\n            fehler = 'zahl muss gr\xf6sser als 1 sein'\n        if zeile > 5:\n            eingabe_zeile = False\n            fehler = 'zahl muss kleiner als 5 sein'\n\n    if spalte.isnumeric():\n        spalte = int(spalte)\n\n        if spalte < 1:\n            eingabe_spalte = False\n            fehler = 'zahl muss gr\xf6sser als 1 sein'\n        if spalte > 5:\n            eingabe_spalte = False\n            fehler = 'zahl muss kleiner als 5 sein'\n\n    if eingabe_zeile and eingabe_spalte == True:\n        board[zeile - 1][spalte - 1] = ' '\n    else:\n        print('Fehlerhafte Eingabe')\n        print(fehler)\n# fehler: sagt was der Spieler falsch gemacht hat\n")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Dez 2022\nNachbarnzellen der gleichen Zahl werden jetzt auch gel\xf6scht.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"}," if eingabe_zeile and eingabe_spalte == True:\n        ausgew\xe4hltezahl = board[zeile - 1][spalte - 1]\n        board[zeile - 1][spalte - 1] = ' '\n        #erstes Feld wird gel\xf6scht(das ausgew\xe4hlte Feld)\n\n        spalte = 1\n        zeile = 1\n        for i in range(8):\n            for i in range(5):\n                for i in range(5):\n                    #alle felder im spiel werden \xfcberpr\xfcft, ob sie ' ' haben\n\n                    if board[zeile - 1][spalte - 1] == ' ':\n                        #wenn ein feld ' ' hat, werden die Nachbarsfelder \xfcberpr\xfcft, ob sie die ausgew\xe4hlte Zahl haben.\n                        feld1 = 0\n                        feld2 = 0\n                        feld3 = 0\n                        feld4 = 0\n\n                        if zeile < 4.1:\n                            feld1 = board[zeile][spalte - 1]\n                        if zeile - 2 > -1:\n                            feld2 = board[zeile - 2][spalte - 1]\n                        if spalte < 4.1:\n                            feld3 = board[zeile - 1][spalte]\n                        if spalte - 2 > -1:\n                            feld4 = board[zeile - 1][spalte - 2]\n                        #zeile und spalte d\xfcrfen m\xfcssen 0-4 sein. Wenn sie das nicht sind bleiben sie 0 (ein Feld kann nie 0 enthalten, es scheidet aus). \n\n                        if feld1 == ausgew\xe4hltezahl:\n                            board[zeile][spalte - 1] = ' '\n                        if feld2 == ausgew\xe4hltezahl:\n                            board[zeile - 2][spalte - 1] = ' '\n                        if feld3 == ausgew\xe4hltezahl:\n                            board[zeile - 1][spalte] = ' '\n                        if feld4 == ausgew\xe4hltezahl:\n                            board[zeile - 1][spalte - 2] = ' '\n                        #Wenn 0-4 wird \xfcberpr\xfcft, ob das Feld die ausgew\xe4hlte Zahl enth\xe4lt. Wenn ja: =' '\n                        \n\n\n                        #alle felder im spiel werden \xfcberpr\xfcft, ob sie ' ' haben (Koordinte wird immer um 1 ge\xe4ndert)\n                    spalte = spalte + 1\n                spalte = 1\n                zeile = zeile + 1\n            zeile = 1\n        #alles wird wiederholt, damit man sehen kann, ob die neuen ' ' Felder eine Nachbarzelle mit der ausgew\xe4hlten Zahl haben.\n")))}g.isMDXComponent=!0}}]);