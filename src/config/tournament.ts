import { IBlind, IGrade } from "./blind";
import { TicketType } from "./tickets";

export type IHeaderTitle = '상세정보' | '프라이즈' | '블라인드' | '참가자 현황';
export type IPrizeInfo = {
  rank: string | number;
  prize: string;
  point: string | number;
};
export type IBlindInfo = {
  level: string | number;
  blinds: string;
  ante: string | number;
};
export type IProfileInfo = {
  uuid: string;
  nickName: string;
};

export type ITournament = {
  title:string;
  gameStartDate:string;
  gameStartTime:string;
  deadlineDate:string;
  deadlineTime:string;
  place:string;
  entryCondition:boolean;
  buyinTicketType:TicketType;
  buyinTicketCount:number | string;
  detail:string;
  entry: string;
  prize : string;
  blindTime:string;
  blind:IBlind[];
  grades:IGrade[];
}

export type ITournamentLive = {
  players:IProfileInfo[];
  gameState : ITournamentRoomState;
  blindLevel: string | number;
  currentBlind: IBlind;
  nextBlind: IBlind;
}

export type ITournamentRoomState = 'wait' | 'start' | 'break' | 'restart';
export const MAX_TABLE_LIMIT = 11;


export const demo_players = new Array(25).fill(1).map((_,i) => {
  return  {
    uuid:"c121308f-579d-446d-876d-0f652f39ace4",
    nickName:"user"+i
  }
})

export type CreateRoomsDto = {
  roomId: string;
  title:string;
  gameStartDate:string;
  gameStartTime:string;
  deadlineDate:string;
  deadlineTime:string;
  place:string;
  entryCondition:boolean;
  buyinTicketType:TicketType;
  buyinTicketCount:number | string;
  detail:string;
  entry: string;
  prize : string;
  gameState: ITournamentRoomState;
  latestTimer:any;
  blindLevel:number;
  blindTime:string;
  blind:IBlind[];
  grades:IGrade[];
}

export const demo_liveRooms : CreateRoomsDto = {
  roomId: 'room:1234',
  title: 'NFT Holder Main Event',
  gameStartDate: '2023-10-09',
  gameStartTime: '17:39',
  deadlineDate: '2023-10-09',
  deadlineTime: '17:39',
  place: '132',
  entryCondition: true,
  buyinTicketType: 'black',
  buyinTicketCount: '2',
  detail: '스타팅 칩: 30,000 / 리바인: 40,000 /\n애드온: 10,000',
  entry: '12',
  prize: '11,111,111',
  gameState: 'wait',
  latestTimer:null,
  blindLevel:0,
  blindTime: '1',
  blind: [
    {
      SB: '11',
      BB: '11',
      Ante: '11',
    },
    {
      SB: '22',
      BB: '22',
      Ante: '22',
    },
    {
      SB: '33',
      BB: '33',
      Ante: '33',
    },
    {
      SB: '44',
      BB: '44',
      Ante: '44',
    },
    {
      SB: '55',
      BB: '55',
      Ante: '55',
    },
    {
      SB: '66',
      BB: '66',
      Ante: '66',
    },
    {
      SB: '77',
      BB: '77',
      Ante: '77',
    },
    {
      SB: '88',
      BB: '88',
      Ante: '88',
    },
    {
      SB: '99',
      BB: '99',
      Ante: '99',
    },
  ],
  grades: [
    {
      ticket: 'black',
      count: '3',
      point: '20',
    },
    {
      ticket: 'black',
      count: '1',
      point: '10',
    },
    {
      ticket: 'red',
      count: '5',
      point: '5',
    },
  ],
};