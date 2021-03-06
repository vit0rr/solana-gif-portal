const anchor = require('@project-serum/anchor');
const { SystemProgram } = require('@solana/web3.js');

const main = async() => {
  console.log("๐ Starting test...")

  const provider = anchor.Provider.env()
  anchor.setProvider(anchor.Provider.env());
  const program = anchor.workspace.Myepicproject;

  const baseAccount = anchor.web3.Keypair.generate()

  let tx = await program.rpc.initialize({
    accounts: {
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
    },
    signers: [baseAccount],
  })

  console.log("๐ Your transaction signature", tx);

  let account = await program.account.baseAccount.fetch(baseAccount.publicKey)
  console.log('๐ GIF Count', account.totalGifs.toString())
 /*  const tx = await program.rpc.initialize(); */ // compila automaticamente nosso cรณdigo lib.rs e implementa (essa รฉ a funcao initialize la do lib.rs)

 await program.rpc.addGif("insert_a_giphy_link_here",{
   accounts: {
     baseAccount: baseAccount.publicKey,
     user: provider.wallet.publicKey,
   }
 })

 account = await program.account.baseAccount.fetch(baseAccount.publicKey)
 console.log('๐ GIF Count', account.totalGifs.toString())

 console.log('๐ GIF List', account.gifList)
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();