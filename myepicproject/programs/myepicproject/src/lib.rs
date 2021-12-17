use anchor_lang::prelude::*; // Import de algumas coisas

declare_id!("CJSaikztCUF1bMPhrLP1Q4GtGMNgEZ4ELb5qeVBBcB7s"); // Declara um id

#[program] // Define o programa - isso nos permite chamar no frontend dps
pub mod myepicproject { // pub mod é um modulo e nos permite definir varias funcoes e variaveis
    use super::*;
    pub fn initialize(ctx: Context<StartStuffOff>) -> ProgramResult { 
        // Funcao que recebe o contexto e produz o resultado
        
        base_account.total_gifs = 0; // Inicializa a variavel total_gifs
        Ok(())
    }
}

// Anexa variáveis ao contexto StartStuffOff
#[derive(Accounts)]
pub struct StartStuffOff<'info> {
    #[account(init, payer = user, space = 9000)]
    pub base_account: Account<'info, BaseAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program <'info, System>,
}

// Falar pra Solana o que nós queremos armazenar na conta
#[account]
opub struct BaseAccount {
    pub total_gifs: u64,
}