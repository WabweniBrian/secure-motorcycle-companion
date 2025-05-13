
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Rider
 * 
 */
export type Rider = $Result.DefaultSelection<Prisma.$RiderPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Helmet
 * 
 */
export type Helmet = $Result.DefaultSelection<Prisma.$HelmetPayload>
/**
 * Model Incident
 * 
 */
export type Incident = $Result.DefaultSelection<Prisma.$IncidentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  User: 'User',
  Admin: 'Admin'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const SignalStrength: {
  excellent: 'excellent',
  good: 'good',
  poor: 'poor'
};

export type SignalStrength = (typeof SignalStrength)[keyof typeof SignalStrength]


export const HelmetStatus: {
  active: 'active',
  inactive: 'inactive'
};

export type HelmetStatus = (typeof HelmetStatus)[keyof typeof HelmetStatus]


export const Severity: {
  severe: 'severe',
  moderate: 'moderate',
  minor: 'minor'
};

export type Severity = (typeof Severity)[keyof typeof Severity]


export const IncidentStatus: {
  active: 'active',
  resolved: 'resolved',
  investigating: 'investigating'
};

export type IncidentStatus = (typeof IncidentStatus)[keyof typeof IncidentStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type SignalStrength = $Enums.SignalStrength

export const SignalStrength: typeof $Enums.SignalStrength

export type HelmetStatus = $Enums.HelmetStatus

export const HelmetStatus: typeof $Enums.HelmetStatus

export type Severity = $Enums.Severity

export const Severity: typeof $Enums.Severity

export type IncidentStatus = $Enums.IncidentStatus

export const IncidentStatus: typeof $Enums.IncidentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rider`: Exposes CRUD operations for the **Rider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Riders
    * const riders = await prisma.rider.findMany()
    * ```
    */
  get rider(): Prisma.RiderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.helmet`: Exposes CRUD operations for the **Helmet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Helmets
    * const helmets = await prisma.helmet.findMany()
    * ```
    */
  get helmet(): Prisma.HelmetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incident`: Exposes CRUD operations for the **Incident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incidents
    * const incidents = await prisma.incident.findMany()
    * ```
    */
  get incident(): Prisma.IncidentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    Rider: 'Rider',
    Contact: 'Contact',
    Helmet: 'Helmet',
    Incident: 'Incident'
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
      modelProps: "user" | "rider" | "contact" | "helmet" | "incident"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Rider: {
        payload: Prisma.$RiderPayload<ExtArgs>
        fields: Prisma.RiderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          findFirst: {
            args: Prisma.RiderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          findMany: {
            args: Prisma.RiderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>[]
          }
          create: {
            args: Prisma.RiderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          createMany: {
            args: Prisma.RiderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RiderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>[]
          }
          delete: {
            args: Prisma.RiderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          update: {
            args: Prisma.RiderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          deleteMany: {
            args: Prisma.RiderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RiderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RiderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>[]
          }
          upsert: {
            args: Prisma.RiderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          aggregate: {
            args: Prisma.RiderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRider>
          }
          groupBy: {
            args: Prisma.RiderGroupByArgs<ExtArgs>
            result: $Utils.Optional<RiderGroupByOutputType>[]
          }
          count: {
            args: Prisma.RiderCountArgs<ExtArgs>
            result: $Utils.Optional<RiderCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Helmet: {
        payload: Prisma.$HelmetPayload<ExtArgs>
        fields: Prisma.HelmetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HelmetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelmetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HelmetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelmetPayload>
          }
          findFirst: {
            args: Prisma.HelmetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelmetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HelmetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelmetPayload>
          }
          findMany: {
            args: Prisma.HelmetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelmetPayload>[]
          }
          create: {
            args: Prisma.HelmetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelmetPayload>
          }
          createMany: {
            args: Prisma.HelmetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HelmetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelmetPayload>[]
          }
          delete: {
            args: Prisma.HelmetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelmetPayload>
          }
          update: {
            args: Prisma.HelmetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelmetPayload>
          }
          deleteMany: {
            args: Prisma.HelmetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HelmetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HelmetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelmetPayload>[]
          }
          upsert: {
            args: Prisma.HelmetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelmetPayload>
          }
          aggregate: {
            args: Prisma.HelmetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHelmet>
          }
          groupBy: {
            args: Prisma.HelmetGroupByArgs<ExtArgs>
            result: $Utils.Optional<HelmetGroupByOutputType>[]
          }
          count: {
            args: Prisma.HelmetCountArgs<ExtArgs>
            result: $Utils.Optional<HelmetCountAggregateOutputType> | number
          }
        }
      }
      Incident: {
        payload: Prisma.$IncidentPayload<ExtArgs>
        fields: Prisma.IncidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findFirst: {
            args: Prisma.IncidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findMany: {
            args: Prisma.IncidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          create: {
            args: Prisma.IncidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          createMany: {
            args: Prisma.IncidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          delete: {
            args: Prisma.IncidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          update: {
            args: Prisma.IncidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          deleteMany: {
            args: Prisma.IncidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          upsert: {
            args: Prisma.IncidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          aggregate: {
            args: Prisma.IncidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncident>
          }
          groupBy: {
            args: Prisma.IncidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentCountAggregateOutputType> | number
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
    user?: UserOmit
    rider?: RiderOmit
    contact?: ContactOmit
    helmet?: HelmetOmit
    incident?: IncidentOmit
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
   * Count Type RiderCountOutputType
   */

  export type RiderCountOutputType = {
    incidents: number
  }

  export type RiderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incidents?: boolean | RiderCountOutputTypeCountIncidentsArgs
  }

  // Custom InputTypes
  /**
   * RiderCountOutputType without action
   */
  export type RiderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiderCountOutputType
     */
    select?: RiderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RiderCountOutputType without action
   */
  export type RiderCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }


  /**
   * Count Type HelmetCountOutputType
   */

  export type HelmetCountOutputType = {
    incidents: number
  }

  export type HelmetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incidents?: boolean | HelmetCountOutputTypeCountIncidentsArgs
  }

  // Custom InputTypes
  /**
   * HelmetCountOutputType without action
   */
  export type HelmetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelmetCountOutputType
     */
    select?: HelmetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HelmetCountOutputType without action
   */
  export type HelmetCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    image: string | null
    role: $Enums.UserRole | null
    lastLogin: Date | null
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    image: string | null
    role: $Enums.UserRole | null
    lastLogin: Date | null
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    image: number
    role: number
    lastLogin: number
    resetPasswordToken: number
    resetPasswordExpires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    role?: true
    lastLogin?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    role?: true
    lastLogin?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    role?: true
    lastLogin?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    image: string | null
    role: $Enums.UserRole
    lastLogin: Date | null
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    role?: boolean
    lastLogin?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    role?: boolean
    lastLogin?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    role?: boolean
    lastLogin?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    role?: boolean
    lastLogin?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "image" | "role" | "lastLogin" | "resetPasswordToken" | "resetPasswordExpires" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      image: string | null
      role: $Enums.UserRole
      lastLogin: Date | null
      resetPasswordToken: string | null
      resetPasswordExpires: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly resetPasswordToken: FieldRef<"User", 'String'>
    readonly resetPasswordExpires: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Rider
   */

  export type AggregateRider = {
    _count: RiderCountAggregateOutputType | null
    _min: RiderMinAggregateOutputType | null
    _max: RiderMaxAggregateOutputType | null
  }

  export type RiderMinAggregateOutputType = {
    id: string | null
    riderId: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    hasHadIncident: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiderMaxAggregateOutputType = {
    id: string | null
    riderId: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    hasHadIncident: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiderCountAggregateOutputType = {
    id: number
    riderId: number
    name: number
    email: number
    phone: number
    address: number
    hasHadIncident: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RiderMinAggregateInputType = {
    id?: true
    riderId?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    hasHadIncident?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiderMaxAggregateInputType = {
    id?: true
    riderId?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    hasHadIncident?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiderCountAggregateInputType = {
    id?: true
    riderId?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    hasHadIncident?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RiderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rider to aggregate.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Riders
    **/
    _count?: true | RiderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiderMaxAggregateInputType
  }

  export type GetRiderAggregateType<T extends RiderAggregateArgs> = {
        [P in keyof T & keyof AggregateRider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRider[P]>
      : GetScalarType<T[P], AggregateRider[P]>
  }




  export type RiderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiderWhereInput
    orderBy?: RiderOrderByWithAggregationInput | RiderOrderByWithAggregationInput[]
    by: RiderScalarFieldEnum[] | RiderScalarFieldEnum
    having?: RiderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiderCountAggregateInputType | true
    _min?: RiderMinAggregateInputType
    _max?: RiderMaxAggregateInputType
  }

  export type RiderGroupByOutputType = {
    id: string
    riderId: string
    name: string
    email: string
    phone: string
    address: string | null
    hasHadIncident: boolean
    createdAt: Date
    updatedAt: Date
    _count: RiderCountAggregateOutputType | null
    _min: RiderMinAggregateOutputType | null
    _max: RiderMaxAggregateOutputType | null
  }

  type GetRiderGroupByPayload<T extends RiderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiderGroupByOutputType[P]>
            : GetScalarType<T[P], RiderGroupByOutputType[P]>
        }
      >
    >


  export type RiderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    riderId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    hasHadIncident?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emergencyContact?: boolean | Rider$emergencyContactArgs<ExtArgs>
    helmet?: boolean | Rider$helmetArgs<ExtArgs>
    incidents?: boolean | Rider$incidentsArgs<ExtArgs>
    _count?: boolean | RiderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rider"]>

  export type RiderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    riderId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    hasHadIncident?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rider"]>

  export type RiderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    riderId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    hasHadIncident?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rider"]>

  export type RiderSelectScalar = {
    id?: boolean
    riderId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    hasHadIncident?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RiderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "riderId" | "name" | "email" | "phone" | "address" | "hasHadIncident" | "createdAt" | "updatedAt", ExtArgs["result"]["rider"]>
  export type RiderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emergencyContact?: boolean | Rider$emergencyContactArgs<ExtArgs>
    helmet?: boolean | Rider$helmetArgs<ExtArgs>
    incidents?: boolean | Rider$incidentsArgs<ExtArgs>
    _count?: boolean | RiderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RiderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RiderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RiderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rider"
    objects: {
      emergencyContact: Prisma.$ContactPayload<ExtArgs> | null
      helmet: Prisma.$HelmetPayload<ExtArgs> | null
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      riderId: string
      name: string
      email: string
      phone: string
      address: string | null
      hasHadIncident: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rider"]>
    composites: {}
  }

  type RiderGetPayload<S extends boolean | null | undefined | RiderDefaultArgs> = $Result.GetResult<Prisma.$RiderPayload, S>

  type RiderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RiderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RiderCountAggregateInputType | true
    }

  export interface RiderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rider'], meta: { name: 'Rider' } }
    /**
     * Find zero or one Rider that matches the filter.
     * @param {RiderFindUniqueArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RiderFindUniqueArgs>(args: SelectSubset<T, RiderFindUniqueArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RiderFindUniqueOrThrowArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RiderFindUniqueOrThrowArgs>(args: SelectSubset<T, RiderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderFindFirstArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RiderFindFirstArgs>(args?: SelectSubset<T, RiderFindFirstArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderFindFirstOrThrowArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RiderFindFirstOrThrowArgs>(args?: SelectSubset<T, RiderFindFirstOrThrowArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Riders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Riders
     * const riders = await prisma.rider.findMany()
     * 
     * // Get first 10 Riders
     * const riders = await prisma.rider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riderWithIdOnly = await prisma.rider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RiderFindManyArgs>(args?: SelectSubset<T, RiderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rider.
     * @param {RiderCreateArgs} args - Arguments to create a Rider.
     * @example
     * // Create one Rider
     * const Rider = await prisma.rider.create({
     *   data: {
     *     // ... data to create a Rider
     *   }
     * })
     * 
     */
    create<T extends RiderCreateArgs>(args: SelectSubset<T, RiderCreateArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Riders.
     * @param {RiderCreateManyArgs} args - Arguments to create many Riders.
     * @example
     * // Create many Riders
     * const rider = await prisma.rider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RiderCreateManyArgs>(args?: SelectSubset<T, RiderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Riders and returns the data saved in the database.
     * @param {RiderCreateManyAndReturnArgs} args - Arguments to create many Riders.
     * @example
     * // Create many Riders
     * const rider = await prisma.rider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Riders and only return the `id`
     * const riderWithIdOnly = await prisma.rider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RiderCreateManyAndReturnArgs>(args?: SelectSubset<T, RiderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rider.
     * @param {RiderDeleteArgs} args - Arguments to delete one Rider.
     * @example
     * // Delete one Rider
     * const Rider = await prisma.rider.delete({
     *   where: {
     *     // ... filter to delete one Rider
     *   }
     * })
     * 
     */
    delete<T extends RiderDeleteArgs>(args: SelectSubset<T, RiderDeleteArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rider.
     * @param {RiderUpdateArgs} args - Arguments to update one Rider.
     * @example
     * // Update one Rider
     * const rider = await prisma.rider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RiderUpdateArgs>(args: SelectSubset<T, RiderUpdateArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Riders.
     * @param {RiderDeleteManyArgs} args - Arguments to filter Riders to delete.
     * @example
     * // Delete a few Riders
     * const { count } = await prisma.rider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RiderDeleteManyArgs>(args?: SelectSubset<T, RiderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Riders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Riders
     * const rider = await prisma.rider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RiderUpdateManyArgs>(args: SelectSubset<T, RiderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Riders and returns the data updated in the database.
     * @param {RiderUpdateManyAndReturnArgs} args - Arguments to update many Riders.
     * @example
     * // Update many Riders
     * const rider = await prisma.rider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Riders and only return the `id`
     * const riderWithIdOnly = await prisma.rider.updateManyAndReturn({
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
    updateManyAndReturn<T extends RiderUpdateManyAndReturnArgs>(args: SelectSubset<T, RiderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rider.
     * @param {RiderUpsertArgs} args - Arguments to update or create a Rider.
     * @example
     * // Update or create a Rider
     * const rider = await prisma.rider.upsert({
     *   create: {
     *     // ... data to create a Rider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rider we want to update
     *   }
     * })
     */
    upsert<T extends RiderUpsertArgs>(args: SelectSubset<T, RiderUpsertArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Riders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderCountArgs} args - Arguments to filter Riders to count.
     * @example
     * // Count the number of Riders
     * const count = await prisma.rider.count({
     *   where: {
     *     // ... the filter for the Riders we want to count
     *   }
     * })
    **/
    count<T extends RiderCountArgs>(
      args?: Subset<T, RiderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RiderAggregateArgs>(args: Subset<T, RiderAggregateArgs>): Prisma.PrismaPromise<GetRiderAggregateType<T>>

    /**
     * Group by Rider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderGroupByArgs} args - Group by arguments.
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
      T extends RiderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiderGroupByArgs['orderBy'] }
        : { orderBy?: RiderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RiderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rider model
   */
  readonly fields: RiderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emergencyContact<T extends Rider$emergencyContactArgs<ExtArgs> = {}>(args?: Subset<T, Rider$emergencyContactArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    helmet<T extends Rider$helmetArgs<ExtArgs> = {}>(args?: Subset<T, Rider$helmetArgs<ExtArgs>>): Prisma__HelmetClient<$Result.GetResult<Prisma.$HelmetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    incidents<T extends Rider$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, Rider$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rider model
   */
  interface RiderFieldRefs {
    readonly id: FieldRef<"Rider", 'String'>
    readonly riderId: FieldRef<"Rider", 'String'>
    readonly name: FieldRef<"Rider", 'String'>
    readonly email: FieldRef<"Rider", 'String'>
    readonly phone: FieldRef<"Rider", 'String'>
    readonly address: FieldRef<"Rider", 'String'>
    readonly hasHadIncident: FieldRef<"Rider", 'Boolean'>
    readonly createdAt: FieldRef<"Rider", 'DateTime'>
    readonly updatedAt: FieldRef<"Rider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rider findUnique
   */
  export type RiderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where: RiderWhereUniqueInput
  }

  /**
   * Rider findUniqueOrThrow
   */
  export type RiderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where: RiderWhereUniqueInput
  }

  /**
   * Rider findFirst
   */
  export type RiderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Riders.
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Riders.
     */
    distinct?: RiderScalarFieldEnum | RiderScalarFieldEnum[]
  }

  /**
   * Rider findFirstOrThrow
   */
  export type RiderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Riders.
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Riders.
     */
    distinct?: RiderScalarFieldEnum | RiderScalarFieldEnum[]
  }

  /**
   * Rider findMany
   */
  export type RiderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Riders to fetch.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Riders.
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    distinct?: RiderScalarFieldEnum | RiderScalarFieldEnum[]
  }

  /**
   * Rider create
   */
  export type RiderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * The data needed to create a Rider.
     */
    data: XOR<RiderCreateInput, RiderUncheckedCreateInput>
  }

  /**
   * Rider createMany
   */
  export type RiderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Riders.
     */
    data: RiderCreateManyInput | RiderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rider createManyAndReturn
   */
  export type RiderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * The data used to create many Riders.
     */
    data: RiderCreateManyInput | RiderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rider update
   */
  export type RiderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * The data needed to update a Rider.
     */
    data: XOR<RiderUpdateInput, RiderUncheckedUpdateInput>
    /**
     * Choose, which Rider to update.
     */
    where: RiderWhereUniqueInput
  }

  /**
   * Rider updateMany
   */
  export type RiderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Riders.
     */
    data: XOR<RiderUpdateManyMutationInput, RiderUncheckedUpdateManyInput>
    /**
     * Filter which Riders to update
     */
    where?: RiderWhereInput
    /**
     * Limit how many Riders to update.
     */
    limit?: number
  }

  /**
   * Rider updateManyAndReturn
   */
  export type RiderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * The data used to update Riders.
     */
    data: XOR<RiderUpdateManyMutationInput, RiderUncheckedUpdateManyInput>
    /**
     * Filter which Riders to update
     */
    where?: RiderWhereInput
    /**
     * Limit how many Riders to update.
     */
    limit?: number
  }

  /**
   * Rider upsert
   */
  export type RiderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * The filter to search for the Rider to update in case it exists.
     */
    where: RiderWhereUniqueInput
    /**
     * In case the Rider found by the `where` argument doesn't exist, create a new Rider with this data.
     */
    create: XOR<RiderCreateInput, RiderUncheckedCreateInput>
    /**
     * In case the Rider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiderUpdateInput, RiderUncheckedUpdateInput>
  }

  /**
   * Rider delete
   */
  export type RiderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter which Rider to delete.
     */
    where: RiderWhereUniqueInput
  }

  /**
   * Rider deleteMany
   */
  export type RiderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Riders to delete
     */
    where?: RiderWhereInput
    /**
     * Limit how many Riders to delete.
     */
    limit?: number
  }

  /**
   * Rider.emergencyContact
   */
  export type Rider$emergencyContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
  }

  /**
   * Rider.helmet
   */
  export type Rider$helmetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helmet
     */
    select?: HelmetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Helmet
     */
    omit?: HelmetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelmetInclude<ExtArgs> | null
    where?: HelmetWhereInput
  }

  /**
   * Rider.incidents
   */
  export type Rider$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Rider without action
   */
  export type RiderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactMinAggregateOutputType = {
    id: string | null
    riderId: string | null
    name: string | null
    relation: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: string | null
    riderId: string | null
    name: string | null
    relation: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    riderId: number
    name: number
    relation: number
    phone: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactMinAggregateInputType = {
    id?: true
    riderId?: true
    name?: true
    relation?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    riderId?: true
    name?: true
    relation?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    riderId?: true
    name?: true
    relation?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: string
    riderId: string
    name: string
    relation: string
    phone: string
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    riderId?: boolean
    name?: boolean
    relation?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rider?: boolean | RiderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    riderId?: boolean
    name?: boolean
    relation?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rider?: boolean | RiderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    riderId?: boolean
    name?: boolean
    relation?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rider?: boolean | RiderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    riderId?: boolean
    name?: boolean
    relation?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "riderId" | "name" | "relation" | "phone" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["contact"]>
  export type ContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | RiderDefaultArgs<ExtArgs>
  }
  export type ContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | RiderDefaultArgs<ExtArgs>
  }
  export type ContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | RiderDefaultArgs<ExtArgs>
  }

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {
      rider: Prisma.$RiderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      riderId: string
      name: string
      relation: string
      phone: string
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rider<T extends RiderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RiderDefaultArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'String'>
    readonly riderId: FieldRef<"Contact", 'String'>
    readonly name: FieldRef<"Contact", 'String'>
    readonly relation: FieldRef<"Contact", 'String'>
    readonly phone: FieldRef<"Contact", 'String'>
    readonly address: FieldRef<"Contact", 'String'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
  }


  /**
   * Model Helmet
   */

  export type AggregateHelmet = {
    _count: HelmetCountAggregateOutputType | null
    _min: HelmetMinAggregateOutputType | null
    _max: HelmetMaxAggregateOutputType | null
  }

  export type HelmetMinAggregateOutputType = {
    id: string | null
    riderId: string | null
    helmetId: string | null
    battery: string | null
    temperature: string | null
    status: $Enums.HelmetStatus | null
    lastActiveAt: Date | null
    latitude: string | null
    longitude: string | null
    signalStrength: $Enums.SignalStrength | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HelmetMaxAggregateOutputType = {
    id: string | null
    riderId: string | null
    helmetId: string | null
    battery: string | null
    temperature: string | null
    status: $Enums.HelmetStatus | null
    lastActiveAt: Date | null
    latitude: string | null
    longitude: string | null
    signalStrength: $Enums.SignalStrength | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HelmetCountAggregateOutputType = {
    id: number
    riderId: number
    helmetId: number
    battery: number
    temperature: number
    status: number
    lastActiveAt: number
    latitude: number
    longitude: number
    signalStrength: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HelmetMinAggregateInputType = {
    id?: true
    riderId?: true
    helmetId?: true
    battery?: true
    temperature?: true
    status?: true
    lastActiveAt?: true
    latitude?: true
    longitude?: true
    signalStrength?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HelmetMaxAggregateInputType = {
    id?: true
    riderId?: true
    helmetId?: true
    battery?: true
    temperature?: true
    status?: true
    lastActiveAt?: true
    latitude?: true
    longitude?: true
    signalStrength?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HelmetCountAggregateInputType = {
    id?: true
    riderId?: true
    helmetId?: true
    battery?: true
    temperature?: true
    status?: true
    lastActiveAt?: true
    latitude?: true
    longitude?: true
    signalStrength?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HelmetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Helmet to aggregate.
     */
    where?: HelmetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Helmets to fetch.
     */
    orderBy?: HelmetOrderByWithRelationInput | HelmetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HelmetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Helmets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Helmets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Helmets
    **/
    _count?: true | HelmetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HelmetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HelmetMaxAggregateInputType
  }

  export type GetHelmetAggregateType<T extends HelmetAggregateArgs> = {
        [P in keyof T & keyof AggregateHelmet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHelmet[P]>
      : GetScalarType<T[P], AggregateHelmet[P]>
  }




  export type HelmetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HelmetWhereInput
    orderBy?: HelmetOrderByWithAggregationInput | HelmetOrderByWithAggregationInput[]
    by: HelmetScalarFieldEnum[] | HelmetScalarFieldEnum
    having?: HelmetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HelmetCountAggregateInputType | true
    _min?: HelmetMinAggregateInputType
    _max?: HelmetMaxAggregateInputType
  }

  export type HelmetGroupByOutputType = {
    id: string
    riderId: string
    helmetId: string
    battery: string | null
    temperature: string | null
    status: $Enums.HelmetStatus | null
    lastActiveAt: Date | null
    latitude: string | null
    longitude: string | null
    signalStrength: $Enums.SignalStrength | null
    createdAt: Date
    updatedAt: Date
    _count: HelmetCountAggregateOutputType | null
    _min: HelmetMinAggregateOutputType | null
    _max: HelmetMaxAggregateOutputType | null
  }

  type GetHelmetGroupByPayload<T extends HelmetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HelmetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HelmetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HelmetGroupByOutputType[P]>
            : GetScalarType<T[P], HelmetGroupByOutputType[P]>
        }
      >
    >


  export type HelmetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    riderId?: boolean
    helmetId?: boolean
    battery?: boolean
    temperature?: boolean
    status?: boolean
    lastActiveAt?: boolean
    latitude?: boolean
    longitude?: boolean
    signalStrength?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    incidents?: boolean | Helmet$incidentsArgs<ExtArgs>
    _count?: boolean | HelmetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["helmet"]>

  export type HelmetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    riderId?: boolean
    helmetId?: boolean
    battery?: boolean
    temperature?: boolean
    status?: boolean
    lastActiveAt?: boolean
    latitude?: boolean
    longitude?: boolean
    signalStrength?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rider?: boolean | RiderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["helmet"]>

  export type HelmetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    riderId?: boolean
    helmetId?: boolean
    battery?: boolean
    temperature?: boolean
    status?: boolean
    lastActiveAt?: boolean
    latitude?: boolean
    longitude?: boolean
    signalStrength?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rider?: boolean | RiderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["helmet"]>

  export type HelmetSelectScalar = {
    id?: boolean
    riderId?: boolean
    helmetId?: boolean
    battery?: boolean
    temperature?: boolean
    status?: boolean
    lastActiveAt?: boolean
    latitude?: boolean
    longitude?: boolean
    signalStrength?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HelmetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "riderId" | "helmetId" | "battery" | "temperature" | "status" | "lastActiveAt" | "latitude" | "longitude" | "signalStrength" | "createdAt" | "updatedAt", ExtArgs["result"]["helmet"]>
  export type HelmetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    incidents?: boolean | Helmet$incidentsArgs<ExtArgs>
    _count?: boolean | HelmetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HelmetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | RiderDefaultArgs<ExtArgs>
  }
  export type HelmetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | RiderDefaultArgs<ExtArgs>
  }

  export type $HelmetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Helmet"
    objects: {
      rider: Prisma.$RiderPayload<ExtArgs>
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      riderId: string
      helmetId: string
      battery: string | null
      temperature: string | null
      status: $Enums.HelmetStatus | null
      lastActiveAt: Date | null
      latitude: string | null
      longitude: string | null
      signalStrength: $Enums.SignalStrength | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["helmet"]>
    composites: {}
  }

  type HelmetGetPayload<S extends boolean | null | undefined | HelmetDefaultArgs> = $Result.GetResult<Prisma.$HelmetPayload, S>

  type HelmetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HelmetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HelmetCountAggregateInputType | true
    }

  export interface HelmetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Helmet'], meta: { name: 'Helmet' } }
    /**
     * Find zero or one Helmet that matches the filter.
     * @param {HelmetFindUniqueArgs} args - Arguments to find a Helmet
     * @example
     * // Get one Helmet
     * const helmet = await prisma.helmet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HelmetFindUniqueArgs>(args: SelectSubset<T, HelmetFindUniqueArgs<ExtArgs>>): Prisma__HelmetClient<$Result.GetResult<Prisma.$HelmetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Helmet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HelmetFindUniqueOrThrowArgs} args - Arguments to find a Helmet
     * @example
     * // Get one Helmet
     * const helmet = await prisma.helmet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HelmetFindUniqueOrThrowArgs>(args: SelectSubset<T, HelmetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HelmetClient<$Result.GetResult<Prisma.$HelmetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Helmet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelmetFindFirstArgs} args - Arguments to find a Helmet
     * @example
     * // Get one Helmet
     * const helmet = await prisma.helmet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HelmetFindFirstArgs>(args?: SelectSubset<T, HelmetFindFirstArgs<ExtArgs>>): Prisma__HelmetClient<$Result.GetResult<Prisma.$HelmetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Helmet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelmetFindFirstOrThrowArgs} args - Arguments to find a Helmet
     * @example
     * // Get one Helmet
     * const helmet = await prisma.helmet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HelmetFindFirstOrThrowArgs>(args?: SelectSubset<T, HelmetFindFirstOrThrowArgs<ExtArgs>>): Prisma__HelmetClient<$Result.GetResult<Prisma.$HelmetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Helmets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelmetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Helmets
     * const helmets = await prisma.helmet.findMany()
     * 
     * // Get first 10 Helmets
     * const helmets = await prisma.helmet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const helmetWithIdOnly = await prisma.helmet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HelmetFindManyArgs>(args?: SelectSubset<T, HelmetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HelmetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Helmet.
     * @param {HelmetCreateArgs} args - Arguments to create a Helmet.
     * @example
     * // Create one Helmet
     * const Helmet = await prisma.helmet.create({
     *   data: {
     *     // ... data to create a Helmet
     *   }
     * })
     * 
     */
    create<T extends HelmetCreateArgs>(args: SelectSubset<T, HelmetCreateArgs<ExtArgs>>): Prisma__HelmetClient<$Result.GetResult<Prisma.$HelmetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Helmets.
     * @param {HelmetCreateManyArgs} args - Arguments to create many Helmets.
     * @example
     * // Create many Helmets
     * const helmet = await prisma.helmet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HelmetCreateManyArgs>(args?: SelectSubset<T, HelmetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Helmets and returns the data saved in the database.
     * @param {HelmetCreateManyAndReturnArgs} args - Arguments to create many Helmets.
     * @example
     * // Create many Helmets
     * const helmet = await prisma.helmet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Helmets and only return the `id`
     * const helmetWithIdOnly = await prisma.helmet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HelmetCreateManyAndReturnArgs>(args?: SelectSubset<T, HelmetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HelmetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Helmet.
     * @param {HelmetDeleteArgs} args - Arguments to delete one Helmet.
     * @example
     * // Delete one Helmet
     * const Helmet = await prisma.helmet.delete({
     *   where: {
     *     // ... filter to delete one Helmet
     *   }
     * })
     * 
     */
    delete<T extends HelmetDeleteArgs>(args: SelectSubset<T, HelmetDeleteArgs<ExtArgs>>): Prisma__HelmetClient<$Result.GetResult<Prisma.$HelmetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Helmet.
     * @param {HelmetUpdateArgs} args - Arguments to update one Helmet.
     * @example
     * // Update one Helmet
     * const helmet = await prisma.helmet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HelmetUpdateArgs>(args: SelectSubset<T, HelmetUpdateArgs<ExtArgs>>): Prisma__HelmetClient<$Result.GetResult<Prisma.$HelmetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Helmets.
     * @param {HelmetDeleteManyArgs} args - Arguments to filter Helmets to delete.
     * @example
     * // Delete a few Helmets
     * const { count } = await prisma.helmet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HelmetDeleteManyArgs>(args?: SelectSubset<T, HelmetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Helmets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelmetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Helmets
     * const helmet = await prisma.helmet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HelmetUpdateManyArgs>(args: SelectSubset<T, HelmetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Helmets and returns the data updated in the database.
     * @param {HelmetUpdateManyAndReturnArgs} args - Arguments to update many Helmets.
     * @example
     * // Update many Helmets
     * const helmet = await prisma.helmet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Helmets and only return the `id`
     * const helmetWithIdOnly = await prisma.helmet.updateManyAndReturn({
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
    updateManyAndReturn<T extends HelmetUpdateManyAndReturnArgs>(args: SelectSubset<T, HelmetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HelmetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Helmet.
     * @param {HelmetUpsertArgs} args - Arguments to update or create a Helmet.
     * @example
     * // Update or create a Helmet
     * const helmet = await prisma.helmet.upsert({
     *   create: {
     *     // ... data to create a Helmet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Helmet we want to update
     *   }
     * })
     */
    upsert<T extends HelmetUpsertArgs>(args: SelectSubset<T, HelmetUpsertArgs<ExtArgs>>): Prisma__HelmetClient<$Result.GetResult<Prisma.$HelmetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Helmets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelmetCountArgs} args - Arguments to filter Helmets to count.
     * @example
     * // Count the number of Helmets
     * const count = await prisma.helmet.count({
     *   where: {
     *     // ... the filter for the Helmets we want to count
     *   }
     * })
    **/
    count<T extends HelmetCountArgs>(
      args?: Subset<T, HelmetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HelmetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Helmet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelmetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HelmetAggregateArgs>(args: Subset<T, HelmetAggregateArgs>): Prisma.PrismaPromise<GetHelmetAggregateType<T>>

    /**
     * Group by Helmet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelmetGroupByArgs} args - Group by arguments.
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
      T extends HelmetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HelmetGroupByArgs['orderBy'] }
        : { orderBy?: HelmetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HelmetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHelmetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Helmet model
   */
  readonly fields: HelmetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Helmet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HelmetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rider<T extends RiderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RiderDefaultArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    incidents<T extends Helmet$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, Helmet$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Helmet model
   */
  interface HelmetFieldRefs {
    readonly id: FieldRef<"Helmet", 'String'>
    readonly riderId: FieldRef<"Helmet", 'String'>
    readonly helmetId: FieldRef<"Helmet", 'String'>
    readonly battery: FieldRef<"Helmet", 'String'>
    readonly temperature: FieldRef<"Helmet", 'String'>
    readonly status: FieldRef<"Helmet", 'HelmetStatus'>
    readonly lastActiveAt: FieldRef<"Helmet", 'DateTime'>
    readonly latitude: FieldRef<"Helmet", 'String'>
    readonly longitude: FieldRef<"Helmet", 'String'>
    readonly signalStrength: FieldRef<"Helmet", 'SignalStrength'>
    readonly createdAt: FieldRef<"Helmet", 'DateTime'>
    readonly updatedAt: FieldRef<"Helmet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Helmet findUnique
   */
  export type HelmetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helmet
     */
    select?: HelmetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Helmet
     */
    omit?: HelmetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelmetInclude<ExtArgs> | null
    /**
     * Filter, which Helmet to fetch.
     */
    where: HelmetWhereUniqueInput
  }

  /**
   * Helmet findUniqueOrThrow
   */
  export type HelmetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helmet
     */
    select?: HelmetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Helmet
     */
    omit?: HelmetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelmetInclude<ExtArgs> | null
    /**
     * Filter, which Helmet to fetch.
     */
    where: HelmetWhereUniqueInput
  }

  /**
   * Helmet findFirst
   */
  export type HelmetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helmet
     */
    select?: HelmetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Helmet
     */
    omit?: HelmetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelmetInclude<ExtArgs> | null
    /**
     * Filter, which Helmet to fetch.
     */
    where?: HelmetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Helmets to fetch.
     */
    orderBy?: HelmetOrderByWithRelationInput | HelmetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Helmets.
     */
    cursor?: HelmetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Helmets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Helmets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Helmets.
     */
    distinct?: HelmetScalarFieldEnum | HelmetScalarFieldEnum[]
  }

  /**
   * Helmet findFirstOrThrow
   */
  export type HelmetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helmet
     */
    select?: HelmetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Helmet
     */
    omit?: HelmetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelmetInclude<ExtArgs> | null
    /**
     * Filter, which Helmet to fetch.
     */
    where?: HelmetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Helmets to fetch.
     */
    orderBy?: HelmetOrderByWithRelationInput | HelmetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Helmets.
     */
    cursor?: HelmetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Helmets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Helmets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Helmets.
     */
    distinct?: HelmetScalarFieldEnum | HelmetScalarFieldEnum[]
  }

  /**
   * Helmet findMany
   */
  export type HelmetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helmet
     */
    select?: HelmetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Helmet
     */
    omit?: HelmetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelmetInclude<ExtArgs> | null
    /**
     * Filter, which Helmets to fetch.
     */
    where?: HelmetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Helmets to fetch.
     */
    orderBy?: HelmetOrderByWithRelationInput | HelmetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Helmets.
     */
    cursor?: HelmetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Helmets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Helmets.
     */
    skip?: number
    distinct?: HelmetScalarFieldEnum | HelmetScalarFieldEnum[]
  }

  /**
   * Helmet create
   */
  export type HelmetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helmet
     */
    select?: HelmetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Helmet
     */
    omit?: HelmetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelmetInclude<ExtArgs> | null
    /**
     * The data needed to create a Helmet.
     */
    data: XOR<HelmetCreateInput, HelmetUncheckedCreateInput>
  }

  /**
   * Helmet createMany
   */
  export type HelmetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Helmets.
     */
    data: HelmetCreateManyInput | HelmetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Helmet createManyAndReturn
   */
  export type HelmetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helmet
     */
    select?: HelmetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Helmet
     */
    omit?: HelmetOmit<ExtArgs> | null
    /**
     * The data used to create many Helmets.
     */
    data: HelmetCreateManyInput | HelmetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelmetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Helmet update
   */
  export type HelmetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helmet
     */
    select?: HelmetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Helmet
     */
    omit?: HelmetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelmetInclude<ExtArgs> | null
    /**
     * The data needed to update a Helmet.
     */
    data: XOR<HelmetUpdateInput, HelmetUncheckedUpdateInput>
    /**
     * Choose, which Helmet to update.
     */
    where: HelmetWhereUniqueInput
  }

  /**
   * Helmet updateMany
   */
  export type HelmetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Helmets.
     */
    data: XOR<HelmetUpdateManyMutationInput, HelmetUncheckedUpdateManyInput>
    /**
     * Filter which Helmets to update
     */
    where?: HelmetWhereInput
    /**
     * Limit how many Helmets to update.
     */
    limit?: number
  }

  /**
   * Helmet updateManyAndReturn
   */
  export type HelmetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helmet
     */
    select?: HelmetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Helmet
     */
    omit?: HelmetOmit<ExtArgs> | null
    /**
     * The data used to update Helmets.
     */
    data: XOR<HelmetUpdateManyMutationInput, HelmetUncheckedUpdateManyInput>
    /**
     * Filter which Helmets to update
     */
    where?: HelmetWhereInput
    /**
     * Limit how many Helmets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelmetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Helmet upsert
   */
  export type HelmetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helmet
     */
    select?: HelmetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Helmet
     */
    omit?: HelmetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelmetInclude<ExtArgs> | null
    /**
     * The filter to search for the Helmet to update in case it exists.
     */
    where: HelmetWhereUniqueInput
    /**
     * In case the Helmet found by the `where` argument doesn't exist, create a new Helmet with this data.
     */
    create: XOR<HelmetCreateInput, HelmetUncheckedCreateInput>
    /**
     * In case the Helmet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HelmetUpdateInput, HelmetUncheckedUpdateInput>
  }

  /**
   * Helmet delete
   */
  export type HelmetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helmet
     */
    select?: HelmetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Helmet
     */
    omit?: HelmetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelmetInclude<ExtArgs> | null
    /**
     * Filter which Helmet to delete.
     */
    where: HelmetWhereUniqueInput
  }

  /**
   * Helmet deleteMany
   */
  export type HelmetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Helmets to delete
     */
    where?: HelmetWhereInput
    /**
     * Limit how many Helmets to delete.
     */
    limit?: number
  }

  /**
   * Helmet.incidents
   */
  export type Helmet$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Helmet without action
   */
  export type HelmetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helmet
     */
    select?: HelmetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Helmet
     */
    omit?: HelmetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelmetInclude<ExtArgs> | null
  }


  /**
   * Model Incident
   */

  export type AggregateIncident = {
    _count: IncidentCountAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  export type IncidentMinAggregateOutputType = {
    id: string | null
    incidentId: string | null
    riderId: string | null
    helmetId: string | null
    longitude: string | null
    latitude: string | null
    location: string | null
    description: string | null
    date: Date | null
    status: $Enums.IncidentStatus | null
    severity: $Enums.Severity | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncidentMaxAggregateOutputType = {
    id: string | null
    incidentId: string | null
    riderId: string | null
    helmetId: string | null
    longitude: string | null
    latitude: string | null
    location: string | null
    description: string | null
    date: Date | null
    status: $Enums.IncidentStatus | null
    severity: $Enums.Severity | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncidentCountAggregateOutputType = {
    id: number
    incidentId: number
    riderId: number
    helmetId: number
    longitude: number
    latitude: number
    location: number
    description: number
    date: number
    status: number
    severity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IncidentMinAggregateInputType = {
    id?: true
    incidentId?: true
    riderId?: true
    helmetId?: true
    longitude?: true
    latitude?: true
    location?: true
    description?: true
    date?: true
    status?: true
    severity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncidentMaxAggregateInputType = {
    id?: true
    incidentId?: true
    riderId?: true
    helmetId?: true
    longitude?: true
    latitude?: true
    location?: true
    description?: true
    date?: true
    status?: true
    severity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncidentCountAggregateInputType = {
    id?: true
    incidentId?: true
    riderId?: true
    helmetId?: true
    longitude?: true
    latitude?: true
    location?: true
    description?: true
    date?: true
    status?: true
    severity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IncidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incident to aggregate.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incidents
    **/
    _count?: true | IncidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentMaxAggregateInputType
  }

  export type GetIncidentAggregateType<T extends IncidentAggregateArgs> = {
        [P in keyof T & keyof AggregateIncident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncident[P]>
      : GetScalarType<T[P], AggregateIncident[P]>
  }




  export type IncidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithAggregationInput | IncidentOrderByWithAggregationInput[]
    by: IncidentScalarFieldEnum[] | IncidentScalarFieldEnum
    having?: IncidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentCountAggregateInputType | true
    _min?: IncidentMinAggregateInputType
    _max?: IncidentMaxAggregateInputType
  }

  export type IncidentGroupByOutputType = {
    id: string
    incidentId: string
    riderId: string
    helmetId: string
    longitude: string | null
    latitude: string | null
    location: string | null
    description: string | null
    date: Date
    status: $Enums.IncidentStatus
    severity: $Enums.Severity
    createdAt: Date
    updatedAt: Date
    _count: IncidentCountAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  type GetIncidentGroupByPayload<T extends IncidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentGroupByOutputType[P]>
        }
      >
    >


  export type IncidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    riderId?: boolean
    helmetId?: boolean
    longitude?: boolean
    latitude?: boolean
    location?: boolean
    description?: boolean
    date?: boolean
    status?: boolean
    severity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    helmet?: boolean | HelmetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    riderId?: boolean
    helmetId?: boolean
    longitude?: boolean
    latitude?: boolean
    location?: boolean
    description?: boolean
    date?: boolean
    status?: boolean
    severity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    helmet?: boolean | HelmetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    riderId?: boolean
    helmetId?: boolean
    longitude?: boolean
    latitude?: boolean
    location?: boolean
    description?: boolean
    date?: boolean
    status?: boolean
    severity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    helmet?: boolean | HelmetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectScalar = {
    id?: boolean
    incidentId?: boolean
    riderId?: boolean
    helmetId?: boolean
    longitude?: boolean
    latitude?: boolean
    location?: boolean
    description?: boolean
    date?: boolean
    status?: boolean
    severity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IncidentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "incidentId" | "riderId" | "helmetId" | "longitude" | "latitude" | "location" | "description" | "date" | "status" | "severity" | "createdAt" | "updatedAt", ExtArgs["result"]["incident"]>
  export type IncidentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    helmet?: boolean | HelmetDefaultArgs<ExtArgs>
  }
  export type IncidentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    helmet?: boolean | HelmetDefaultArgs<ExtArgs>
  }
  export type IncidentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    helmet?: boolean | HelmetDefaultArgs<ExtArgs>
  }

  export type $IncidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Incident"
    objects: {
      rider: Prisma.$RiderPayload<ExtArgs>
      helmet: Prisma.$HelmetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      incidentId: string
      riderId: string
      helmetId: string
      longitude: string | null
      latitude: string | null
      location: string | null
      description: string | null
      date: Date
      status: $Enums.IncidentStatus
      severity: $Enums.Severity
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["incident"]>
    composites: {}
  }

  type IncidentGetPayload<S extends boolean | null | undefined | IncidentDefaultArgs> = $Result.GetResult<Prisma.$IncidentPayload, S>

  type IncidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentCountAggregateInputType | true
    }

  export interface IncidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Incident'], meta: { name: 'Incident' } }
    /**
     * Find zero or one Incident that matches the filter.
     * @param {IncidentFindUniqueArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentFindUniqueArgs>(args: SelectSubset<T, IncidentFindUniqueArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Incident that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentFindUniqueOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentFindFirstArgs>(args?: SelectSubset<T, IncidentFindFirstArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incidents
     * const incidents = await prisma.incident.findMany()
     * 
     * // Get first 10 Incidents
     * const incidents = await prisma.incident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentWithIdOnly = await prisma.incident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentFindManyArgs>(args?: SelectSubset<T, IncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Incident.
     * @param {IncidentCreateArgs} args - Arguments to create a Incident.
     * @example
     * // Create one Incident
     * const Incident = await prisma.incident.create({
     *   data: {
     *     // ... data to create a Incident
     *   }
     * })
     * 
     */
    create<T extends IncidentCreateArgs>(args: SelectSubset<T, IncidentCreateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incidents.
     * @param {IncidentCreateManyArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentCreateManyArgs>(args?: SelectSubset<T, IncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Incidents and returns the data saved in the database.
     * @param {IncidentCreateManyAndReturnArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Incident.
     * @param {IncidentDeleteArgs} args - Arguments to delete one Incident.
     * @example
     * // Delete one Incident
     * const Incident = await prisma.incident.delete({
     *   where: {
     *     // ... filter to delete one Incident
     *   }
     * })
     * 
     */
    delete<T extends IncidentDeleteArgs>(args: SelectSubset<T, IncidentDeleteArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Incident.
     * @param {IncidentUpdateArgs} args - Arguments to update one Incident.
     * @example
     * // Update one Incident
     * const incident = await prisma.incident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentUpdateArgs>(args: SelectSubset<T, IncidentUpdateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incidents.
     * @param {IncidentDeleteManyArgs} args - Arguments to filter Incidents to delete.
     * @example
     * // Delete a few Incidents
     * const { count } = await prisma.incident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentDeleteManyArgs>(args?: SelectSubset<T, IncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentUpdateManyArgs>(args: SelectSubset<T, IncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents and returns the data updated in the database.
     * @param {IncidentUpdateManyAndReturnArgs} args - Arguments to update many Incidents.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.updateManyAndReturn({
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
    updateManyAndReturn<T extends IncidentUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Incident.
     * @param {IncidentUpsertArgs} args - Arguments to update or create a Incident.
     * @example
     * // Update or create a Incident
     * const incident = await prisma.incident.upsert({
     *   create: {
     *     // ... data to create a Incident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incident we want to update
     *   }
     * })
     */
    upsert<T extends IncidentUpsertArgs>(args: SelectSubset<T, IncidentUpsertArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentCountArgs} args - Arguments to filter Incidents to count.
     * @example
     * // Count the number of Incidents
     * const count = await prisma.incident.count({
     *   where: {
     *     // ... the filter for the Incidents we want to count
     *   }
     * })
    **/
    count<T extends IncidentCountArgs>(
      args?: Subset<T, IncidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IncidentAggregateArgs>(args: Subset<T, IncidentAggregateArgs>): Prisma.PrismaPromise<GetIncidentAggregateType<T>>

    /**
     * Group by Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentGroupByArgs} args - Group by arguments.
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
      T extends IncidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentGroupByArgs['orderBy'] }
        : { orderBy?: IncidentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Incident model
   */
  readonly fields: IncidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Incident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rider<T extends RiderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RiderDefaultArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    helmet<T extends HelmetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HelmetDefaultArgs<ExtArgs>>): Prisma__HelmetClient<$Result.GetResult<Prisma.$HelmetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Incident model
   */
  interface IncidentFieldRefs {
    readonly id: FieldRef<"Incident", 'String'>
    readonly incidentId: FieldRef<"Incident", 'String'>
    readonly riderId: FieldRef<"Incident", 'String'>
    readonly helmetId: FieldRef<"Incident", 'String'>
    readonly longitude: FieldRef<"Incident", 'String'>
    readonly latitude: FieldRef<"Incident", 'String'>
    readonly location: FieldRef<"Incident", 'String'>
    readonly description: FieldRef<"Incident", 'String'>
    readonly date: FieldRef<"Incident", 'DateTime'>
    readonly status: FieldRef<"Incident", 'IncidentStatus'>
    readonly severity: FieldRef<"Incident", 'Severity'>
    readonly createdAt: FieldRef<"Incident", 'DateTime'>
    readonly updatedAt: FieldRef<"Incident", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Incident findUnique
   */
  export type IncidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findUniqueOrThrow
   */
  export type IncidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findFirst
   */
  export type IncidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findFirstOrThrow
   */
  export type IncidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findMany
   */
  export type IncidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incidents to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident create
   */
  export type IncidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to create a Incident.
     */
    data: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
  }

  /**
   * Incident createMany
   */
  export type IncidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Incident createManyAndReturn
   */
  export type IncidentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident update
   */
  export type IncidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to update a Incident.
     */
    data: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
    /**
     * Choose, which Incident to update.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident updateMany
   */
  export type IncidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
  }

  /**
   * Incident updateManyAndReturn
   */
  export type IncidentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident upsert
   */
  export type IncidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The filter to search for the Incident to update in case it exists.
     */
    where: IncidentWhereUniqueInput
    /**
     * In case the Incident found by the `where` argument doesn't exist, create a new Incident with this data.
     */
    create: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
    /**
     * In case the Incident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
  }

  /**
   * Incident delete
   */
  export type IncidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter which Incident to delete.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident deleteMany
   */
  export type IncidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidents to delete
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to delete.
     */
    limit?: number
  }

  /**
   * Incident without action
   */
  export type IncidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    image: 'image',
    role: 'role',
    lastLogin: 'lastLogin',
    resetPasswordToken: 'resetPasswordToken',
    resetPasswordExpires: 'resetPasswordExpires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RiderScalarFieldEnum: {
    id: 'id',
    riderId: 'riderId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    hasHadIncident: 'hasHadIncident',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RiderScalarFieldEnum = (typeof RiderScalarFieldEnum)[keyof typeof RiderScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    riderId: 'riderId',
    name: 'name',
    relation: 'relation',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const HelmetScalarFieldEnum: {
    id: 'id',
    riderId: 'riderId',
    helmetId: 'helmetId',
    battery: 'battery',
    temperature: 'temperature',
    status: 'status',
    lastActiveAt: 'lastActiveAt',
    latitude: 'latitude',
    longitude: 'longitude',
    signalStrength: 'signalStrength',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HelmetScalarFieldEnum = (typeof HelmetScalarFieldEnum)[keyof typeof HelmetScalarFieldEnum]


  export const IncidentScalarFieldEnum: {
    id: 'id',
    incidentId: 'incidentId',
    riderId: 'riderId',
    helmetId: 'helmetId',
    longitude: 'longitude',
    latitude: 'latitude',
    location: 'location',
    description: 'description',
    date: 'date',
    status: 'status',
    severity: 'severity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IncidentScalarFieldEnum = (typeof IncidentScalarFieldEnum)[keyof typeof IncidentScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'HelmetStatus'
   */
  export type EnumHelmetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HelmetStatus'>
    


  /**
   * Reference to a field of type 'HelmetStatus[]'
   */
  export type ListEnumHelmetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HelmetStatus[]'>
    


  /**
   * Reference to a field of type 'SignalStrength'
   */
  export type EnumSignalStrengthFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SignalStrength'>
    


  /**
   * Reference to a field of type 'SignalStrength[]'
   */
  export type ListEnumSignalStrengthFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SignalStrength[]'>
    


  /**
   * Reference to a field of type 'IncidentStatus'
   */
  export type EnumIncidentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentStatus'>
    


  /**
   * Reference to a field of type 'IncidentStatus[]'
   */
  export type ListEnumIncidentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentStatus[]'>
    


  /**
   * Reference to a field of type 'Severity'
   */
  export type EnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity'>
    


  /**
   * Reference to a field of type 'Severity[]'
   */
  export type ListEnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    resetPasswordToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    resetPasswordExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email" | "resetPasswordToken">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RiderWhereInput = {
    AND?: RiderWhereInput | RiderWhereInput[]
    OR?: RiderWhereInput[]
    NOT?: RiderWhereInput | RiderWhereInput[]
    id?: StringFilter<"Rider"> | string
    riderId?: StringFilter<"Rider"> | string
    name?: StringFilter<"Rider"> | string
    email?: StringFilter<"Rider"> | string
    phone?: StringFilter<"Rider"> | string
    address?: StringNullableFilter<"Rider"> | string | null
    hasHadIncident?: BoolFilter<"Rider"> | boolean
    createdAt?: DateTimeFilter<"Rider"> | Date | string
    updatedAt?: DateTimeFilter<"Rider"> | Date | string
    emergencyContact?: XOR<ContactNullableScalarRelationFilter, ContactWhereInput> | null
    helmet?: XOR<HelmetNullableScalarRelationFilter, HelmetWhereInput> | null
    incidents?: IncidentListRelationFilter
  }

  export type RiderOrderByWithRelationInput = {
    id?: SortOrder
    riderId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    hasHadIncident?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emergencyContact?: ContactOrderByWithRelationInput
    helmet?: HelmetOrderByWithRelationInput
    incidents?: IncidentOrderByRelationAggregateInput
  }

  export type RiderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    riderId?: string
    email?: string
    AND?: RiderWhereInput | RiderWhereInput[]
    OR?: RiderWhereInput[]
    NOT?: RiderWhereInput | RiderWhereInput[]
    name?: StringFilter<"Rider"> | string
    phone?: StringFilter<"Rider"> | string
    address?: StringNullableFilter<"Rider"> | string | null
    hasHadIncident?: BoolFilter<"Rider"> | boolean
    createdAt?: DateTimeFilter<"Rider"> | Date | string
    updatedAt?: DateTimeFilter<"Rider"> | Date | string
    emergencyContact?: XOR<ContactNullableScalarRelationFilter, ContactWhereInput> | null
    helmet?: XOR<HelmetNullableScalarRelationFilter, HelmetWhereInput> | null
    incidents?: IncidentListRelationFilter
  }, "id" | "riderId" | "email">

  export type RiderOrderByWithAggregationInput = {
    id?: SortOrder
    riderId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    hasHadIncident?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RiderCountOrderByAggregateInput
    _max?: RiderMaxOrderByAggregateInput
    _min?: RiderMinOrderByAggregateInput
  }

  export type RiderScalarWhereWithAggregatesInput = {
    AND?: RiderScalarWhereWithAggregatesInput | RiderScalarWhereWithAggregatesInput[]
    OR?: RiderScalarWhereWithAggregatesInput[]
    NOT?: RiderScalarWhereWithAggregatesInput | RiderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rider"> | string
    riderId?: StringWithAggregatesFilter<"Rider"> | string
    name?: StringWithAggregatesFilter<"Rider"> | string
    email?: StringWithAggregatesFilter<"Rider"> | string
    phone?: StringWithAggregatesFilter<"Rider"> | string
    address?: StringNullableWithAggregatesFilter<"Rider"> | string | null
    hasHadIncident?: BoolWithAggregatesFilter<"Rider"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Rider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rider"> | Date | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: StringFilter<"Contact"> | string
    riderId?: StringFilter<"Contact"> | string
    name?: StringFilter<"Contact"> | string
    relation?: StringFilter<"Contact"> | string
    phone?: StringFilter<"Contact"> | string
    address?: StringNullableFilter<"Contact"> | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    rider?: XOR<RiderScalarRelationFilter, RiderWhereInput>
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    riderId?: SortOrder
    name?: SortOrder
    relation?: SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rider?: RiderOrderByWithRelationInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    riderId?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    name?: StringFilter<"Contact"> | string
    relation?: StringFilter<"Contact"> | string
    phone?: StringFilter<"Contact"> | string
    address?: StringNullableFilter<"Contact"> | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    rider?: XOR<RiderScalarRelationFilter, RiderWhereInput>
  }, "id" | "riderId">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    riderId?: SortOrder
    name?: SortOrder
    relation?: SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contact"> | string
    riderId?: StringWithAggregatesFilter<"Contact"> | string
    name?: StringWithAggregatesFilter<"Contact"> | string
    relation?: StringWithAggregatesFilter<"Contact"> | string
    phone?: StringWithAggregatesFilter<"Contact"> | string
    address?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type HelmetWhereInput = {
    AND?: HelmetWhereInput | HelmetWhereInput[]
    OR?: HelmetWhereInput[]
    NOT?: HelmetWhereInput | HelmetWhereInput[]
    id?: StringFilter<"Helmet"> | string
    riderId?: StringFilter<"Helmet"> | string
    helmetId?: StringFilter<"Helmet"> | string
    battery?: StringNullableFilter<"Helmet"> | string | null
    temperature?: StringNullableFilter<"Helmet"> | string | null
    status?: EnumHelmetStatusNullableFilter<"Helmet"> | $Enums.HelmetStatus | null
    lastActiveAt?: DateTimeNullableFilter<"Helmet"> | Date | string | null
    latitude?: StringNullableFilter<"Helmet"> | string | null
    longitude?: StringNullableFilter<"Helmet"> | string | null
    signalStrength?: EnumSignalStrengthNullableFilter<"Helmet"> | $Enums.SignalStrength | null
    createdAt?: DateTimeFilter<"Helmet"> | Date | string
    updatedAt?: DateTimeFilter<"Helmet"> | Date | string
    rider?: XOR<RiderScalarRelationFilter, RiderWhereInput>
    incidents?: IncidentListRelationFilter
  }

  export type HelmetOrderByWithRelationInput = {
    id?: SortOrder
    riderId?: SortOrder
    helmetId?: SortOrder
    battery?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    lastActiveAt?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    signalStrength?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rider?: RiderOrderByWithRelationInput
    incidents?: IncidentOrderByRelationAggregateInput
  }

  export type HelmetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    riderId?: string
    helmetId?: string
    AND?: HelmetWhereInput | HelmetWhereInput[]
    OR?: HelmetWhereInput[]
    NOT?: HelmetWhereInput | HelmetWhereInput[]
    battery?: StringNullableFilter<"Helmet"> | string | null
    temperature?: StringNullableFilter<"Helmet"> | string | null
    status?: EnumHelmetStatusNullableFilter<"Helmet"> | $Enums.HelmetStatus | null
    lastActiveAt?: DateTimeNullableFilter<"Helmet"> | Date | string | null
    latitude?: StringNullableFilter<"Helmet"> | string | null
    longitude?: StringNullableFilter<"Helmet"> | string | null
    signalStrength?: EnumSignalStrengthNullableFilter<"Helmet"> | $Enums.SignalStrength | null
    createdAt?: DateTimeFilter<"Helmet"> | Date | string
    updatedAt?: DateTimeFilter<"Helmet"> | Date | string
    rider?: XOR<RiderScalarRelationFilter, RiderWhereInput>
    incidents?: IncidentListRelationFilter
  }, "id" | "riderId" | "helmetId">

  export type HelmetOrderByWithAggregationInput = {
    id?: SortOrder
    riderId?: SortOrder
    helmetId?: SortOrder
    battery?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    lastActiveAt?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    signalStrength?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HelmetCountOrderByAggregateInput
    _max?: HelmetMaxOrderByAggregateInput
    _min?: HelmetMinOrderByAggregateInput
  }

  export type HelmetScalarWhereWithAggregatesInput = {
    AND?: HelmetScalarWhereWithAggregatesInput | HelmetScalarWhereWithAggregatesInput[]
    OR?: HelmetScalarWhereWithAggregatesInput[]
    NOT?: HelmetScalarWhereWithAggregatesInput | HelmetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Helmet"> | string
    riderId?: StringWithAggregatesFilter<"Helmet"> | string
    helmetId?: StringWithAggregatesFilter<"Helmet"> | string
    battery?: StringNullableWithAggregatesFilter<"Helmet"> | string | null
    temperature?: StringNullableWithAggregatesFilter<"Helmet"> | string | null
    status?: EnumHelmetStatusNullableWithAggregatesFilter<"Helmet"> | $Enums.HelmetStatus | null
    lastActiveAt?: DateTimeNullableWithAggregatesFilter<"Helmet"> | Date | string | null
    latitude?: StringNullableWithAggregatesFilter<"Helmet"> | string | null
    longitude?: StringNullableWithAggregatesFilter<"Helmet"> | string | null
    signalStrength?: EnumSignalStrengthNullableWithAggregatesFilter<"Helmet"> | $Enums.SignalStrength | null
    createdAt?: DateTimeWithAggregatesFilter<"Helmet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Helmet"> | Date | string
  }

  export type IncidentWhereInput = {
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    id?: StringFilter<"Incident"> | string
    incidentId?: StringFilter<"Incident"> | string
    riderId?: StringFilter<"Incident"> | string
    helmetId?: StringFilter<"Incident"> | string
    longitude?: StringNullableFilter<"Incident"> | string | null
    latitude?: StringNullableFilter<"Incident"> | string | null
    location?: StringNullableFilter<"Incident"> | string | null
    description?: StringNullableFilter<"Incident"> | string | null
    date?: DateTimeFilter<"Incident"> | Date | string
    status?: EnumIncidentStatusFilter<"Incident"> | $Enums.IncidentStatus
    severity?: EnumSeverityFilter<"Incident"> | $Enums.Severity
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
    rider?: XOR<RiderScalarRelationFilter, RiderWhereInput>
    helmet?: XOR<HelmetScalarRelationFilter, HelmetWhereInput>
  }

  export type IncidentOrderByWithRelationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    riderId?: SortOrder
    helmetId?: SortOrder
    longitude?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rider?: RiderOrderByWithRelationInput
    helmet?: HelmetOrderByWithRelationInput
  }

  export type IncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    incidentId?: string
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    riderId?: StringFilter<"Incident"> | string
    helmetId?: StringFilter<"Incident"> | string
    longitude?: StringNullableFilter<"Incident"> | string | null
    latitude?: StringNullableFilter<"Incident"> | string | null
    location?: StringNullableFilter<"Incident"> | string | null
    description?: StringNullableFilter<"Incident"> | string | null
    date?: DateTimeFilter<"Incident"> | Date | string
    status?: EnumIncidentStatusFilter<"Incident"> | $Enums.IncidentStatus
    severity?: EnumSeverityFilter<"Incident"> | $Enums.Severity
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
    rider?: XOR<RiderScalarRelationFilter, RiderWhereInput>
    helmet?: XOR<HelmetScalarRelationFilter, HelmetWhereInput>
  }, "id" | "incidentId">

  export type IncidentOrderByWithAggregationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    riderId?: SortOrder
    helmetId?: SortOrder
    longitude?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IncidentCountOrderByAggregateInput
    _max?: IncidentMaxOrderByAggregateInput
    _min?: IncidentMinOrderByAggregateInput
  }

  export type IncidentScalarWhereWithAggregatesInput = {
    AND?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    OR?: IncidentScalarWhereWithAggregatesInput[]
    NOT?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Incident"> | string
    incidentId?: StringWithAggregatesFilter<"Incident"> | string
    riderId?: StringWithAggregatesFilter<"Incident"> | string
    helmetId?: StringWithAggregatesFilter<"Incident"> | string
    longitude?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    latitude?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    location?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    description?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    date?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
    status?: EnumIncidentStatusWithAggregatesFilter<"Incident"> | $Enums.IncidentStatus
    severity?: EnumSeverityWithAggregatesFilter<"Incident"> | $Enums.Severity
    createdAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    role?: $Enums.UserRole
    lastLogin?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    role?: $Enums.UserRole
    lastLogin?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    role?: $Enums.UserRole
    lastLogin?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiderCreateInput = {
    id?: string
    riderId: string
    name: string
    email: string
    phone: string
    address?: string | null
    hasHadIncident?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencyContact?: ContactCreateNestedOneWithoutRiderInput
    helmet?: HelmetCreateNestedOneWithoutRiderInput
    incidents?: IncidentCreateNestedManyWithoutRiderInput
  }

  export type RiderUncheckedCreateInput = {
    id?: string
    riderId: string
    name: string
    email: string
    phone: string
    address?: string | null
    hasHadIncident?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencyContact?: ContactUncheckedCreateNestedOneWithoutRiderInput
    helmet?: HelmetUncheckedCreateNestedOneWithoutRiderInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutRiderInput
  }

  export type RiderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    riderId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    hasHadIncident?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencyContact?: ContactUpdateOneWithoutRiderNestedInput
    helmet?: HelmetUpdateOneWithoutRiderNestedInput
    incidents?: IncidentUpdateManyWithoutRiderNestedInput
  }

  export type RiderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    riderId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    hasHadIncident?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencyContact?: ContactUncheckedUpdateOneWithoutRiderNestedInput
    helmet?: HelmetUncheckedUpdateOneWithoutRiderNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutRiderNestedInput
  }

  export type RiderCreateManyInput = {
    id?: string
    riderId: string
    name: string
    email: string
    phone: string
    address?: string | null
    hasHadIncident?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    riderId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    hasHadIncident?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    riderId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    hasHadIncident?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateInput = {
    id?: string
    name: string
    relation: string
    phone: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rider: RiderCreateNestedOneWithoutEmergencyContactInput
  }

  export type ContactUncheckedCreateInput = {
    id?: string
    riderId: string
    name: string
    relation: string
    phone: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateOneRequiredWithoutEmergencyContactNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    riderId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyInput = {
    id?: string
    riderId: string
    name: string
    relation: string
    phone: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    riderId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HelmetCreateInput = {
    id?: string
    helmetId: string
    battery?: string | null
    temperature?: string | null
    status?: $Enums.HelmetStatus | null
    lastActiveAt?: Date | string | null
    latitude?: string | null
    longitude?: string | null
    signalStrength?: $Enums.SignalStrength | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rider: RiderCreateNestedOneWithoutHelmetInput
    incidents?: IncidentCreateNestedManyWithoutHelmetInput
  }

  export type HelmetUncheckedCreateInput = {
    id?: string
    riderId: string
    helmetId: string
    battery?: string | null
    temperature?: string | null
    status?: $Enums.HelmetStatus | null
    lastActiveAt?: Date | string | null
    latitude?: string | null
    longitude?: string | null
    signalStrength?: $Enums.SignalStrength | null
    createdAt?: Date | string
    updatedAt?: Date | string
    incidents?: IncidentUncheckedCreateNestedManyWithoutHelmetInput
  }

  export type HelmetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    helmetId?: StringFieldUpdateOperationsInput | string
    battery?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumHelmetStatusFieldUpdateOperationsInput | $Enums.HelmetStatus | null
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    signalStrength?: NullableEnumSignalStrengthFieldUpdateOperationsInput | $Enums.SignalStrength | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateOneRequiredWithoutHelmetNestedInput
    incidents?: IncidentUpdateManyWithoutHelmetNestedInput
  }

  export type HelmetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    riderId?: StringFieldUpdateOperationsInput | string
    helmetId?: StringFieldUpdateOperationsInput | string
    battery?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumHelmetStatusFieldUpdateOperationsInput | $Enums.HelmetStatus | null
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    signalStrength?: NullableEnumSignalStrengthFieldUpdateOperationsInput | $Enums.SignalStrength | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUncheckedUpdateManyWithoutHelmetNestedInput
  }

  export type HelmetCreateManyInput = {
    id?: string
    riderId: string
    helmetId: string
    battery?: string | null
    temperature?: string | null
    status?: $Enums.HelmetStatus | null
    lastActiveAt?: Date | string | null
    latitude?: string | null
    longitude?: string | null
    signalStrength?: $Enums.SignalStrength | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HelmetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    helmetId?: StringFieldUpdateOperationsInput | string
    battery?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumHelmetStatusFieldUpdateOperationsInput | $Enums.HelmetStatus | null
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    signalStrength?: NullableEnumSignalStrengthFieldUpdateOperationsInput | $Enums.SignalStrength | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HelmetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    riderId?: StringFieldUpdateOperationsInput | string
    helmetId?: StringFieldUpdateOperationsInput | string
    battery?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumHelmetStatusFieldUpdateOperationsInput | $Enums.HelmetStatus | null
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    signalStrength?: NullableEnumSignalStrengthFieldUpdateOperationsInput | $Enums.SignalStrength | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateInput = {
    id?: string
    incidentId: string
    longitude?: string | null
    latitude?: string | null
    location?: string | null
    description?: string | null
    date: Date | string
    status: $Enums.IncidentStatus
    severity: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
    rider: RiderCreateNestedOneWithoutIncidentsInput
    helmet: HelmetCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateInput = {
    id?: string
    incidentId: string
    riderId: string
    helmetId: string
    longitude?: string | null
    latitude?: string | null
    location?: string | null
    description?: string | null
    date: Date | string
    status: $Enums.IncidentStatus
    severity: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateOneRequiredWithoutIncidentsNestedInput
    helmet?: HelmetUpdateOneRequiredWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    riderId?: StringFieldUpdateOperationsInput | string
    helmetId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateManyInput = {
    id?: string
    incidentId: string
    riderId: string
    helmetId: string
    longitude?: string | null
    latitude?: string | null
    location?: string | null
    description?: string | null
    date: Date | string
    status: $Enums.IncidentStatus
    severity: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    riderId?: StringFieldUpdateOperationsInput | string
    helmetId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ContactNullableScalarRelationFilter = {
    is?: ContactWhereInput | null
    isNot?: ContactWhereInput | null
  }

  export type HelmetNullableScalarRelationFilter = {
    is?: HelmetWhereInput | null
    isNot?: HelmetWhereInput | null
  }

  export type IncidentListRelationFilter = {
    every?: IncidentWhereInput
    some?: IncidentWhereInput
    none?: IncidentWhereInput
  }

  export type IncidentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RiderCountOrderByAggregateInput = {
    id?: SortOrder
    riderId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    hasHadIncident?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiderMaxOrderByAggregateInput = {
    id?: SortOrder
    riderId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    hasHadIncident?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiderMinOrderByAggregateInput = {
    id?: SortOrder
    riderId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    hasHadIncident?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RiderScalarRelationFilter = {
    is?: RiderWhereInput
    isNot?: RiderWhereInput
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    riderId?: SortOrder
    name?: SortOrder
    relation?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    riderId?: SortOrder
    name?: SortOrder
    relation?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    riderId?: SortOrder
    name?: SortOrder
    relation?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumHelmetStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.HelmetStatus | EnumHelmetStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.HelmetStatus[] | ListEnumHelmetStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.HelmetStatus[] | ListEnumHelmetStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumHelmetStatusNullableFilter<$PrismaModel> | $Enums.HelmetStatus | null
  }

  export type EnumSignalStrengthNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SignalStrength | EnumSignalStrengthFieldRefInput<$PrismaModel> | null
    in?: $Enums.SignalStrength[] | ListEnumSignalStrengthFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SignalStrength[] | ListEnumSignalStrengthFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSignalStrengthNullableFilter<$PrismaModel> | $Enums.SignalStrength | null
  }

  export type HelmetCountOrderByAggregateInput = {
    id?: SortOrder
    riderId?: SortOrder
    helmetId?: SortOrder
    battery?: SortOrder
    temperature?: SortOrder
    status?: SortOrder
    lastActiveAt?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    signalStrength?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HelmetMaxOrderByAggregateInput = {
    id?: SortOrder
    riderId?: SortOrder
    helmetId?: SortOrder
    battery?: SortOrder
    temperature?: SortOrder
    status?: SortOrder
    lastActiveAt?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    signalStrength?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HelmetMinOrderByAggregateInput = {
    id?: SortOrder
    riderId?: SortOrder
    helmetId?: SortOrder
    battery?: SortOrder
    temperature?: SortOrder
    status?: SortOrder
    lastActiveAt?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    signalStrength?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumHelmetStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HelmetStatus | EnumHelmetStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.HelmetStatus[] | ListEnumHelmetStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.HelmetStatus[] | ListEnumHelmetStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumHelmetStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.HelmetStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumHelmetStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumHelmetStatusNullableFilter<$PrismaModel>
  }

  export type EnumSignalStrengthNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SignalStrength | EnumSignalStrengthFieldRefInput<$PrismaModel> | null
    in?: $Enums.SignalStrength[] | ListEnumSignalStrengthFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SignalStrength[] | ListEnumSignalStrengthFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSignalStrengthNullableWithAggregatesFilter<$PrismaModel> | $Enums.SignalStrength | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSignalStrengthNullableFilter<$PrismaModel>
    _max?: NestedEnumSignalStrengthNullableFilter<$PrismaModel>
  }

  export type EnumIncidentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | EnumIncidentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentStatusFilter<$PrismaModel> | $Enums.IncidentStatus
  }

  export type EnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type HelmetScalarRelationFilter = {
    is?: HelmetWhereInput
    isNot?: HelmetWhereInput
  }

  export type IncidentCountOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    riderId?: SortOrder
    helmetId?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    location?: SortOrder
    description?: SortOrder
    date?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentMaxOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    riderId?: SortOrder
    helmetId?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    location?: SortOrder
    description?: SortOrder
    date?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentMinOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    riderId?: SortOrder
    helmetId?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    location?: SortOrder
    description?: SortOrder
    date?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumIncidentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | EnumIncidentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentStatusWithAggregatesFilter<$PrismaModel> | $Enums.IncidentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentStatusFilter<$PrismaModel>
    _max?: NestedEnumIncidentStatusFilter<$PrismaModel>
  }

  export type EnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ContactCreateNestedOneWithoutRiderInput = {
    create?: XOR<ContactCreateWithoutRiderInput, ContactUncheckedCreateWithoutRiderInput>
    connectOrCreate?: ContactCreateOrConnectWithoutRiderInput
    connect?: ContactWhereUniqueInput
  }

  export type HelmetCreateNestedOneWithoutRiderInput = {
    create?: XOR<HelmetCreateWithoutRiderInput, HelmetUncheckedCreateWithoutRiderInput>
    connectOrCreate?: HelmetCreateOrConnectWithoutRiderInput
    connect?: HelmetWhereUniqueInput
  }

  export type IncidentCreateNestedManyWithoutRiderInput = {
    create?: XOR<IncidentCreateWithoutRiderInput, IncidentUncheckedCreateWithoutRiderInput> | IncidentCreateWithoutRiderInput[] | IncidentUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutRiderInput | IncidentCreateOrConnectWithoutRiderInput[]
    createMany?: IncidentCreateManyRiderInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type ContactUncheckedCreateNestedOneWithoutRiderInput = {
    create?: XOR<ContactCreateWithoutRiderInput, ContactUncheckedCreateWithoutRiderInput>
    connectOrCreate?: ContactCreateOrConnectWithoutRiderInput
    connect?: ContactWhereUniqueInput
  }

  export type HelmetUncheckedCreateNestedOneWithoutRiderInput = {
    create?: XOR<HelmetCreateWithoutRiderInput, HelmetUncheckedCreateWithoutRiderInput>
    connectOrCreate?: HelmetCreateOrConnectWithoutRiderInput
    connect?: HelmetWhereUniqueInput
  }

  export type IncidentUncheckedCreateNestedManyWithoutRiderInput = {
    create?: XOR<IncidentCreateWithoutRiderInput, IncidentUncheckedCreateWithoutRiderInput> | IncidentCreateWithoutRiderInput[] | IncidentUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutRiderInput | IncidentCreateOrConnectWithoutRiderInput[]
    createMany?: IncidentCreateManyRiderInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ContactUpdateOneWithoutRiderNestedInput = {
    create?: XOR<ContactCreateWithoutRiderInput, ContactUncheckedCreateWithoutRiderInput>
    connectOrCreate?: ContactCreateOrConnectWithoutRiderInput
    upsert?: ContactUpsertWithoutRiderInput
    disconnect?: ContactWhereInput | boolean
    delete?: ContactWhereInput | boolean
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutRiderInput, ContactUpdateWithoutRiderInput>, ContactUncheckedUpdateWithoutRiderInput>
  }

  export type HelmetUpdateOneWithoutRiderNestedInput = {
    create?: XOR<HelmetCreateWithoutRiderInput, HelmetUncheckedCreateWithoutRiderInput>
    connectOrCreate?: HelmetCreateOrConnectWithoutRiderInput
    upsert?: HelmetUpsertWithoutRiderInput
    disconnect?: HelmetWhereInput | boolean
    delete?: HelmetWhereInput | boolean
    connect?: HelmetWhereUniqueInput
    update?: XOR<XOR<HelmetUpdateToOneWithWhereWithoutRiderInput, HelmetUpdateWithoutRiderInput>, HelmetUncheckedUpdateWithoutRiderInput>
  }

  export type IncidentUpdateManyWithoutRiderNestedInput = {
    create?: XOR<IncidentCreateWithoutRiderInput, IncidentUncheckedCreateWithoutRiderInput> | IncidentCreateWithoutRiderInput[] | IncidentUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutRiderInput | IncidentCreateOrConnectWithoutRiderInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutRiderInput | IncidentUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: IncidentCreateManyRiderInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutRiderInput | IncidentUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutRiderInput | IncidentUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type ContactUncheckedUpdateOneWithoutRiderNestedInput = {
    create?: XOR<ContactCreateWithoutRiderInput, ContactUncheckedCreateWithoutRiderInput>
    connectOrCreate?: ContactCreateOrConnectWithoutRiderInput
    upsert?: ContactUpsertWithoutRiderInput
    disconnect?: ContactWhereInput | boolean
    delete?: ContactWhereInput | boolean
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutRiderInput, ContactUpdateWithoutRiderInput>, ContactUncheckedUpdateWithoutRiderInput>
  }

  export type HelmetUncheckedUpdateOneWithoutRiderNestedInput = {
    create?: XOR<HelmetCreateWithoutRiderInput, HelmetUncheckedCreateWithoutRiderInput>
    connectOrCreate?: HelmetCreateOrConnectWithoutRiderInput
    upsert?: HelmetUpsertWithoutRiderInput
    disconnect?: HelmetWhereInput | boolean
    delete?: HelmetWhereInput | boolean
    connect?: HelmetWhereUniqueInput
    update?: XOR<XOR<HelmetUpdateToOneWithWhereWithoutRiderInput, HelmetUpdateWithoutRiderInput>, HelmetUncheckedUpdateWithoutRiderInput>
  }

  export type IncidentUncheckedUpdateManyWithoutRiderNestedInput = {
    create?: XOR<IncidentCreateWithoutRiderInput, IncidentUncheckedCreateWithoutRiderInput> | IncidentCreateWithoutRiderInput[] | IncidentUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutRiderInput | IncidentCreateOrConnectWithoutRiderInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutRiderInput | IncidentUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: IncidentCreateManyRiderInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutRiderInput | IncidentUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutRiderInput | IncidentUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type RiderCreateNestedOneWithoutEmergencyContactInput = {
    create?: XOR<RiderCreateWithoutEmergencyContactInput, RiderUncheckedCreateWithoutEmergencyContactInput>
    connectOrCreate?: RiderCreateOrConnectWithoutEmergencyContactInput
    connect?: RiderWhereUniqueInput
  }

  export type RiderUpdateOneRequiredWithoutEmergencyContactNestedInput = {
    create?: XOR<RiderCreateWithoutEmergencyContactInput, RiderUncheckedCreateWithoutEmergencyContactInput>
    connectOrCreate?: RiderCreateOrConnectWithoutEmergencyContactInput
    upsert?: RiderUpsertWithoutEmergencyContactInput
    connect?: RiderWhereUniqueInput
    update?: XOR<XOR<RiderUpdateToOneWithWhereWithoutEmergencyContactInput, RiderUpdateWithoutEmergencyContactInput>, RiderUncheckedUpdateWithoutEmergencyContactInput>
  }

  export type RiderCreateNestedOneWithoutHelmetInput = {
    create?: XOR<RiderCreateWithoutHelmetInput, RiderUncheckedCreateWithoutHelmetInput>
    connectOrCreate?: RiderCreateOrConnectWithoutHelmetInput
    connect?: RiderWhereUniqueInput
  }

  export type IncidentCreateNestedManyWithoutHelmetInput = {
    create?: XOR<IncidentCreateWithoutHelmetInput, IncidentUncheckedCreateWithoutHelmetInput> | IncidentCreateWithoutHelmetInput[] | IncidentUncheckedCreateWithoutHelmetInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutHelmetInput | IncidentCreateOrConnectWithoutHelmetInput[]
    createMany?: IncidentCreateManyHelmetInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutHelmetInput = {
    create?: XOR<IncidentCreateWithoutHelmetInput, IncidentUncheckedCreateWithoutHelmetInput> | IncidentCreateWithoutHelmetInput[] | IncidentUncheckedCreateWithoutHelmetInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutHelmetInput | IncidentCreateOrConnectWithoutHelmetInput[]
    createMany?: IncidentCreateManyHelmetInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type NullableEnumHelmetStatusFieldUpdateOperationsInput = {
    set?: $Enums.HelmetStatus | null
  }

  export type NullableEnumSignalStrengthFieldUpdateOperationsInput = {
    set?: $Enums.SignalStrength | null
  }

  export type RiderUpdateOneRequiredWithoutHelmetNestedInput = {
    create?: XOR<RiderCreateWithoutHelmetInput, RiderUncheckedCreateWithoutHelmetInput>
    connectOrCreate?: RiderCreateOrConnectWithoutHelmetInput
    upsert?: RiderUpsertWithoutHelmetInput
    connect?: RiderWhereUniqueInput
    update?: XOR<XOR<RiderUpdateToOneWithWhereWithoutHelmetInput, RiderUpdateWithoutHelmetInput>, RiderUncheckedUpdateWithoutHelmetInput>
  }

  export type IncidentUpdateManyWithoutHelmetNestedInput = {
    create?: XOR<IncidentCreateWithoutHelmetInput, IncidentUncheckedCreateWithoutHelmetInput> | IncidentCreateWithoutHelmetInput[] | IncidentUncheckedCreateWithoutHelmetInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutHelmetInput | IncidentCreateOrConnectWithoutHelmetInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutHelmetInput | IncidentUpsertWithWhereUniqueWithoutHelmetInput[]
    createMany?: IncidentCreateManyHelmetInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutHelmetInput | IncidentUpdateWithWhereUniqueWithoutHelmetInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutHelmetInput | IncidentUpdateManyWithWhereWithoutHelmetInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutHelmetNestedInput = {
    create?: XOR<IncidentCreateWithoutHelmetInput, IncidentUncheckedCreateWithoutHelmetInput> | IncidentCreateWithoutHelmetInput[] | IncidentUncheckedCreateWithoutHelmetInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutHelmetInput | IncidentCreateOrConnectWithoutHelmetInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutHelmetInput | IncidentUpsertWithWhereUniqueWithoutHelmetInput[]
    createMany?: IncidentCreateManyHelmetInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutHelmetInput | IncidentUpdateWithWhereUniqueWithoutHelmetInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutHelmetInput | IncidentUpdateManyWithWhereWithoutHelmetInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type RiderCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<RiderCreateWithoutIncidentsInput, RiderUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: RiderCreateOrConnectWithoutIncidentsInput
    connect?: RiderWhereUniqueInput
  }

  export type HelmetCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<HelmetCreateWithoutIncidentsInput, HelmetUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: HelmetCreateOrConnectWithoutIncidentsInput
    connect?: HelmetWhereUniqueInput
  }

  export type EnumIncidentStatusFieldUpdateOperationsInput = {
    set?: $Enums.IncidentStatus
  }

  export type EnumSeverityFieldUpdateOperationsInput = {
    set?: $Enums.Severity
  }

  export type RiderUpdateOneRequiredWithoutIncidentsNestedInput = {
    create?: XOR<RiderCreateWithoutIncidentsInput, RiderUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: RiderCreateOrConnectWithoutIncidentsInput
    upsert?: RiderUpsertWithoutIncidentsInput
    connect?: RiderWhereUniqueInput
    update?: XOR<XOR<RiderUpdateToOneWithWhereWithoutIncidentsInput, RiderUpdateWithoutIncidentsInput>, RiderUncheckedUpdateWithoutIncidentsInput>
  }

  export type HelmetUpdateOneRequiredWithoutIncidentsNestedInput = {
    create?: XOR<HelmetCreateWithoutIncidentsInput, HelmetUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: HelmetCreateOrConnectWithoutIncidentsInput
    upsert?: HelmetUpsertWithoutIncidentsInput
    connect?: HelmetWhereUniqueInput
    update?: XOR<XOR<HelmetUpdateToOneWithWhereWithoutIncidentsInput, HelmetUpdateWithoutIncidentsInput>, HelmetUncheckedUpdateWithoutIncidentsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedEnumHelmetStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.HelmetStatus | EnumHelmetStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.HelmetStatus[] | ListEnumHelmetStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.HelmetStatus[] | ListEnumHelmetStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumHelmetStatusNullableFilter<$PrismaModel> | $Enums.HelmetStatus | null
  }

  export type NestedEnumSignalStrengthNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SignalStrength | EnumSignalStrengthFieldRefInput<$PrismaModel> | null
    in?: $Enums.SignalStrength[] | ListEnumSignalStrengthFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SignalStrength[] | ListEnumSignalStrengthFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSignalStrengthNullableFilter<$PrismaModel> | $Enums.SignalStrength | null
  }

  export type NestedEnumHelmetStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HelmetStatus | EnumHelmetStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.HelmetStatus[] | ListEnumHelmetStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.HelmetStatus[] | ListEnumHelmetStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumHelmetStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.HelmetStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumHelmetStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumHelmetStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumSignalStrengthNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SignalStrength | EnumSignalStrengthFieldRefInput<$PrismaModel> | null
    in?: $Enums.SignalStrength[] | ListEnumSignalStrengthFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SignalStrength[] | ListEnumSignalStrengthFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSignalStrengthNullableWithAggregatesFilter<$PrismaModel> | $Enums.SignalStrength | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSignalStrengthNullableFilter<$PrismaModel>
    _max?: NestedEnumSignalStrengthNullableFilter<$PrismaModel>
  }

  export type NestedEnumIncidentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | EnumIncidentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentStatusFilter<$PrismaModel> | $Enums.IncidentStatus
  }

  export type NestedEnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type NestedEnumIncidentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | EnumIncidentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentStatusWithAggregatesFilter<$PrismaModel> | $Enums.IncidentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentStatusFilter<$PrismaModel>
    _max?: NestedEnumIncidentStatusFilter<$PrismaModel>
  }

  export type NestedEnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type ContactCreateWithoutRiderInput = {
    id?: string
    name: string
    relation: string
    phone: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUncheckedCreateWithoutRiderInput = {
    id?: string
    name: string
    relation: string
    phone: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactCreateOrConnectWithoutRiderInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutRiderInput, ContactUncheckedCreateWithoutRiderInput>
  }

  export type HelmetCreateWithoutRiderInput = {
    id?: string
    helmetId: string
    battery?: string | null
    temperature?: string | null
    status?: $Enums.HelmetStatus | null
    lastActiveAt?: Date | string | null
    latitude?: string | null
    longitude?: string | null
    signalStrength?: $Enums.SignalStrength | null
    createdAt?: Date | string
    updatedAt?: Date | string
    incidents?: IncidentCreateNestedManyWithoutHelmetInput
  }

  export type HelmetUncheckedCreateWithoutRiderInput = {
    id?: string
    helmetId: string
    battery?: string | null
    temperature?: string | null
    status?: $Enums.HelmetStatus | null
    lastActiveAt?: Date | string | null
    latitude?: string | null
    longitude?: string | null
    signalStrength?: $Enums.SignalStrength | null
    createdAt?: Date | string
    updatedAt?: Date | string
    incidents?: IncidentUncheckedCreateNestedManyWithoutHelmetInput
  }

  export type HelmetCreateOrConnectWithoutRiderInput = {
    where: HelmetWhereUniqueInput
    create: XOR<HelmetCreateWithoutRiderInput, HelmetUncheckedCreateWithoutRiderInput>
  }

  export type IncidentCreateWithoutRiderInput = {
    id?: string
    incidentId: string
    longitude?: string | null
    latitude?: string | null
    location?: string | null
    description?: string | null
    date: Date | string
    status: $Enums.IncidentStatus
    severity: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
    helmet: HelmetCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateWithoutRiderInput = {
    id?: string
    incidentId: string
    helmetId: string
    longitude?: string | null
    latitude?: string | null
    location?: string | null
    description?: string | null
    date: Date | string
    status: $Enums.IncidentStatus
    severity: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentCreateOrConnectWithoutRiderInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutRiderInput, IncidentUncheckedCreateWithoutRiderInput>
  }

  export type IncidentCreateManyRiderInputEnvelope = {
    data: IncidentCreateManyRiderInput | IncidentCreateManyRiderInput[]
    skipDuplicates?: boolean
  }

  export type ContactUpsertWithoutRiderInput = {
    update: XOR<ContactUpdateWithoutRiderInput, ContactUncheckedUpdateWithoutRiderInput>
    create: XOR<ContactCreateWithoutRiderInput, ContactUncheckedCreateWithoutRiderInput>
    where?: ContactWhereInput
  }

  export type ContactUpdateToOneWithWhereWithoutRiderInput = {
    where?: ContactWhereInput
    data: XOR<ContactUpdateWithoutRiderInput, ContactUncheckedUpdateWithoutRiderInput>
  }

  export type ContactUpdateWithoutRiderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateWithoutRiderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HelmetUpsertWithoutRiderInput = {
    update: XOR<HelmetUpdateWithoutRiderInput, HelmetUncheckedUpdateWithoutRiderInput>
    create: XOR<HelmetCreateWithoutRiderInput, HelmetUncheckedCreateWithoutRiderInput>
    where?: HelmetWhereInput
  }

  export type HelmetUpdateToOneWithWhereWithoutRiderInput = {
    where?: HelmetWhereInput
    data: XOR<HelmetUpdateWithoutRiderInput, HelmetUncheckedUpdateWithoutRiderInput>
  }

  export type HelmetUpdateWithoutRiderInput = {
    id?: StringFieldUpdateOperationsInput | string
    helmetId?: StringFieldUpdateOperationsInput | string
    battery?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumHelmetStatusFieldUpdateOperationsInput | $Enums.HelmetStatus | null
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    signalStrength?: NullableEnumSignalStrengthFieldUpdateOperationsInput | $Enums.SignalStrength | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUpdateManyWithoutHelmetNestedInput
  }

  export type HelmetUncheckedUpdateWithoutRiderInput = {
    id?: StringFieldUpdateOperationsInput | string
    helmetId?: StringFieldUpdateOperationsInput | string
    battery?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumHelmetStatusFieldUpdateOperationsInput | $Enums.HelmetStatus | null
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    signalStrength?: NullableEnumSignalStrengthFieldUpdateOperationsInput | $Enums.SignalStrength | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUncheckedUpdateManyWithoutHelmetNestedInput
  }

  export type IncidentUpsertWithWhereUniqueWithoutRiderInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutRiderInput, IncidentUncheckedUpdateWithoutRiderInput>
    create: XOR<IncidentCreateWithoutRiderInput, IncidentUncheckedCreateWithoutRiderInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutRiderInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutRiderInput, IncidentUncheckedUpdateWithoutRiderInput>
  }

  export type IncidentUpdateManyWithWhereWithoutRiderInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutRiderInput>
  }

  export type IncidentScalarWhereInput = {
    AND?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    OR?: IncidentScalarWhereInput[]
    NOT?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    id?: StringFilter<"Incident"> | string
    incidentId?: StringFilter<"Incident"> | string
    riderId?: StringFilter<"Incident"> | string
    helmetId?: StringFilter<"Incident"> | string
    longitude?: StringNullableFilter<"Incident"> | string | null
    latitude?: StringNullableFilter<"Incident"> | string | null
    location?: StringNullableFilter<"Incident"> | string | null
    description?: StringNullableFilter<"Incident"> | string | null
    date?: DateTimeFilter<"Incident"> | Date | string
    status?: EnumIncidentStatusFilter<"Incident"> | $Enums.IncidentStatus
    severity?: EnumSeverityFilter<"Incident"> | $Enums.Severity
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
  }

  export type RiderCreateWithoutEmergencyContactInput = {
    id?: string
    riderId: string
    name: string
    email: string
    phone: string
    address?: string | null
    hasHadIncident?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    helmet?: HelmetCreateNestedOneWithoutRiderInput
    incidents?: IncidentCreateNestedManyWithoutRiderInput
  }

  export type RiderUncheckedCreateWithoutEmergencyContactInput = {
    id?: string
    riderId: string
    name: string
    email: string
    phone: string
    address?: string | null
    hasHadIncident?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    helmet?: HelmetUncheckedCreateNestedOneWithoutRiderInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutRiderInput
  }

  export type RiderCreateOrConnectWithoutEmergencyContactInput = {
    where: RiderWhereUniqueInput
    create: XOR<RiderCreateWithoutEmergencyContactInput, RiderUncheckedCreateWithoutEmergencyContactInput>
  }

  export type RiderUpsertWithoutEmergencyContactInput = {
    update: XOR<RiderUpdateWithoutEmergencyContactInput, RiderUncheckedUpdateWithoutEmergencyContactInput>
    create: XOR<RiderCreateWithoutEmergencyContactInput, RiderUncheckedCreateWithoutEmergencyContactInput>
    where?: RiderWhereInput
  }

  export type RiderUpdateToOneWithWhereWithoutEmergencyContactInput = {
    where?: RiderWhereInput
    data: XOR<RiderUpdateWithoutEmergencyContactInput, RiderUncheckedUpdateWithoutEmergencyContactInput>
  }

  export type RiderUpdateWithoutEmergencyContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    riderId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    hasHadIncident?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    helmet?: HelmetUpdateOneWithoutRiderNestedInput
    incidents?: IncidentUpdateManyWithoutRiderNestedInput
  }

  export type RiderUncheckedUpdateWithoutEmergencyContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    riderId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    hasHadIncident?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    helmet?: HelmetUncheckedUpdateOneWithoutRiderNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutRiderNestedInput
  }

  export type RiderCreateWithoutHelmetInput = {
    id?: string
    riderId: string
    name: string
    email: string
    phone: string
    address?: string | null
    hasHadIncident?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencyContact?: ContactCreateNestedOneWithoutRiderInput
    incidents?: IncidentCreateNestedManyWithoutRiderInput
  }

  export type RiderUncheckedCreateWithoutHelmetInput = {
    id?: string
    riderId: string
    name: string
    email: string
    phone: string
    address?: string | null
    hasHadIncident?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencyContact?: ContactUncheckedCreateNestedOneWithoutRiderInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutRiderInput
  }

  export type RiderCreateOrConnectWithoutHelmetInput = {
    where: RiderWhereUniqueInput
    create: XOR<RiderCreateWithoutHelmetInput, RiderUncheckedCreateWithoutHelmetInput>
  }

  export type IncidentCreateWithoutHelmetInput = {
    id?: string
    incidentId: string
    longitude?: string | null
    latitude?: string | null
    location?: string | null
    description?: string | null
    date: Date | string
    status: $Enums.IncidentStatus
    severity: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
    rider: RiderCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateWithoutHelmetInput = {
    id?: string
    incidentId: string
    riderId: string
    longitude?: string | null
    latitude?: string | null
    location?: string | null
    description?: string | null
    date: Date | string
    status: $Enums.IncidentStatus
    severity: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentCreateOrConnectWithoutHelmetInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutHelmetInput, IncidentUncheckedCreateWithoutHelmetInput>
  }

  export type IncidentCreateManyHelmetInputEnvelope = {
    data: IncidentCreateManyHelmetInput | IncidentCreateManyHelmetInput[]
    skipDuplicates?: boolean
  }

  export type RiderUpsertWithoutHelmetInput = {
    update: XOR<RiderUpdateWithoutHelmetInput, RiderUncheckedUpdateWithoutHelmetInput>
    create: XOR<RiderCreateWithoutHelmetInput, RiderUncheckedCreateWithoutHelmetInput>
    where?: RiderWhereInput
  }

  export type RiderUpdateToOneWithWhereWithoutHelmetInput = {
    where?: RiderWhereInput
    data: XOR<RiderUpdateWithoutHelmetInput, RiderUncheckedUpdateWithoutHelmetInput>
  }

  export type RiderUpdateWithoutHelmetInput = {
    id?: StringFieldUpdateOperationsInput | string
    riderId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    hasHadIncident?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencyContact?: ContactUpdateOneWithoutRiderNestedInput
    incidents?: IncidentUpdateManyWithoutRiderNestedInput
  }

  export type RiderUncheckedUpdateWithoutHelmetInput = {
    id?: StringFieldUpdateOperationsInput | string
    riderId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    hasHadIncident?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencyContact?: ContactUncheckedUpdateOneWithoutRiderNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutRiderNestedInput
  }

  export type IncidentUpsertWithWhereUniqueWithoutHelmetInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutHelmetInput, IncidentUncheckedUpdateWithoutHelmetInput>
    create: XOR<IncidentCreateWithoutHelmetInput, IncidentUncheckedCreateWithoutHelmetInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutHelmetInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutHelmetInput, IncidentUncheckedUpdateWithoutHelmetInput>
  }

  export type IncidentUpdateManyWithWhereWithoutHelmetInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutHelmetInput>
  }

  export type RiderCreateWithoutIncidentsInput = {
    id?: string
    riderId: string
    name: string
    email: string
    phone: string
    address?: string | null
    hasHadIncident?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencyContact?: ContactCreateNestedOneWithoutRiderInput
    helmet?: HelmetCreateNestedOneWithoutRiderInput
  }

  export type RiderUncheckedCreateWithoutIncidentsInput = {
    id?: string
    riderId: string
    name: string
    email: string
    phone: string
    address?: string | null
    hasHadIncident?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencyContact?: ContactUncheckedCreateNestedOneWithoutRiderInput
    helmet?: HelmetUncheckedCreateNestedOneWithoutRiderInput
  }

  export type RiderCreateOrConnectWithoutIncidentsInput = {
    where: RiderWhereUniqueInput
    create: XOR<RiderCreateWithoutIncidentsInput, RiderUncheckedCreateWithoutIncidentsInput>
  }

  export type HelmetCreateWithoutIncidentsInput = {
    id?: string
    helmetId: string
    battery?: string | null
    temperature?: string | null
    status?: $Enums.HelmetStatus | null
    lastActiveAt?: Date | string | null
    latitude?: string | null
    longitude?: string | null
    signalStrength?: $Enums.SignalStrength | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rider: RiderCreateNestedOneWithoutHelmetInput
  }

  export type HelmetUncheckedCreateWithoutIncidentsInput = {
    id?: string
    riderId: string
    helmetId: string
    battery?: string | null
    temperature?: string | null
    status?: $Enums.HelmetStatus | null
    lastActiveAt?: Date | string | null
    latitude?: string | null
    longitude?: string | null
    signalStrength?: $Enums.SignalStrength | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HelmetCreateOrConnectWithoutIncidentsInput = {
    where: HelmetWhereUniqueInput
    create: XOR<HelmetCreateWithoutIncidentsInput, HelmetUncheckedCreateWithoutIncidentsInput>
  }

  export type RiderUpsertWithoutIncidentsInput = {
    update: XOR<RiderUpdateWithoutIncidentsInput, RiderUncheckedUpdateWithoutIncidentsInput>
    create: XOR<RiderCreateWithoutIncidentsInput, RiderUncheckedCreateWithoutIncidentsInput>
    where?: RiderWhereInput
  }

  export type RiderUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: RiderWhereInput
    data: XOR<RiderUpdateWithoutIncidentsInput, RiderUncheckedUpdateWithoutIncidentsInput>
  }

  export type RiderUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    riderId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    hasHadIncident?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencyContact?: ContactUpdateOneWithoutRiderNestedInput
    helmet?: HelmetUpdateOneWithoutRiderNestedInput
  }

  export type RiderUncheckedUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    riderId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    hasHadIncident?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencyContact?: ContactUncheckedUpdateOneWithoutRiderNestedInput
    helmet?: HelmetUncheckedUpdateOneWithoutRiderNestedInput
  }

  export type HelmetUpsertWithoutIncidentsInput = {
    update: XOR<HelmetUpdateWithoutIncidentsInput, HelmetUncheckedUpdateWithoutIncidentsInput>
    create: XOR<HelmetCreateWithoutIncidentsInput, HelmetUncheckedCreateWithoutIncidentsInput>
    where?: HelmetWhereInput
  }

  export type HelmetUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: HelmetWhereInput
    data: XOR<HelmetUpdateWithoutIncidentsInput, HelmetUncheckedUpdateWithoutIncidentsInput>
  }

  export type HelmetUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    helmetId?: StringFieldUpdateOperationsInput | string
    battery?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumHelmetStatusFieldUpdateOperationsInput | $Enums.HelmetStatus | null
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    signalStrength?: NullableEnumSignalStrengthFieldUpdateOperationsInput | $Enums.SignalStrength | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateOneRequiredWithoutHelmetNestedInput
  }

  export type HelmetUncheckedUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    riderId?: StringFieldUpdateOperationsInput | string
    helmetId?: StringFieldUpdateOperationsInput | string
    battery?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumHelmetStatusFieldUpdateOperationsInput | $Enums.HelmetStatus | null
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    signalStrength?: NullableEnumSignalStrengthFieldUpdateOperationsInput | $Enums.SignalStrength | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateManyRiderInput = {
    id?: string
    incidentId: string
    helmetId: string
    longitude?: string | null
    latitude?: string | null
    location?: string | null
    description?: string | null
    date: Date | string
    status: $Enums.IncidentStatus
    severity: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentUpdateWithoutRiderInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    helmet?: HelmetUpdateOneRequiredWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutRiderInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    helmetId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUncheckedUpdateManyWithoutRiderInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    helmetId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateManyHelmetInput = {
    id?: string
    incidentId: string
    riderId: string
    longitude?: string | null
    latitude?: string | null
    location?: string | null
    description?: string | null
    date: Date | string
    status: $Enums.IncidentStatus
    severity: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentUpdateWithoutHelmetInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateOneRequiredWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutHelmetInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    riderId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUncheckedUpdateManyWithoutHelmetInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    riderId?: StringFieldUpdateOperationsInput | string
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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