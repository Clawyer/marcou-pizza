import { Document } from "mongoose";
import { IAddress } from "./address.interface";
import { Address } from "@user/schemas/address.schema";

export interface User extends Document {
  readonly email: string;
  readonly avatar: string;
  readonly avatarId: string;
  readonly fullName: string;
  readonly gender: string;
  readonly addresses: [string];
  readonly phone: string;
  password: string;
  readonly roles: [string];
  readonly verification: string;
  readonly verified: boolean;
  readonly verificationExpires: Date;
  readonly loginAttempts?: number;
  readonly blockExpires?: Date;
}
