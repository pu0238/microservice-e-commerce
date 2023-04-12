import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateElectronicsInput {
    // TODO: ADD VALIDATION
    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    category: string;

    @Field()
    price: number;

    @Field()
    image: string;
}