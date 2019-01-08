export interface IGameChatHeader {
    title: string,
}

export interface IGamePlayerProps {
    creator: {name: string, piece: string},
    opponent: {name: string, piece: string},
}

export interface IGameProps {
    game: {time: number, bonusTime: number, active: boolean}
}