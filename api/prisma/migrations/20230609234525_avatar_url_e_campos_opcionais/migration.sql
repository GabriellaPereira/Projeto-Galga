-- AlterTable
ALTER TABLE `User` ADD COLUMN `avatar_url` VARCHAR(191) NULL,
    MODIFY `nomeUsuario` VARCHAR(191) NULL,
    MODIFY `cidade` VARCHAR(191) NULL,
    MODIFY `estado` VARCHAR(191) NULL,
    MODIFY `cep` VARCHAR(191) NULL,
    MODIFY `profissao` VARCHAR(191) NULL;
