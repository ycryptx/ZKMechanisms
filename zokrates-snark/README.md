# zkSnarks-Proving-hash-preimage
Proving knowledge of a hash preimage without exposing what the actual preimage was. using zokrates toolbox that is based on zkSnarks.

* First we generated hash of a value using zokrates. The value taken in this case is 5.
> check file `hash_calc.zok`
* Then, we compile the program into an arithmetic circuit using the `compile` command.
* Then we created a witness for it.
> After grepping witness will look like this
 ```
~out_0 263561599766550617289250058199814760685
~out_1 65303172752238645975888084098459749904
```

## Then comes the part of proving the knowledge of preimage:
* We will now add the hash value in the main `auction.zok` file.
* Now the other person is ready to compile the program. 
* He will also run the setup phase and export a verifier smart contract.
> Setup will create a `verification.key` and `proving.key`.
> export-verifier will create `verifier.sol`
* We will generate a proof that will satisfy the whole process.

ZoKrates creates a file, proof.json, consisting of the three elliptic curve points that make up the zkSNARKs proof. The verifyTx function in the smart contract deployed by the other peson accepts these three values, along with an array of public inputs.
