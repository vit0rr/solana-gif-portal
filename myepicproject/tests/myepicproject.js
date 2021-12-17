const anchor = require('@project-serum/anchor');

const main = async() => {
  console.log("🚀 Starting test...")

  anchor.setProvider(anchor.Provider.env());
  const program = anchor.workspace.Myepicproject;
  const tx = await program.rpc.initialize(); // compila automaticamente nosso código lib.rs e implementa (essa é a funcao initialize la do lib.rs)

  console.log("📝 Your transaction signature", tx);
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