import React, { createContext } from "react";


const intialTransaction = [
    {Amount:500,desc:"book"},
    {Amount:-40,desc:"Cheque"},
    {Amount:-300,desc:"Entertainment"},
]
export const transactionContext = createContext(intialTransaction)