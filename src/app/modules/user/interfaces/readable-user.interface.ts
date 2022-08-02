import { IAddress } from "./address.interface";

export interface IReadableUser {
  readonly email: string;
  status: string;
  readonly avatar: string;
  readonly avatarId: string;
  readonly lastName: string;
  readonly firstName: string;
  readonly gender: string;
  readonly address: IAddress;
  readonly phone: string;
  readonly roles: string[];
  accessToken?: string;
}