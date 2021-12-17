use anchor_lang::prelude::*; // Import de algumas coisas

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS"); // Declara um id

#[program] // Define o programa - isso nos permite chamar no frontend dps
pub mod myepicproject { // pub mod é um modulo e nos permite definir varias funcoes e variaveis
    use super::*;
    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult { 
        // Funcao que recebe o contexto e produz o resultado 
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {} // aqui ele chama a funcao, que dentro dela, executa o Ok(())
