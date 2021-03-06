import { Player } from "game-idl";

export default interface PlayerRepository {

    findAll(): Player[];

    findOne(uuid: string): Player;

    update(uuid: string, playerUpdater: (p1: Player) => Player): Player;

    save(uuid: string, playerSupplier: () => Player): Player;

    delete(uuid: string): Player;
}
