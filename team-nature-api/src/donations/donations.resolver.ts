import { Resolver, Query, Args } from '@nestjs/graphql';
import { DonationsService } from './donations.service';

@Resolver('Donation')
export class DonationsResolver {
  constructor(private readonly donationsService: DonationsService) {}

  @Query('donations')
  findAll() {
    return this.donationsService.findAll();
  }

  @Query('donation')
  findOne(@Args('id') id: number) {
    return this.donationsService.findOne(id);
  }
}
