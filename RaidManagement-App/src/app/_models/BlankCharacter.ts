import { CharacterModel } from "../_interfaces/CharacterModel";


export class BlankCharacter implements CharacterModel {
    Name: string;
    Realm: string;
    Region: string;
    FullName: string;
}

const blankChar: CharacterModel = new BlankCharacter();
