import { registerEnumType } from '@nestjs/graphql';

export enum DonationScalarFieldEnum {
    id = "id",
    count = "count",
    displayName = "displayName",
    email = "email",
    createdAt = "createdAt",
    mobile = "mobile",
    team = "team",
    message = "message"
}


registerEnumType(DonationScalarFieldEnum, { name: 'DonationScalarFieldEnum', description: undefined })
