// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { actorId } from './Actor';
import type { ActorId } from './Actor';
import { filmId } from './Film';
import type { FilmId } from './Film';
import { z } from 'zod';

/** Represents the table public.film_actor */
export default interface FilmActor {
  /** Database type: pg_catalog.int2 */
  actor_id: ActorId;

  /** Database type: pg_catalog.int2 */
  film_id: FilmId;

  /** Database type: pg_catalog.timestamp */
  last_update: Date;
}

/** Represents the initializer for the table public.film_actor */
export interface FilmActorInitializer {
  /** Database type: pg_catalog.int2 */
  actor_id: ActorId;

  /** Database type: pg_catalog.int2 */
  film_id: FilmId;

  /**
   * Database type: pg_catalog.timestamp
   * Default value: now()
   */
  last_update?: Date;
}

/** Represents the mutator for the table public.film_actor */
export interface FilmActorMutator {
  /** Database type: pg_catalog.int2 */
  actor_id?: ActorId;

  /** Database type: pg_catalog.int2 */
  film_id?: FilmId;

  /** Database type: pg_catalog.timestamp */
  last_update?: Date;
}

export const filmActor: z.Schema<FilmActor> = z.object({
  actor_id: actorId,
  film_id: filmId,
  last_update: z.date(),
}) as any;

export const filmActorInitializer: z.Schema<FilmActorInitializer> = z.object({
  actor_id: actorId,
  film_id: filmId,
  last_update: z.date().optional(),
}) as any;

export const filmActorMutator: z.Schema<FilmActorMutator> = z.object({
  actor_id: actorId.optional(),
  film_id: filmId.optional(),
  last_update: z.date().optional(),
}) as any;
