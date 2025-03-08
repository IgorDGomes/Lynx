
interface PokemonBasicData {
    name: string;
    url: string;
}

interface PokemonListData {
    id: string;
    name: string;
    url: string;
}

interface Sprites {
    front_default: string
    back_default: string
}

interface Types {
    slot: number
    type: {
        name: string
        url: string
    }
}

interface PokemonDetailedData {
    abilities: any,
    base_experience: any
    cries: any
    forms: any
    game_indices: any
    height: number
    held_items: any
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: any
    name: string
    order: number
    past_abilities: any
    past_types: any
    species: any
    sprites: Sprites
    stats: any
    types: Types[]
    weight: number
}

interface PokemonImportantInfo {
    name: string
    id: string
    frontImage: string
    backImage: string
    weight: string
    types: Types[]
}

export type { PokemonBasicData, PokemonListData, PokemonDetailedData, PokemonImportantInfo }