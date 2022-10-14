const solve = () => {
    const currPos = findEmpty(board);

    if (currPos === null) {
        return true;
    }
    for (let i = 1; i < size + 1; i++) {
        const currNum = i.toString();
        const isValid = validate(currNum, currPos, board);
        //console.log('currPos ', currPos, 'currNum ',currNum, 'isValid ',isValid);
        if (isValid) {
            const [x,y] = currPos;
            board[x][y] = currNum;

            if(solve()) {
                return true;
            }

            board[x][y] = '-';
        }
    }

    return false;
}