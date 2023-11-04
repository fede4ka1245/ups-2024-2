import {Field, ID, ObjectType, InputType} from "type-graphql";

@ObjectType()
@InputType("GymInput")
export class Gym {
  @Field(type => ID)
  id: string;

  @Field(type => String)
  branchName?: string;

  @Field(type => String)
  adminName?: string;

  @Field(type => String)
  adminPhone?: string;

  @Field(type => [Training])
  trainings?: Training[];

  @Field(type => Number)
  freeSlots?: number;
}

@ObjectType()
@InputType("TrainingInput")
export class Training {
  @Field(type => ID)
  id: string;

  @Field(type => String)
  type?: string;

  @Field(type => Number)
  price?: number;

  @Field(type => Gym)
  gym?: Gym;
}

@ObjectType()
@InputType("CustomerInput")
export class Customer {
  @Field(type => ID)
  id: string;

  @Field(type => String)
  name?: string;

  @Field(type => String)
  email?: string;

  @Field(type => [Purchase])
  register?: Purchase[];
}

@ObjectType()
@InputType("PurchaseInput")
export class Purchase {
  @Field(type => ID)
  id: string;

  @Field(type => Training)
  training?: Training;

  @Field(type => Customer)
  customer?: Customer;

  @Field(type => Number)
  price?: number;

  @Field(type => Number)
  branchIncome?: number;
}
