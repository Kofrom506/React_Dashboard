export interface iPokemonList{
    results: iPokemon[]
}

export interface iPokemon{
    name: String;
    url: String;
}

export interface iPokemonDetailList{
    name: String
    abilities: iAbilities

}
export interface iAbilities{
    ability: iAbility
    is_hidden: Boolean
    slot: Int32List

}

export interface iAbility{
    name: String
    url: String
}


export interface iGetList{
    name: String[]
}

export interface DataType {
    isActive: Boolean;
    key: string;
    id: string;
    name: string;
    age: string;
    address: string;
    university: string;
    faculty: string;
  }

  