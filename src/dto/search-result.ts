import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Directive('@key(fields: "id")')
export class SearchResult {
    @Field((type) => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    image: string;

    @Field()
    source: string;
}