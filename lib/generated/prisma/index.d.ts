
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Artist
 * 
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>
/**
 * Model Release
 * 
 */
export type Release = $Result.DefaultSelection<Prisma.$ReleasePayload>
/**
 * Model Piece
 * 
 */
export type Piece = $Result.DefaultSelection<Prisma.$PiecePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Artists
 * const artists = await prisma.artist.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Artists
   * const artists = await prisma.artist.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.release`: Exposes CRUD operations for the **Release** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Releases
    * const releases = await prisma.release.findMany()
    * ```
    */
  get release(): Prisma.ReleaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.piece`: Exposes CRUD operations for the **Piece** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pieces
    * const pieces = await prisma.piece.findMany()
    * ```
    */
  get piece(): Prisma.PieceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Artist: 'Artist',
    Release: 'Release',
    Piece: 'Piece'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "artist" | "release" | "piece"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>
        fields: Prisma.ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
          }
        }
      }
      Release: {
        payload: Prisma.$ReleasePayload<ExtArgs>
        fields: Prisma.ReleaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReleaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReleaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleasePayload>
          }
          findFirst: {
            args: Prisma.ReleaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReleaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleasePayload>
          }
          findMany: {
            args: Prisma.ReleaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleasePayload>[]
          }
          create: {
            args: Prisma.ReleaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleasePayload>
          }
          createMany: {
            args: Prisma.ReleaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReleaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleasePayload>[]
          }
          delete: {
            args: Prisma.ReleaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleasePayload>
          }
          update: {
            args: Prisma.ReleaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleasePayload>
          }
          deleteMany: {
            args: Prisma.ReleaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReleaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReleaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleasePayload>[]
          }
          upsert: {
            args: Prisma.ReleaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleasePayload>
          }
          aggregate: {
            args: Prisma.ReleaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelease>
          }
          groupBy: {
            args: Prisma.ReleaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReleaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReleaseCountArgs<ExtArgs>
            result: $Utils.Optional<ReleaseCountAggregateOutputType> | number
          }
        }
      }
      Piece: {
        payload: Prisma.$PiecePayload<ExtArgs>
        fields: Prisma.PieceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PieceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PieceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>
          }
          findFirst: {
            args: Prisma.PieceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PieceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>
          }
          findMany: {
            args: Prisma.PieceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>[]
          }
          create: {
            args: Prisma.PieceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>
          }
          createMany: {
            args: Prisma.PieceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PieceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>[]
          }
          delete: {
            args: Prisma.PieceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>
          }
          update: {
            args: Prisma.PieceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>
          }
          deleteMany: {
            args: Prisma.PieceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PieceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PieceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>[]
          }
          upsert: {
            args: Prisma.PieceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>
          }
          aggregate: {
            args: Prisma.PieceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePiece>
          }
          groupBy: {
            args: Prisma.PieceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PieceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PieceCountArgs<ExtArgs>
            result: $Utils.Optional<PieceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    artist?: ArtistOmit
    release?: ReleaseOmit
    piece?: PieceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ArtistCountOutputType
   */

  export type ArtistCountOutputType = {
    releases: number
  }

  export type ArtistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    releases?: boolean | ArtistCountOutputTypeCountReleasesArgs
  }

  // Custom InputTypes
  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountReleasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReleaseWhereInput
  }


  /**
   * Count Type ReleaseCountOutputType
   */

  export type ReleaseCountOutputType = {
    pieces: number
  }

  export type ReleaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pieces?: boolean | ReleaseCountOutputTypeCountPiecesArgs
  }

  // Custom InputTypes
  /**
   * ReleaseCountOutputType without action
   */
  export type ReleaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseCountOutputType
     */
    select?: ReleaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReleaseCountOutputType without action
   */
  export type ReleaseCountOutputTypeCountPiecesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PieceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistAvgAggregateOutputType = {
    id: number | null
  }

  export type ArtistSumAggregateOutputType = {
    id: number | null
  }

  export type ArtistMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    email: number
    name: number
    _all: number
  }


  export type ArtistAvgAggregateInputType = {
    id?: true
  }

  export type ArtistSumAggregateInputType = {
    id?: true
  }

  export type ArtistMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithAggregationInput | ArtistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _avg?: ArtistAvgAggregateInputType
    _sum?: ArtistSumAggregateInputType
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    id: number
    email: string
    name: string | null
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    releases?: boolean | Artist$releasesArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
  }

  export type ArtistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name", ExtArgs["result"]["artist"]>
  export type ArtistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    releases?: boolean | Artist$releasesArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArtistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artist"
    objects: {
      releases: Prisma.$ReleasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }

  type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = $Result.GetResult<Prisma.$ArtistPayload, S>

  type ArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artist'], meta: { name: 'Artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistFindUniqueArgs>(args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistFindFirstArgs>(args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistFindManyArgs>(args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
     */
    create<T extends ArtistCreateArgs>(args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artists.
     * @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistCreateManyArgs>(args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artists and returns the data saved in the database.
     * @param {ArtistCreateManyAndReturnArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
     */
    delete<T extends ArtistDeleteArgs>(args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistUpdateArgs>(args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistDeleteManyArgs>(args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistUpdateManyArgs>(args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists and returns the data updated in the database.
     * @param {ArtistUpdateManyAndReturnArgs} args - Arguments to update many Artists.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtistUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
     */
    upsert<T extends ArtistUpsertArgs>(args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artist model
   */
  readonly fields: ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    releases<T extends Artist$releasesArgs<ExtArgs> = {}>(args?: Subset<T, Artist$releasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Artist model
   */
  interface ArtistFieldRefs {
    readonly id: FieldRef<"Artist", 'Int'>
    readonly email: FieldRef<"Artist", 'String'>
    readonly name: FieldRef<"Artist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist create
   */
  export type ArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }

  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist createManyAndReturn
   */
  export type ArtistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist update
   */
  export type ArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist updateManyAndReturn
   */
  export type ArtistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }

  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to delete.
     */
    limit?: number
  }

  /**
   * Artist.releases
   */
  export type Artist$releasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: ReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Release
     */
    omit?: ReleaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseInclude<ExtArgs> | null
    where?: ReleaseWhereInput
    orderBy?: ReleaseOrderByWithRelationInput | ReleaseOrderByWithRelationInput[]
    cursor?: ReleaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReleaseScalarFieldEnum | ReleaseScalarFieldEnum[]
  }

  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
  }


  /**
   * Model Release
   */

  export type AggregateRelease = {
    _count: ReleaseCountAggregateOutputType | null
    _avg: ReleaseAvgAggregateOutputType | null
    _sum: ReleaseSumAggregateOutputType | null
    _min: ReleaseMinAggregateOutputType | null
    _max: ReleaseMaxAggregateOutputType | null
  }

  export type ReleaseAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type ReleaseSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type ReleaseMinAggregateOutputType = {
    id: number | null
    title: string | null
    genre: string | null
    label: boolean | null
    authorId: number | null
  }

  export type ReleaseMaxAggregateOutputType = {
    id: number | null
    title: string | null
    genre: string | null
    label: boolean | null
    authorId: number | null
  }

  export type ReleaseCountAggregateOutputType = {
    id: number
    title: number
    genre: number
    label: number
    authorId: number
    _all: number
  }


  export type ReleaseAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type ReleaseSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type ReleaseMinAggregateInputType = {
    id?: true
    title?: true
    genre?: true
    label?: true
    authorId?: true
  }

  export type ReleaseMaxAggregateInputType = {
    id?: true
    title?: true
    genre?: true
    label?: true
    authorId?: true
  }

  export type ReleaseCountAggregateInputType = {
    id?: true
    title?: true
    genre?: true
    label?: true
    authorId?: true
    _all?: true
  }

  export type ReleaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Release to aggregate.
     */
    where?: ReleaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Releases to fetch.
     */
    orderBy?: ReleaseOrderByWithRelationInput | ReleaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReleaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Releases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Releases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Releases
    **/
    _count?: true | ReleaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReleaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReleaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReleaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReleaseMaxAggregateInputType
  }

  export type GetReleaseAggregateType<T extends ReleaseAggregateArgs> = {
        [P in keyof T & keyof AggregateRelease]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelease[P]>
      : GetScalarType<T[P], AggregateRelease[P]>
  }




  export type ReleaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReleaseWhereInput
    orderBy?: ReleaseOrderByWithAggregationInput | ReleaseOrderByWithAggregationInput[]
    by: ReleaseScalarFieldEnum[] | ReleaseScalarFieldEnum
    having?: ReleaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReleaseCountAggregateInputType | true
    _avg?: ReleaseAvgAggregateInputType
    _sum?: ReleaseSumAggregateInputType
    _min?: ReleaseMinAggregateInputType
    _max?: ReleaseMaxAggregateInputType
  }

  export type ReleaseGroupByOutputType = {
    id: number
    title: string
    genre: string | null
    label: boolean
    authorId: number
    _count: ReleaseCountAggregateOutputType | null
    _avg: ReleaseAvgAggregateOutputType | null
    _sum: ReleaseSumAggregateOutputType | null
    _min: ReleaseMinAggregateOutputType | null
    _max: ReleaseMaxAggregateOutputType | null
  }

  type GetReleaseGroupByPayload<T extends ReleaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReleaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReleaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReleaseGroupByOutputType[P]>
            : GetScalarType<T[P], ReleaseGroupByOutputType[P]>
        }
      >
    >


  export type ReleaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    genre?: boolean
    label?: boolean
    authorId?: boolean
    author?: boolean | ArtistDefaultArgs<ExtArgs>
    pieces?: boolean | Release$piecesArgs<ExtArgs>
    _count?: boolean | ReleaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["release"]>

  export type ReleaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    genre?: boolean
    label?: boolean
    authorId?: boolean
    author?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["release"]>

  export type ReleaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    genre?: boolean
    label?: boolean
    authorId?: boolean
    author?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["release"]>

  export type ReleaseSelectScalar = {
    id?: boolean
    title?: boolean
    genre?: boolean
    label?: boolean
    authorId?: boolean
  }

  export type ReleaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "genre" | "label" | "authorId", ExtArgs["result"]["release"]>
  export type ReleaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ArtistDefaultArgs<ExtArgs>
    pieces?: boolean | Release$piecesArgs<ExtArgs>
    _count?: boolean | ReleaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReleaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ArtistDefaultArgs<ExtArgs>
  }
  export type ReleaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ArtistDefaultArgs<ExtArgs>
  }

  export type $ReleasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Release"
    objects: {
      author: Prisma.$ArtistPayload<ExtArgs>
      pieces: Prisma.$PiecePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      genre: string | null
      label: boolean
      authorId: number
    }, ExtArgs["result"]["release"]>
    composites: {}
  }

  type ReleaseGetPayload<S extends boolean | null | undefined | ReleaseDefaultArgs> = $Result.GetResult<Prisma.$ReleasePayload, S>

  type ReleaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReleaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReleaseCountAggregateInputType | true
    }

  export interface ReleaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Release'], meta: { name: 'Release' } }
    /**
     * Find zero or one Release that matches the filter.
     * @param {ReleaseFindUniqueArgs} args - Arguments to find a Release
     * @example
     * // Get one Release
     * const release = await prisma.release.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReleaseFindUniqueArgs>(args: SelectSubset<T, ReleaseFindUniqueArgs<ExtArgs>>): Prisma__ReleaseClient<$Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Release that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReleaseFindUniqueOrThrowArgs} args - Arguments to find a Release
     * @example
     * // Get one Release
     * const release = await prisma.release.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReleaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ReleaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReleaseClient<$Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Release that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseFindFirstArgs} args - Arguments to find a Release
     * @example
     * // Get one Release
     * const release = await prisma.release.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReleaseFindFirstArgs>(args?: SelectSubset<T, ReleaseFindFirstArgs<ExtArgs>>): Prisma__ReleaseClient<$Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Release that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseFindFirstOrThrowArgs} args - Arguments to find a Release
     * @example
     * // Get one Release
     * const release = await prisma.release.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReleaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ReleaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReleaseClient<$Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Releases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Releases
     * const releases = await prisma.release.findMany()
     * 
     * // Get first 10 Releases
     * const releases = await prisma.release.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const releaseWithIdOnly = await prisma.release.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReleaseFindManyArgs>(args?: SelectSubset<T, ReleaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Release.
     * @param {ReleaseCreateArgs} args - Arguments to create a Release.
     * @example
     * // Create one Release
     * const Release = await prisma.release.create({
     *   data: {
     *     // ... data to create a Release
     *   }
     * })
     * 
     */
    create<T extends ReleaseCreateArgs>(args: SelectSubset<T, ReleaseCreateArgs<ExtArgs>>): Prisma__ReleaseClient<$Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Releases.
     * @param {ReleaseCreateManyArgs} args - Arguments to create many Releases.
     * @example
     * // Create many Releases
     * const release = await prisma.release.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReleaseCreateManyArgs>(args?: SelectSubset<T, ReleaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Releases and returns the data saved in the database.
     * @param {ReleaseCreateManyAndReturnArgs} args - Arguments to create many Releases.
     * @example
     * // Create many Releases
     * const release = await prisma.release.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Releases and only return the `id`
     * const releaseWithIdOnly = await prisma.release.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReleaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ReleaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Release.
     * @param {ReleaseDeleteArgs} args - Arguments to delete one Release.
     * @example
     * // Delete one Release
     * const Release = await prisma.release.delete({
     *   where: {
     *     // ... filter to delete one Release
     *   }
     * })
     * 
     */
    delete<T extends ReleaseDeleteArgs>(args: SelectSubset<T, ReleaseDeleteArgs<ExtArgs>>): Prisma__ReleaseClient<$Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Release.
     * @param {ReleaseUpdateArgs} args - Arguments to update one Release.
     * @example
     * // Update one Release
     * const release = await prisma.release.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReleaseUpdateArgs>(args: SelectSubset<T, ReleaseUpdateArgs<ExtArgs>>): Prisma__ReleaseClient<$Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Releases.
     * @param {ReleaseDeleteManyArgs} args - Arguments to filter Releases to delete.
     * @example
     * // Delete a few Releases
     * const { count } = await prisma.release.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReleaseDeleteManyArgs>(args?: SelectSubset<T, ReleaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Releases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Releases
     * const release = await prisma.release.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReleaseUpdateManyArgs>(args: SelectSubset<T, ReleaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Releases and returns the data updated in the database.
     * @param {ReleaseUpdateManyAndReturnArgs} args - Arguments to update many Releases.
     * @example
     * // Update many Releases
     * const release = await prisma.release.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Releases and only return the `id`
     * const releaseWithIdOnly = await prisma.release.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReleaseUpdateManyAndReturnArgs>(args: SelectSubset<T, ReleaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Release.
     * @param {ReleaseUpsertArgs} args - Arguments to update or create a Release.
     * @example
     * // Update or create a Release
     * const release = await prisma.release.upsert({
     *   create: {
     *     // ... data to create a Release
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Release we want to update
     *   }
     * })
     */
    upsert<T extends ReleaseUpsertArgs>(args: SelectSubset<T, ReleaseUpsertArgs<ExtArgs>>): Prisma__ReleaseClient<$Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Releases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseCountArgs} args - Arguments to filter Releases to count.
     * @example
     * // Count the number of Releases
     * const count = await prisma.release.count({
     *   where: {
     *     // ... the filter for the Releases we want to count
     *   }
     * })
    **/
    count<T extends ReleaseCountArgs>(
      args?: Subset<T, ReleaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReleaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Release.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReleaseAggregateArgs>(args: Subset<T, ReleaseAggregateArgs>): Prisma.PrismaPromise<GetReleaseAggregateType<T>>

    /**
     * Group by Release.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReleaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReleaseGroupByArgs['orderBy'] }
        : { orderBy?: ReleaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReleaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReleaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Release model
   */
  readonly fields: ReleaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Release.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReleaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends ArtistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistDefaultArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pieces<T extends Release$piecesArgs<ExtArgs> = {}>(args?: Subset<T, Release$piecesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Release model
   */
  interface ReleaseFieldRefs {
    readonly id: FieldRef<"Release", 'Int'>
    readonly title: FieldRef<"Release", 'String'>
    readonly genre: FieldRef<"Release", 'String'>
    readonly label: FieldRef<"Release", 'Boolean'>
    readonly authorId: FieldRef<"Release", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Release findUnique
   */
  export type ReleaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: ReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Release
     */
    omit?: ReleaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseInclude<ExtArgs> | null
    /**
     * Filter, which Release to fetch.
     */
    where: ReleaseWhereUniqueInput
  }

  /**
   * Release findUniqueOrThrow
   */
  export type ReleaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: ReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Release
     */
    omit?: ReleaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseInclude<ExtArgs> | null
    /**
     * Filter, which Release to fetch.
     */
    where: ReleaseWhereUniqueInput
  }

  /**
   * Release findFirst
   */
  export type ReleaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: ReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Release
     */
    omit?: ReleaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseInclude<ExtArgs> | null
    /**
     * Filter, which Release to fetch.
     */
    where?: ReleaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Releases to fetch.
     */
    orderBy?: ReleaseOrderByWithRelationInput | ReleaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Releases.
     */
    cursor?: ReleaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Releases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Releases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Releases.
     */
    distinct?: ReleaseScalarFieldEnum | ReleaseScalarFieldEnum[]
  }

  /**
   * Release findFirstOrThrow
   */
  export type ReleaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: ReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Release
     */
    omit?: ReleaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseInclude<ExtArgs> | null
    /**
     * Filter, which Release to fetch.
     */
    where?: ReleaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Releases to fetch.
     */
    orderBy?: ReleaseOrderByWithRelationInput | ReleaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Releases.
     */
    cursor?: ReleaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Releases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Releases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Releases.
     */
    distinct?: ReleaseScalarFieldEnum | ReleaseScalarFieldEnum[]
  }

  /**
   * Release findMany
   */
  export type ReleaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: ReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Release
     */
    omit?: ReleaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseInclude<ExtArgs> | null
    /**
     * Filter, which Releases to fetch.
     */
    where?: ReleaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Releases to fetch.
     */
    orderBy?: ReleaseOrderByWithRelationInput | ReleaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Releases.
     */
    cursor?: ReleaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Releases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Releases.
     */
    skip?: number
    distinct?: ReleaseScalarFieldEnum | ReleaseScalarFieldEnum[]
  }

  /**
   * Release create
   */
  export type ReleaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: ReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Release
     */
    omit?: ReleaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Release.
     */
    data: XOR<ReleaseCreateInput, ReleaseUncheckedCreateInput>
  }

  /**
   * Release createMany
   */
  export type ReleaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Releases.
     */
    data: ReleaseCreateManyInput | ReleaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Release createManyAndReturn
   */
  export type ReleaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: ReleaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Release
     */
    omit?: ReleaseOmit<ExtArgs> | null
    /**
     * The data used to create many Releases.
     */
    data: ReleaseCreateManyInput | ReleaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Release update
   */
  export type ReleaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: ReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Release
     */
    omit?: ReleaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Release.
     */
    data: XOR<ReleaseUpdateInput, ReleaseUncheckedUpdateInput>
    /**
     * Choose, which Release to update.
     */
    where: ReleaseWhereUniqueInput
  }

  /**
   * Release updateMany
   */
  export type ReleaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Releases.
     */
    data: XOR<ReleaseUpdateManyMutationInput, ReleaseUncheckedUpdateManyInput>
    /**
     * Filter which Releases to update
     */
    where?: ReleaseWhereInput
    /**
     * Limit how many Releases to update.
     */
    limit?: number
  }

  /**
   * Release updateManyAndReturn
   */
  export type ReleaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: ReleaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Release
     */
    omit?: ReleaseOmit<ExtArgs> | null
    /**
     * The data used to update Releases.
     */
    data: XOR<ReleaseUpdateManyMutationInput, ReleaseUncheckedUpdateManyInput>
    /**
     * Filter which Releases to update
     */
    where?: ReleaseWhereInput
    /**
     * Limit how many Releases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Release upsert
   */
  export type ReleaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: ReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Release
     */
    omit?: ReleaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Release to update in case it exists.
     */
    where: ReleaseWhereUniqueInput
    /**
     * In case the Release found by the `where` argument doesn't exist, create a new Release with this data.
     */
    create: XOR<ReleaseCreateInput, ReleaseUncheckedCreateInput>
    /**
     * In case the Release was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReleaseUpdateInput, ReleaseUncheckedUpdateInput>
  }

  /**
   * Release delete
   */
  export type ReleaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: ReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Release
     */
    omit?: ReleaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseInclude<ExtArgs> | null
    /**
     * Filter which Release to delete.
     */
    where: ReleaseWhereUniqueInput
  }

  /**
   * Release deleteMany
   */
  export type ReleaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Releases to delete
     */
    where?: ReleaseWhereInput
    /**
     * Limit how many Releases to delete.
     */
    limit?: number
  }

  /**
   * Release.pieces
   */
  export type Release$piecesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
    where?: PieceWhereInput
    orderBy?: PieceOrderByWithRelationInput | PieceOrderByWithRelationInput[]
    cursor?: PieceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PieceScalarFieldEnum | PieceScalarFieldEnum[]
  }

  /**
   * Release without action
   */
  export type ReleaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: ReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Release
     */
    omit?: ReleaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseInclude<ExtArgs> | null
  }


  /**
   * Model Piece
   */

  export type AggregatePiece = {
    _count: PieceCountAggregateOutputType | null
    _avg: PieceAvgAggregateOutputType | null
    _sum: PieceSumAggregateOutputType | null
    _min: PieceMinAggregateOutputType | null
    _max: PieceMaxAggregateOutputType | null
  }

  export type PieceAvgAggregateOutputType = {
    id: number | null
    duration: number | null
    albumId: number | null
  }

  export type PieceSumAggregateOutputType = {
    id: number | null
    duration: number | null
    albumId: number | null
  }

  export type PieceMinAggregateOutputType = {
    id: number | null
    title: string | null
    genre: string | null
    duration: number | null
    albumId: number | null
  }

  export type PieceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    genre: string | null
    duration: number | null
    albumId: number | null
  }

  export type PieceCountAggregateOutputType = {
    id: number
    title: number
    genre: number
    duration: number
    albumId: number
    _all: number
  }


  export type PieceAvgAggregateInputType = {
    id?: true
    duration?: true
    albumId?: true
  }

  export type PieceSumAggregateInputType = {
    id?: true
    duration?: true
    albumId?: true
  }

  export type PieceMinAggregateInputType = {
    id?: true
    title?: true
    genre?: true
    duration?: true
    albumId?: true
  }

  export type PieceMaxAggregateInputType = {
    id?: true
    title?: true
    genre?: true
    duration?: true
    albumId?: true
  }

  export type PieceCountAggregateInputType = {
    id?: true
    title?: true
    genre?: true
    duration?: true
    albumId?: true
    _all?: true
  }

  export type PieceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Piece to aggregate.
     */
    where?: PieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pieces to fetch.
     */
    orderBy?: PieceOrderByWithRelationInput | PieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pieces
    **/
    _count?: true | PieceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PieceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PieceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PieceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PieceMaxAggregateInputType
  }

  export type GetPieceAggregateType<T extends PieceAggregateArgs> = {
        [P in keyof T & keyof AggregatePiece]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePiece[P]>
      : GetScalarType<T[P], AggregatePiece[P]>
  }




  export type PieceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PieceWhereInput
    orderBy?: PieceOrderByWithAggregationInput | PieceOrderByWithAggregationInput[]
    by: PieceScalarFieldEnum[] | PieceScalarFieldEnum
    having?: PieceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PieceCountAggregateInputType | true
    _avg?: PieceAvgAggregateInputType
    _sum?: PieceSumAggregateInputType
    _min?: PieceMinAggregateInputType
    _max?: PieceMaxAggregateInputType
  }

  export type PieceGroupByOutputType = {
    id: number
    title: string
    genre: string | null
    duration: number
    albumId: number
    _count: PieceCountAggregateOutputType | null
    _avg: PieceAvgAggregateOutputType | null
    _sum: PieceSumAggregateOutputType | null
    _min: PieceMinAggregateOutputType | null
    _max: PieceMaxAggregateOutputType | null
  }

  type GetPieceGroupByPayload<T extends PieceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PieceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PieceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PieceGroupByOutputType[P]>
            : GetScalarType<T[P], PieceGroupByOutputType[P]>
        }
      >
    >


  export type PieceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    genre?: boolean
    duration?: boolean
    albumId?: boolean
    album?: boolean | ReleaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["piece"]>

  export type PieceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    genre?: boolean
    duration?: boolean
    albumId?: boolean
    album?: boolean | ReleaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["piece"]>

  export type PieceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    genre?: boolean
    duration?: boolean
    albumId?: boolean
    album?: boolean | ReleaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["piece"]>

  export type PieceSelectScalar = {
    id?: boolean
    title?: boolean
    genre?: boolean
    duration?: boolean
    albumId?: boolean
  }

  export type PieceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "genre" | "duration" | "albumId", ExtArgs["result"]["piece"]>
  export type PieceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | ReleaseDefaultArgs<ExtArgs>
  }
  export type PieceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | ReleaseDefaultArgs<ExtArgs>
  }
  export type PieceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | ReleaseDefaultArgs<ExtArgs>
  }

  export type $PiecePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Piece"
    objects: {
      album: Prisma.$ReleasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      genre: string | null
      duration: number
      albumId: number
    }, ExtArgs["result"]["piece"]>
    composites: {}
  }

  type PieceGetPayload<S extends boolean | null | undefined | PieceDefaultArgs> = $Result.GetResult<Prisma.$PiecePayload, S>

  type PieceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PieceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PieceCountAggregateInputType | true
    }

  export interface PieceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Piece'], meta: { name: 'Piece' } }
    /**
     * Find zero or one Piece that matches the filter.
     * @param {PieceFindUniqueArgs} args - Arguments to find a Piece
     * @example
     * // Get one Piece
     * const piece = await prisma.piece.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PieceFindUniqueArgs>(args: SelectSubset<T, PieceFindUniqueArgs<ExtArgs>>): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Piece that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PieceFindUniqueOrThrowArgs} args - Arguments to find a Piece
     * @example
     * // Get one Piece
     * const piece = await prisma.piece.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PieceFindUniqueOrThrowArgs>(args: SelectSubset<T, PieceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Piece that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceFindFirstArgs} args - Arguments to find a Piece
     * @example
     * // Get one Piece
     * const piece = await prisma.piece.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PieceFindFirstArgs>(args?: SelectSubset<T, PieceFindFirstArgs<ExtArgs>>): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Piece that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceFindFirstOrThrowArgs} args - Arguments to find a Piece
     * @example
     * // Get one Piece
     * const piece = await prisma.piece.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PieceFindFirstOrThrowArgs>(args?: SelectSubset<T, PieceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pieces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pieces
     * const pieces = await prisma.piece.findMany()
     * 
     * // Get first 10 Pieces
     * const pieces = await prisma.piece.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pieceWithIdOnly = await prisma.piece.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PieceFindManyArgs>(args?: SelectSubset<T, PieceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Piece.
     * @param {PieceCreateArgs} args - Arguments to create a Piece.
     * @example
     * // Create one Piece
     * const Piece = await prisma.piece.create({
     *   data: {
     *     // ... data to create a Piece
     *   }
     * })
     * 
     */
    create<T extends PieceCreateArgs>(args: SelectSubset<T, PieceCreateArgs<ExtArgs>>): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pieces.
     * @param {PieceCreateManyArgs} args - Arguments to create many Pieces.
     * @example
     * // Create many Pieces
     * const piece = await prisma.piece.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PieceCreateManyArgs>(args?: SelectSubset<T, PieceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pieces and returns the data saved in the database.
     * @param {PieceCreateManyAndReturnArgs} args - Arguments to create many Pieces.
     * @example
     * // Create many Pieces
     * const piece = await prisma.piece.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pieces and only return the `id`
     * const pieceWithIdOnly = await prisma.piece.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PieceCreateManyAndReturnArgs>(args?: SelectSubset<T, PieceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Piece.
     * @param {PieceDeleteArgs} args - Arguments to delete one Piece.
     * @example
     * // Delete one Piece
     * const Piece = await prisma.piece.delete({
     *   where: {
     *     // ... filter to delete one Piece
     *   }
     * })
     * 
     */
    delete<T extends PieceDeleteArgs>(args: SelectSubset<T, PieceDeleteArgs<ExtArgs>>): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Piece.
     * @param {PieceUpdateArgs} args - Arguments to update one Piece.
     * @example
     * // Update one Piece
     * const piece = await prisma.piece.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PieceUpdateArgs>(args: SelectSubset<T, PieceUpdateArgs<ExtArgs>>): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pieces.
     * @param {PieceDeleteManyArgs} args - Arguments to filter Pieces to delete.
     * @example
     * // Delete a few Pieces
     * const { count } = await prisma.piece.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PieceDeleteManyArgs>(args?: SelectSubset<T, PieceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pieces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pieces
     * const piece = await prisma.piece.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PieceUpdateManyArgs>(args: SelectSubset<T, PieceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pieces and returns the data updated in the database.
     * @param {PieceUpdateManyAndReturnArgs} args - Arguments to update many Pieces.
     * @example
     * // Update many Pieces
     * const piece = await prisma.piece.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pieces and only return the `id`
     * const pieceWithIdOnly = await prisma.piece.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PieceUpdateManyAndReturnArgs>(args: SelectSubset<T, PieceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Piece.
     * @param {PieceUpsertArgs} args - Arguments to update or create a Piece.
     * @example
     * // Update or create a Piece
     * const piece = await prisma.piece.upsert({
     *   create: {
     *     // ... data to create a Piece
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Piece we want to update
     *   }
     * })
     */
    upsert<T extends PieceUpsertArgs>(args: SelectSubset<T, PieceUpsertArgs<ExtArgs>>): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pieces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceCountArgs} args - Arguments to filter Pieces to count.
     * @example
     * // Count the number of Pieces
     * const count = await prisma.piece.count({
     *   where: {
     *     // ... the filter for the Pieces we want to count
     *   }
     * })
    **/
    count<T extends PieceCountArgs>(
      args?: Subset<T, PieceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PieceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Piece.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PieceAggregateArgs>(args: Subset<T, PieceAggregateArgs>): Prisma.PrismaPromise<GetPieceAggregateType<T>>

    /**
     * Group by Piece.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PieceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PieceGroupByArgs['orderBy'] }
        : { orderBy?: PieceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PieceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPieceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Piece model
   */
  readonly fields: PieceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Piece.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PieceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    album<T extends ReleaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReleaseDefaultArgs<ExtArgs>>): Prisma__ReleaseClient<$Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Piece model
   */
  interface PieceFieldRefs {
    readonly id: FieldRef<"Piece", 'Int'>
    readonly title: FieldRef<"Piece", 'String'>
    readonly genre: FieldRef<"Piece", 'String'>
    readonly duration: FieldRef<"Piece", 'Int'>
    readonly albumId: FieldRef<"Piece", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Piece findUnique
   */
  export type PieceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * Filter, which Piece to fetch.
     */
    where: PieceWhereUniqueInput
  }

  /**
   * Piece findUniqueOrThrow
   */
  export type PieceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * Filter, which Piece to fetch.
     */
    where: PieceWhereUniqueInput
  }

  /**
   * Piece findFirst
   */
  export type PieceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * Filter, which Piece to fetch.
     */
    where?: PieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pieces to fetch.
     */
    orderBy?: PieceOrderByWithRelationInput | PieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pieces.
     */
    cursor?: PieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pieces.
     */
    distinct?: PieceScalarFieldEnum | PieceScalarFieldEnum[]
  }

  /**
   * Piece findFirstOrThrow
   */
  export type PieceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * Filter, which Piece to fetch.
     */
    where?: PieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pieces to fetch.
     */
    orderBy?: PieceOrderByWithRelationInput | PieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pieces.
     */
    cursor?: PieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pieces.
     */
    distinct?: PieceScalarFieldEnum | PieceScalarFieldEnum[]
  }

  /**
   * Piece findMany
   */
  export type PieceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * Filter, which Pieces to fetch.
     */
    where?: PieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pieces to fetch.
     */
    orderBy?: PieceOrderByWithRelationInput | PieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pieces.
     */
    cursor?: PieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pieces.
     */
    skip?: number
    distinct?: PieceScalarFieldEnum | PieceScalarFieldEnum[]
  }

  /**
   * Piece create
   */
  export type PieceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * The data needed to create a Piece.
     */
    data: XOR<PieceCreateInput, PieceUncheckedCreateInput>
  }

  /**
   * Piece createMany
   */
  export type PieceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pieces.
     */
    data: PieceCreateManyInput | PieceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Piece createManyAndReturn
   */
  export type PieceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * The data used to create many Pieces.
     */
    data: PieceCreateManyInput | PieceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Piece update
   */
  export type PieceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * The data needed to update a Piece.
     */
    data: XOR<PieceUpdateInput, PieceUncheckedUpdateInput>
    /**
     * Choose, which Piece to update.
     */
    where: PieceWhereUniqueInput
  }

  /**
   * Piece updateMany
   */
  export type PieceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pieces.
     */
    data: XOR<PieceUpdateManyMutationInput, PieceUncheckedUpdateManyInput>
    /**
     * Filter which Pieces to update
     */
    where?: PieceWhereInput
    /**
     * Limit how many Pieces to update.
     */
    limit?: number
  }

  /**
   * Piece updateManyAndReturn
   */
  export type PieceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * The data used to update Pieces.
     */
    data: XOR<PieceUpdateManyMutationInput, PieceUncheckedUpdateManyInput>
    /**
     * Filter which Pieces to update
     */
    where?: PieceWhereInput
    /**
     * Limit how many Pieces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Piece upsert
   */
  export type PieceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * The filter to search for the Piece to update in case it exists.
     */
    where: PieceWhereUniqueInput
    /**
     * In case the Piece found by the `where` argument doesn't exist, create a new Piece with this data.
     */
    create: XOR<PieceCreateInput, PieceUncheckedCreateInput>
    /**
     * In case the Piece was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PieceUpdateInput, PieceUncheckedUpdateInput>
  }

  /**
   * Piece delete
   */
  export type PieceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * Filter which Piece to delete.
     */
    where: PieceWhereUniqueInput
  }

  /**
   * Piece deleteMany
   */
  export type PieceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pieces to delete
     */
    where?: PieceWhereInput
    /**
     * Limit how many Pieces to delete.
     */
    limit?: number
  }

  /**
   * Piece without action
   */
  export type PieceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ArtistScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const ReleaseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    genre: 'genre',
    label: 'label',
    authorId: 'authorId'
  };

  export type ReleaseScalarFieldEnum = (typeof ReleaseScalarFieldEnum)[keyof typeof ReleaseScalarFieldEnum]


  export const PieceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    genre: 'genre',
    duration: 'duration',
    albumId: 'albumId'
  };

  export type PieceScalarFieldEnum = (typeof PieceScalarFieldEnum)[keyof typeof PieceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    id?: IntFilter<"Artist"> | number
    email?: StringFilter<"Artist"> | string
    name?: StringNullableFilter<"Artist"> | string | null
    releases?: ReleaseListRelationFilter
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    releases?: ReleaseOrderByRelationAggregateInput
  }

  export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    name?: StringNullableFilter<"Artist"> | string | null
    releases?: ReleaseListRelationFilter
  }, "id" | "email">

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _avg?: ArtistAvgOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
    _sum?: ArtistSumOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    OR?: ArtistScalarWhereWithAggregatesInput[]
    NOT?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Artist"> | number
    email?: StringWithAggregatesFilter<"Artist"> | string
    name?: StringNullableWithAggregatesFilter<"Artist"> | string | null
  }

  export type ReleaseWhereInput = {
    AND?: ReleaseWhereInput | ReleaseWhereInput[]
    OR?: ReleaseWhereInput[]
    NOT?: ReleaseWhereInput | ReleaseWhereInput[]
    id?: IntFilter<"Release"> | number
    title?: StringFilter<"Release"> | string
    genre?: StringNullableFilter<"Release"> | string | null
    label?: BoolFilter<"Release"> | boolean
    authorId?: IntFilter<"Release"> | number
    author?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
    pieces?: PieceListRelationFilter
  }

  export type ReleaseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    genre?: SortOrderInput | SortOrder
    label?: SortOrder
    authorId?: SortOrder
    author?: ArtistOrderByWithRelationInput
    pieces?: PieceOrderByRelationAggregateInput
  }

  export type ReleaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReleaseWhereInput | ReleaseWhereInput[]
    OR?: ReleaseWhereInput[]
    NOT?: ReleaseWhereInput | ReleaseWhereInput[]
    title?: StringFilter<"Release"> | string
    genre?: StringNullableFilter<"Release"> | string | null
    label?: BoolFilter<"Release"> | boolean
    authorId?: IntFilter<"Release"> | number
    author?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
    pieces?: PieceListRelationFilter
  }, "id">

  export type ReleaseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    genre?: SortOrderInput | SortOrder
    label?: SortOrder
    authorId?: SortOrder
    _count?: ReleaseCountOrderByAggregateInput
    _avg?: ReleaseAvgOrderByAggregateInput
    _max?: ReleaseMaxOrderByAggregateInput
    _min?: ReleaseMinOrderByAggregateInput
    _sum?: ReleaseSumOrderByAggregateInput
  }

  export type ReleaseScalarWhereWithAggregatesInput = {
    AND?: ReleaseScalarWhereWithAggregatesInput | ReleaseScalarWhereWithAggregatesInput[]
    OR?: ReleaseScalarWhereWithAggregatesInput[]
    NOT?: ReleaseScalarWhereWithAggregatesInput | ReleaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Release"> | number
    title?: StringWithAggregatesFilter<"Release"> | string
    genre?: StringNullableWithAggregatesFilter<"Release"> | string | null
    label?: BoolWithAggregatesFilter<"Release"> | boolean
    authorId?: IntWithAggregatesFilter<"Release"> | number
  }

  export type PieceWhereInput = {
    AND?: PieceWhereInput | PieceWhereInput[]
    OR?: PieceWhereInput[]
    NOT?: PieceWhereInput | PieceWhereInput[]
    id?: IntFilter<"Piece"> | number
    title?: StringFilter<"Piece"> | string
    genre?: StringNullableFilter<"Piece"> | string | null
    duration?: IntFilter<"Piece"> | number
    albumId?: IntFilter<"Piece"> | number
    album?: XOR<ReleaseScalarRelationFilter, ReleaseWhereInput>
  }

  export type PieceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    genre?: SortOrderInput | SortOrder
    duration?: SortOrder
    albumId?: SortOrder
    album?: ReleaseOrderByWithRelationInput
  }

  export type PieceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PieceWhereInput | PieceWhereInput[]
    OR?: PieceWhereInput[]
    NOT?: PieceWhereInput | PieceWhereInput[]
    title?: StringFilter<"Piece"> | string
    genre?: StringNullableFilter<"Piece"> | string | null
    duration?: IntFilter<"Piece"> | number
    albumId?: IntFilter<"Piece"> | number
    album?: XOR<ReleaseScalarRelationFilter, ReleaseWhereInput>
  }, "id">

  export type PieceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    genre?: SortOrderInput | SortOrder
    duration?: SortOrder
    albumId?: SortOrder
    _count?: PieceCountOrderByAggregateInput
    _avg?: PieceAvgOrderByAggregateInput
    _max?: PieceMaxOrderByAggregateInput
    _min?: PieceMinOrderByAggregateInput
    _sum?: PieceSumOrderByAggregateInput
  }

  export type PieceScalarWhereWithAggregatesInput = {
    AND?: PieceScalarWhereWithAggregatesInput | PieceScalarWhereWithAggregatesInput[]
    OR?: PieceScalarWhereWithAggregatesInput[]
    NOT?: PieceScalarWhereWithAggregatesInput | PieceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Piece"> | number
    title?: StringWithAggregatesFilter<"Piece"> | string
    genre?: StringNullableWithAggregatesFilter<"Piece"> | string | null
    duration?: IntWithAggregatesFilter<"Piece"> | number
    albumId?: IntWithAggregatesFilter<"Piece"> | number
  }

  export type ArtistCreateInput = {
    email: string
    name?: string | null
    releases?: ReleaseCreateNestedManyWithoutAuthorInput
  }

  export type ArtistUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    releases?: ReleaseUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type ArtistUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    releases?: ReleaseUpdateManyWithoutAuthorNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    releases?: ReleaseUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ArtistCreateManyInput = {
    id?: number
    email: string
    name?: string | null
  }

  export type ArtistUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReleaseCreateInput = {
    title: string
    genre?: string | null
    label?: boolean
    author: ArtistCreateNestedOneWithoutReleasesInput
    pieces?: PieceCreateNestedManyWithoutAlbumInput
  }

  export type ReleaseUncheckedCreateInput = {
    id?: number
    title: string
    genre?: string | null
    label?: boolean
    authorId: number
    pieces?: PieceUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type ReleaseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    label?: BoolFieldUpdateOperationsInput | boolean
    author?: ArtistUpdateOneRequiredWithoutReleasesNestedInput
    pieces?: PieceUpdateManyWithoutAlbumNestedInput
  }

  export type ReleaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    label?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    pieces?: PieceUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type ReleaseCreateManyInput = {
    id?: number
    title: string
    genre?: string | null
    label?: boolean
    authorId: number
  }

  export type ReleaseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    label?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReleaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    label?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type PieceCreateInput = {
    title: string
    genre?: string | null
    duration: number
    album: ReleaseCreateNestedOneWithoutPiecesInput
  }

  export type PieceUncheckedCreateInput = {
    id?: number
    title: string
    genre?: string | null
    duration: number
    albumId: number
  }

  export type PieceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    album?: ReleaseUpdateOneRequiredWithoutPiecesNestedInput
  }

  export type PieceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
  }

  export type PieceCreateManyInput = {
    id?: number
    title: string
    genre?: string | null
    duration: number
    albumId: number
  }

  export type PieceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type PieceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ReleaseListRelationFilter = {
    every?: ReleaseWhereInput
    some?: ReleaseWhereInput
    none?: ReleaseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReleaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type ArtistAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type ArtistSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ArtistScalarRelationFilter = {
    is?: ArtistWhereInput
    isNot?: ArtistWhereInput
  }

  export type PieceListRelationFilter = {
    every?: PieceWhereInput
    some?: PieceWhereInput
    none?: PieceWhereInput
  }

  export type PieceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReleaseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    label?: SortOrder
    authorId?: SortOrder
  }

  export type ReleaseAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type ReleaseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    label?: SortOrder
    authorId?: SortOrder
  }

  export type ReleaseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    label?: SortOrder
    authorId?: SortOrder
  }

  export type ReleaseSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ReleaseScalarRelationFilter = {
    is?: ReleaseWhereInput
    isNot?: ReleaseWhereInput
  }

  export type PieceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    duration?: SortOrder
    albumId?: SortOrder
  }

  export type PieceAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    albumId?: SortOrder
  }

  export type PieceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    duration?: SortOrder
    albumId?: SortOrder
  }

  export type PieceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    duration?: SortOrder
    albumId?: SortOrder
  }

  export type PieceSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    albumId?: SortOrder
  }

  export type ReleaseCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReleaseCreateWithoutAuthorInput, ReleaseUncheckedCreateWithoutAuthorInput> | ReleaseCreateWithoutAuthorInput[] | ReleaseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReleaseCreateOrConnectWithoutAuthorInput | ReleaseCreateOrConnectWithoutAuthorInput[]
    createMany?: ReleaseCreateManyAuthorInputEnvelope
    connect?: ReleaseWhereUniqueInput | ReleaseWhereUniqueInput[]
  }

  export type ReleaseUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReleaseCreateWithoutAuthorInput, ReleaseUncheckedCreateWithoutAuthorInput> | ReleaseCreateWithoutAuthorInput[] | ReleaseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReleaseCreateOrConnectWithoutAuthorInput | ReleaseCreateOrConnectWithoutAuthorInput[]
    createMany?: ReleaseCreateManyAuthorInputEnvelope
    connect?: ReleaseWhereUniqueInput | ReleaseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ReleaseUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReleaseCreateWithoutAuthorInput, ReleaseUncheckedCreateWithoutAuthorInput> | ReleaseCreateWithoutAuthorInput[] | ReleaseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReleaseCreateOrConnectWithoutAuthorInput | ReleaseCreateOrConnectWithoutAuthorInput[]
    upsert?: ReleaseUpsertWithWhereUniqueWithoutAuthorInput | ReleaseUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReleaseCreateManyAuthorInputEnvelope
    set?: ReleaseWhereUniqueInput | ReleaseWhereUniqueInput[]
    disconnect?: ReleaseWhereUniqueInput | ReleaseWhereUniqueInput[]
    delete?: ReleaseWhereUniqueInput | ReleaseWhereUniqueInput[]
    connect?: ReleaseWhereUniqueInput | ReleaseWhereUniqueInput[]
    update?: ReleaseUpdateWithWhereUniqueWithoutAuthorInput | ReleaseUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReleaseUpdateManyWithWhereWithoutAuthorInput | ReleaseUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReleaseScalarWhereInput | ReleaseScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReleaseUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReleaseCreateWithoutAuthorInput, ReleaseUncheckedCreateWithoutAuthorInput> | ReleaseCreateWithoutAuthorInput[] | ReleaseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReleaseCreateOrConnectWithoutAuthorInput | ReleaseCreateOrConnectWithoutAuthorInput[]
    upsert?: ReleaseUpsertWithWhereUniqueWithoutAuthorInput | ReleaseUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReleaseCreateManyAuthorInputEnvelope
    set?: ReleaseWhereUniqueInput | ReleaseWhereUniqueInput[]
    disconnect?: ReleaseWhereUniqueInput | ReleaseWhereUniqueInput[]
    delete?: ReleaseWhereUniqueInput | ReleaseWhereUniqueInput[]
    connect?: ReleaseWhereUniqueInput | ReleaseWhereUniqueInput[]
    update?: ReleaseUpdateWithWhereUniqueWithoutAuthorInput | ReleaseUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReleaseUpdateManyWithWhereWithoutAuthorInput | ReleaseUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReleaseScalarWhereInput | ReleaseScalarWhereInput[]
  }

  export type ArtistCreateNestedOneWithoutReleasesInput = {
    create?: XOR<ArtistCreateWithoutReleasesInput, ArtistUncheckedCreateWithoutReleasesInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutReleasesInput
    connect?: ArtistWhereUniqueInput
  }

  export type PieceCreateNestedManyWithoutAlbumInput = {
    create?: XOR<PieceCreateWithoutAlbumInput, PieceUncheckedCreateWithoutAlbumInput> | PieceCreateWithoutAlbumInput[] | PieceUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: PieceCreateOrConnectWithoutAlbumInput | PieceCreateOrConnectWithoutAlbumInput[]
    createMany?: PieceCreateManyAlbumInputEnvelope
    connect?: PieceWhereUniqueInput | PieceWhereUniqueInput[]
  }

  export type PieceUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<PieceCreateWithoutAlbumInput, PieceUncheckedCreateWithoutAlbumInput> | PieceCreateWithoutAlbumInput[] | PieceUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: PieceCreateOrConnectWithoutAlbumInput | PieceCreateOrConnectWithoutAlbumInput[]
    createMany?: PieceCreateManyAlbumInputEnvelope
    connect?: PieceWhereUniqueInput | PieceWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ArtistUpdateOneRequiredWithoutReleasesNestedInput = {
    create?: XOR<ArtistCreateWithoutReleasesInput, ArtistUncheckedCreateWithoutReleasesInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutReleasesInput
    upsert?: ArtistUpsertWithoutReleasesInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutReleasesInput, ArtistUpdateWithoutReleasesInput>, ArtistUncheckedUpdateWithoutReleasesInput>
  }

  export type PieceUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<PieceCreateWithoutAlbumInput, PieceUncheckedCreateWithoutAlbumInput> | PieceCreateWithoutAlbumInput[] | PieceUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: PieceCreateOrConnectWithoutAlbumInput | PieceCreateOrConnectWithoutAlbumInput[]
    upsert?: PieceUpsertWithWhereUniqueWithoutAlbumInput | PieceUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: PieceCreateManyAlbumInputEnvelope
    set?: PieceWhereUniqueInput | PieceWhereUniqueInput[]
    disconnect?: PieceWhereUniqueInput | PieceWhereUniqueInput[]
    delete?: PieceWhereUniqueInput | PieceWhereUniqueInput[]
    connect?: PieceWhereUniqueInput | PieceWhereUniqueInput[]
    update?: PieceUpdateWithWhereUniqueWithoutAlbumInput | PieceUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: PieceUpdateManyWithWhereWithoutAlbumInput | PieceUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: PieceScalarWhereInput | PieceScalarWhereInput[]
  }

  export type PieceUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<PieceCreateWithoutAlbumInput, PieceUncheckedCreateWithoutAlbumInput> | PieceCreateWithoutAlbumInput[] | PieceUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: PieceCreateOrConnectWithoutAlbumInput | PieceCreateOrConnectWithoutAlbumInput[]
    upsert?: PieceUpsertWithWhereUniqueWithoutAlbumInput | PieceUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: PieceCreateManyAlbumInputEnvelope
    set?: PieceWhereUniqueInput | PieceWhereUniqueInput[]
    disconnect?: PieceWhereUniqueInput | PieceWhereUniqueInput[]
    delete?: PieceWhereUniqueInput | PieceWhereUniqueInput[]
    connect?: PieceWhereUniqueInput | PieceWhereUniqueInput[]
    update?: PieceUpdateWithWhereUniqueWithoutAlbumInput | PieceUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: PieceUpdateManyWithWhereWithoutAlbumInput | PieceUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: PieceScalarWhereInput | PieceScalarWhereInput[]
  }

  export type ReleaseCreateNestedOneWithoutPiecesInput = {
    create?: XOR<ReleaseCreateWithoutPiecesInput, ReleaseUncheckedCreateWithoutPiecesInput>
    connectOrCreate?: ReleaseCreateOrConnectWithoutPiecesInput
    connect?: ReleaseWhereUniqueInput
  }

  export type ReleaseUpdateOneRequiredWithoutPiecesNestedInput = {
    create?: XOR<ReleaseCreateWithoutPiecesInput, ReleaseUncheckedCreateWithoutPiecesInput>
    connectOrCreate?: ReleaseCreateOrConnectWithoutPiecesInput
    upsert?: ReleaseUpsertWithoutPiecesInput
    connect?: ReleaseWhereUniqueInput
    update?: XOR<XOR<ReleaseUpdateToOneWithWhereWithoutPiecesInput, ReleaseUpdateWithoutPiecesInput>, ReleaseUncheckedUpdateWithoutPiecesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ReleaseCreateWithoutAuthorInput = {
    title: string
    genre?: string | null
    label?: boolean
    pieces?: PieceCreateNestedManyWithoutAlbumInput
  }

  export type ReleaseUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    genre?: string | null
    label?: boolean
    pieces?: PieceUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type ReleaseCreateOrConnectWithoutAuthorInput = {
    where: ReleaseWhereUniqueInput
    create: XOR<ReleaseCreateWithoutAuthorInput, ReleaseUncheckedCreateWithoutAuthorInput>
  }

  export type ReleaseCreateManyAuthorInputEnvelope = {
    data: ReleaseCreateManyAuthorInput | ReleaseCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ReleaseUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ReleaseWhereUniqueInput
    update: XOR<ReleaseUpdateWithoutAuthorInput, ReleaseUncheckedUpdateWithoutAuthorInput>
    create: XOR<ReleaseCreateWithoutAuthorInput, ReleaseUncheckedCreateWithoutAuthorInput>
  }

  export type ReleaseUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ReleaseWhereUniqueInput
    data: XOR<ReleaseUpdateWithoutAuthorInput, ReleaseUncheckedUpdateWithoutAuthorInput>
  }

  export type ReleaseUpdateManyWithWhereWithoutAuthorInput = {
    where: ReleaseScalarWhereInput
    data: XOR<ReleaseUpdateManyMutationInput, ReleaseUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ReleaseScalarWhereInput = {
    AND?: ReleaseScalarWhereInput | ReleaseScalarWhereInput[]
    OR?: ReleaseScalarWhereInput[]
    NOT?: ReleaseScalarWhereInput | ReleaseScalarWhereInput[]
    id?: IntFilter<"Release"> | number
    title?: StringFilter<"Release"> | string
    genre?: StringNullableFilter<"Release"> | string | null
    label?: BoolFilter<"Release"> | boolean
    authorId?: IntFilter<"Release"> | number
  }

  export type ArtistCreateWithoutReleasesInput = {
    email: string
    name?: string | null
  }

  export type ArtistUncheckedCreateWithoutReleasesInput = {
    id?: number
    email: string
    name?: string | null
  }

  export type ArtistCreateOrConnectWithoutReleasesInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutReleasesInput, ArtistUncheckedCreateWithoutReleasesInput>
  }

  export type PieceCreateWithoutAlbumInput = {
    title: string
    genre?: string | null
    duration: number
  }

  export type PieceUncheckedCreateWithoutAlbumInput = {
    id?: number
    title: string
    genre?: string | null
    duration: number
  }

  export type PieceCreateOrConnectWithoutAlbumInput = {
    where: PieceWhereUniqueInput
    create: XOR<PieceCreateWithoutAlbumInput, PieceUncheckedCreateWithoutAlbumInput>
  }

  export type PieceCreateManyAlbumInputEnvelope = {
    data: PieceCreateManyAlbumInput | PieceCreateManyAlbumInput[]
    skipDuplicates?: boolean
  }

  export type ArtistUpsertWithoutReleasesInput = {
    update: XOR<ArtistUpdateWithoutReleasesInput, ArtistUncheckedUpdateWithoutReleasesInput>
    create: XOR<ArtistCreateWithoutReleasesInput, ArtistUncheckedCreateWithoutReleasesInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutReleasesInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutReleasesInput, ArtistUncheckedUpdateWithoutReleasesInput>
  }

  export type ArtistUpdateWithoutReleasesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistUncheckedUpdateWithoutReleasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PieceUpsertWithWhereUniqueWithoutAlbumInput = {
    where: PieceWhereUniqueInput
    update: XOR<PieceUpdateWithoutAlbumInput, PieceUncheckedUpdateWithoutAlbumInput>
    create: XOR<PieceCreateWithoutAlbumInput, PieceUncheckedCreateWithoutAlbumInput>
  }

  export type PieceUpdateWithWhereUniqueWithoutAlbumInput = {
    where: PieceWhereUniqueInput
    data: XOR<PieceUpdateWithoutAlbumInput, PieceUncheckedUpdateWithoutAlbumInput>
  }

  export type PieceUpdateManyWithWhereWithoutAlbumInput = {
    where: PieceScalarWhereInput
    data: XOR<PieceUpdateManyMutationInput, PieceUncheckedUpdateManyWithoutAlbumInput>
  }

  export type PieceScalarWhereInput = {
    AND?: PieceScalarWhereInput | PieceScalarWhereInput[]
    OR?: PieceScalarWhereInput[]
    NOT?: PieceScalarWhereInput | PieceScalarWhereInput[]
    id?: IntFilter<"Piece"> | number
    title?: StringFilter<"Piece"> | string
    genre?: StringNullableFilter<"Piece"> | string | null
    duration?: IntFilter<"Piece"> | number
    albumId?: IntFilter<"Piece"> | number
  }

  export type ReleaseCreateWithoutPiecesInput = {
    title: string
    genre?: string | null
    label?: boolean
    author: ArtistCreateNestedOneWithoutReleasesInput
  }

  export type ReleaseUncheckedCreateWithoutPiecesInput = {
    id?: number
    title: string
    genre?: string | null
    label?: boolean
    authorId: number
  }

  export type ReleaseCreateOrConnectWithoutPiecesInput = {
    where: ReleaseWhereUniqueInput
    create: XOR<ReleaseCreateWithoutPiecesInput, ReleaseUncheckedCreateWithoutPiecesInput>
  }

  export type ReleaseUpsertWithoutPiecesInput = {
    update: XOR<ReleaseUpdateWithoutPiecesInput, ReleaseUncheckedUpdateWithoutPiecesInput>
    create: XOR<ReleaseCreateWithoutPiecesInput, ReleaseUncheckedCreateWithoutPiecesInput>
    where?: ReleaseWhereInput
  }

  export type ReleaseUpdateToOneWithWhereWithoutPiecesInput = {
    where?: ReleaseWhereInput
    data: XOR<ReleaseUpdateWithoutPiecesInput, ReleaseUncheckedUpdateWithoutPiecesInput>
  }

  export type ReleaseUpdateWithoutPiecesInput = {
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    label?: BoolFieldUpdateOperationsInput | boolean
    author?: ArtistUpdateOneRequiredWithoutReleasesNestedInput
  }

  export type ReleaseUncheckedUpdateWithoutPiecesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    label?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type ReleaseCreateManyAuthorInput = {
    id?: number
    title: string
    genre?: string | null
    label?: boolean
  }

  export type ReleaseUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    label?: BoolFieldUpdateOperationsInput | boolean
    pieces?: PieceUpdateManyWithoutAlbumNestedInput
  }

  export type ReleaseUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    label?: BoolFieldUpdateOperationsInput | boolean
    pieces?: PieceUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type ReleaseUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    label?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PieceCreateManyAlbumInput = {
    id?: number
    title: string
    genre?: string | null
    duration: number
  }

  export type PieceUpdateWithoutAlbumInput = {
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type PieceUncheckedUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type PieceUncheckedUpdateManyWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}