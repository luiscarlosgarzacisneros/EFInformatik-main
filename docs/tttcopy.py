import copy

board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
]
#
minimaxc = 0
d = 9
nextmoves = []
scores = []
move = []
#


def player():
    try:
        x = int(input('x: ')) - 1
        y = int(input('y: ')) - 1
        if board[y][x] == ' ':
            board[y][x] = 'X'
        else:
            print('FELD BESETZT')
            player()
    except:
        print('EINGABE NICHT KORREKT')
        player()


def printboard():
    print('  1   2   3')
    print('-------------')
    for i in range(3):
        print('I ', end='')
        for j in range(3):
            print(board[i][j], end='')
            print(' I ', end='')
        print(i + 1)
        print('-------------')


def gewonnen(board, xoro):
    # horizontal
    if board[0][0] == xoro and board[0][1] == xoro and board[0][2] == xoro:
        return True
    elif board[1][0] == xoro and board[1][1] == xoro and board[1][2] == xoro:
        return True
    elif board[2][0] == xoro and board[2][1] == xoro and board[2][2] == xoro:
        return True
    # vertikal
    elif board[0][0] == xoro and board[1][0] == xoro and board[2][0] == xoro:
        return True
    elif board[0][1] == xoro and board[1][1] == xoro and board[2][1] == xoro:
        return True
    elif board[0][2] == xoro and board[1][2] == xoro and board[2][2] == xoro:
        return True
    # diagonal
    elif board[0][0] == xoro and board[1][1] == xoro and board[2][2] == xoro:
        return True
    elif board[0][2] == xoro and board[1][1] == xoro and board[2][0] == xoro:
        return True
    else:
        return False


def genchildren(position, playerk):
    children = []
    boardcopy = copy.deepcopy(position)
    y = 0
    for i in range(3):
        x = 0
        for j in range(3):
            if boardcopy[x][y] == ' ':
                boardcopy[x][y] = str(playerk)
                children.append(boardcopy)
                boardcopy = copy.deepcopy(position)
            x = x + 1
        y = y + 1
    #
    global minimaxc
    minimaxc = minimaxc + 1
    #
    return children


def minimax(position, depth, maxplayer):
    # X:maxplayer,spieler O:minplayer,computer
    # Spieler
    if maxplayer:
        playerj = 'X'
    else:
        playerj = 'O'

    # return
    if gewonnen(position, 'O') == True:
        return -1
    elif gewonnen(position, 'X') == True:
        return 1
    elif depth == d:
        return 0
    elif genchildren(position, playerj) == []:
        return 0

    #
    if maxplayer:
        maxvalue = -10
        for child in genchildren(position, playerj):
            value = minimax(child, depth + 1, False)
            if value > maxvalue:
                maxvalue = value
        return maxvalue
    #
    if not maxplayer:
        minvalue = 10
        for child in genchildren(position, playerj):
            value = minimax(child, depth + 1, True)
            if value < minvalue:
                minvalue = value
        return minvalue


def minimaxer(boa):
    global minimaxc
    minimaxc = 0
    nextmoves.clear()
    scores.clear()
    move.clear()
    for firstgenchild in genchildren(boa, 'O'):
        nextmoves.append(copy.deepcopy(firstgenchild))
        scores.append(minimax(firstgenchild, 1, True))
    #
    move.extend(copy.deepcopy(nextmoves[scores.index(min(scores))]))


def gameover(boar):
    isover = True
    for q in range(3):
        if boar[q].count(' ') > 0:
            isover = False
    return isover


def play():
    while not gameover(board) and not gewonnen(board, 'O') and not gewonnen(board, 'X'):
        printboard()
        player()
        if not gameover(board) and not gewonnen(board, 'O') and not gewonnen(board, 'X'):
            minimaxer(board)
            board.clear()
            board.extend(copy.deepcopy(move))
            print(minimaxc)
    printboard()
    print('GAME OVER')
    if gewonnen(board, 'O'):
        print(':( VERLOREN')
    elif gewonnen(board, 'X'):
        print(':) GEWONNEN')
    else:
        print(':l UNENTSCHIEDEN')


play()
