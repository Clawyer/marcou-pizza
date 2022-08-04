import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Transform } from "class-transformer";
// import { PaimentDTO } from "../dto/paiment.dto";
export type PaimentDocument = Paiment & Document;

@Schema()
export class Paiment extends Document {
  @Transform(({ value }) => value.tostring())
  _id: string;

  @Prop()
  //   ticketclient: PaimentDTO["ticketclient"];
  @Prop()
  //   ticketcommercant: PaimentDTO["ticketcommercant"];
  @Prop()
  date: string;

  @Prop()
  num: string;
}

export const PaimentSchema = SchemaFactory.createForClass(Paiment);
