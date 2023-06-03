import { BigNumber } from 'bignumber.js';

export const mechanismCommitment = (price: number, g: BigNumber, h: BigNumber, p: BigNumber): BigNumber[] => {
    const binaryString = price.toString(2);
    const log2H = binaryString.length;
  
    const commitments: BigNumber[] = [];
  
    for (let i = 0; i < log2H; i++) {
      const bit = binaryString.charAt(i);
      const Ri = BigNumber.random(p.toString.length).times(p)
  
      if (bit === '0') {
        commitments.push(g.pow(Ri));
      } else {
        commitments.push(h.pow(Ri));
      }
    }
  
    return commitments;
}


export const hashCommitment = (price: number): BigNumber => {
  
}