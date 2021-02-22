import { Request } from 'express';
import { ResultsFilters } from '../models/resultsFilters.model';

export const getFiltersFromRequest = (req: Request): ResultsFilters => {
  const resultsFilters: ResultsFilters = {};
  const { removeAtfsWithNoAvailability } = req.query;
  if (removeAtfsWithNoAvailability === 'true') {
    resultsFilters.removeAtfsWithNoAvailability = removeAtfsWithNoAvailability;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
  const postParamFilters: string[] | string | undefined = req.body?.filters;
  console.log(`Bodydee ${JSON.stringify(req.body)}`);
  if (postParamFilters && postParamFilters.includes('removeNoAvailability')) {
    resultsFilters.removeAtfsWithNoAvailability = 'true';
  }

  return resultsFilters;
};
