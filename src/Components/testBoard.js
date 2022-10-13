import React from "react";
import Knight from "./testKnight";
import Square from "./testSquare";

export default function Board() {
    return(
        <div>
            <Square black>
                <Knight />
            </Square>
        </div>
    )
}