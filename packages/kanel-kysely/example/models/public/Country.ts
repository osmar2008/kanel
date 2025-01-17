// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { ColumnType, Selectable, Insertable, Updateable } from 'kysely';

export type CountryId = number;

/** Represents the table public.country */
export default interface CountryTable {
  country_id: ColumnType<CountryId, CountryId | null, CountryId | null>;

  country: ColumnType<string, string, string | null>;

  last_update: ColumnType<Date, Date | string | null, Date | string | null>;
}

export type Country = Selectable<CountryTable>;

export type NewCountry = Insertable<CountryTable>;

export type CountryUpdate = Updateable<CountryTable>;
