/**
 * PNGMap.js
 * @author jonas
 */

function PNGMap(){}

/*
 * hitTest
 * @param Object map : A pregenerated map of non transprent pixels
 * @param uint x
 * @param uint y
 */
PNGMap.hitTest = function(map, x, y){
    var b = false;
    if(map[y] != null)
    {
        var n = map[y].length;
        for(var i = 0; i<n; i++){
            if(x > map[y][i][0] && x < map[y][i][1])
                b = true;
        }
    }
    return b;
}

