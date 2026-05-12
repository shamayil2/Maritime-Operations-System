
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Ship
 * 
 */
export type Ship = $Result.DefaultSelection<Prisma.$ShipPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Drill
 * 
 */
export type Drill = $Result.DefaultSelection<Prisma.$DrillPayload>
/**
 * Model TaskActivity
 * 
 */
export type TaskActivity = $Result.DefaultSelection<Prisma.$TaskActivityPayload>
/**
 * Model DrillActivity
 * 
 */
export type DrillActivity = $Result.DefaultSelection<Prisma.$DrillActivityPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  crew: 'crew'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TaskStatus: {
  pending: 'pending',
  in_progress: 'in_progress',
  completed: 'completed'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.ship`: Exposes CRUD operations for the **Ship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ships
    * const ships = await prisma.ship.findMany()
    * ```
    */
  get ship(): Prisma.ShipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drill`: Exposes CRUD operations for the **Drill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drills
    * const drills = await prisma.drill.findMany()
    * ```
    */
  get drill(): Prisma.DrillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskActivity`: Exposes CRUD operations for the **TaskActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskActivities
    * const taskActivities = await prisma.taskActivity.findMany()
    * ```
    */
  get taskActivity(): Prisma.TaskActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drillActivity`: Exposes CRUD operations for the **DrillActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DrillActivities
    * const drillActivities = await prisma.drillActivity.findMany()
    * ```
    */
  get drillActivity(): Prisma.DrillActivityDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Ship: 'Ship',
    Task: 'Task',
    Drill: 'Drill',
    TaskActivity: 'TaskActivity',
    DrillActivity: 'DrillActivity'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "ship" | "task" | "drill" | "taskActivity" | "drillActivity"
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
      Ship: {
        payload: Prisma.$ShipPayload<ExtArgs>
        fields: Prisma.ShipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipPayload>
          }
          findFirst: {
            args: Prisma.ShipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipPayload>
          }
          findMany: {
            args: Prisma.ShipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipPayload>[]
          }
          create: {
            args: Prisma.ShipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipPayload>
          }
          createMany: {
            args: Prisma.ShipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipPayload>[]
          }
          delete: {
            args: Prisma.ShipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipPayload>
          }
          update: {
            args: Prisma.ShipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipPayload>
          }
          deleteMany: {
            args: Prisma.ShipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipPayload>[]
          }
          upsert: {
            args: Prisma.ShipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipPayload>
          }
          aggregate: {
            args: Prisma.ShipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShip>
          }
          groupBy: {
            args: Prisma.ShipGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipCountArgs<ExtArgs>
            result: $Utils.Optional<ShipCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Drill: {
        payload: Prisma.$DrillPayload<ExtArgs>
        fields: Prisma.DrillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillPayload>
          }
          findFirst: {
            args: Prisma.DrillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillPayload>
          }
          findMany: {
            args: Prisma.DrillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillPayload>[]
          }
          create: {
            args: Prisma.DrillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillPayload>
          }
          createMany: {
            args: Prisma.DrillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DrillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillPayload>[]
          }
          delete: {
            args: Prisma.DrillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillPayload>
          }
          update: {
            args: Prisma.DrillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillPayload>
          }
          deleteMany: {
            args: Prisma.DrillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DrillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillPayload>[]
          }
          upsert: {
            args: Prisma.DrillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillPayload>
          }
          aggregate: {
            args: Prisma.DrillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrill>
          }
          groupBy: {
            args: Prisma.DrillGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrillGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrillCountArgs<ExtArgs>
            result: $Utils.Optional<DrillCountAggregateOutputType> | number
          }
        }
      }
      TaskActivity: {
        payload: Prisma.$TaskActivityPayload<ExtArgs>
        fields: Prisma.TaskActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>
          }
          findFirst: {
            args: Prisma.TaskActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>
          }
          findMany: {
            args: Prisma.TaskActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>[]
          }
          create: {
            args: Prisma.TaskActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>
          }
          createMany: {
            args: Prisma.TaskActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>[]
          }
          delete: {
            args: Prisma.TaskActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>
          }
          update: {
            args: Prisma.TaskActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>
          }
          deleteMany: {
            args: Prisma.TaskActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>[]
          }
          upsert: {
            args: Prisma.TaskActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>
          }
          aggregate: {
            args: Prisma.TaskActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskActivity>
          }
          groupBy: {
            args: Prisma.TaskActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskActivityCountArgs<ExtArgs>
            result: $Utils.Optional<TaskActivityCountAggregateOutputType> | number
          }
        }
      }
      DrillActivity: {
        payload: Prisma.$DrillActivityPayload<ExtArgs>
        fields: Prisma.DrillActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrillActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrillActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillActivityPayload>
          }
          findFirst: {
            args: Prisma.DrillActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrillActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillActivityPayload>
          }
          findMany: {
            args: Prisma.DrillActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillActivityPayload>[]
          }
          create: {
            args: Prisma.DrillActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillActivityPayload>
          }
          createMany: {
            args: Prisma.DrillActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DrillActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillActivityPayload>[]
          }
          delete: {
            args: Prisma.DrillActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillActivityPayload>
          }
          update: {
            args: Prisma.DrillActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillActivityPayload>
          }
          deleteMany: {
            args: Prisma.DrillActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrillActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DrillActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillActivityPayload>[]
          }
          upsert: {
            args: Prisma.DrillActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillActivityPayload>
          }
          aggregate: {
            args: Prisma.DrillActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrillActivity>
          }
          groupBy: {
            args: Prisma.DrillActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrillActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrillActivityCountArgs<ExtArgs>
            result: $Utils.Optional<DrillActivityCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    ship?: ShipOmit
    task?: TaskOmit
    drill?: DrillOmit
    taskActivity?: TaskActivityOmit
    drillActivity?: DrillActivityOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdTasks: number
    createdDrills: number
    taskActivity: number
    drillActivity: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdTasks?: boolean | UserCountOutputTypeCountCreatedTasksArgs
    createdDrills?: boolean | UserCountOutputTypeCountCreatedDrillsArgs
    taskActivity?: boolean | UserCountOutputTypeCountTaskActivityArgs
    drillActivity?: boolean | UserCountOutputTypeCountDrillActivityArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedDrillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrillWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaskActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskActivityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDrillActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrillActivityWhereInput
  }


  /**
   * Count Type ShipCountOutputType
   */

  export type ShipCountOutputType = {
    tasks: number
    drills: number
  }

  export type ShipCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ShipCountOutputTypeCountTasksArgs
    drills?: boolean | ShipCountOutputTypeCountDrillsArgs
  }

  // Custom InputTypes
  /**
   * ShipCountOutputType without action
   */
  export type ShipCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipCountOutputType
     */
    select?: ShipCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShipCountOutputType without action
   */
  export type ShipCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * ShipCountOutputType without action
   */
  export type ShipCountOutputTypeCountDrillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrillWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    taskActivity: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskActivity?: boolean | TaskCountOutputTypeCountTaskActivityArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountTaskActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskActivityWhereInput
  }


  /**
   * Count Type DrillCountOutputType
   */

  export type DrillCountOutputType = {
    drillActivity: number
  }

  export type DrillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drillActivity?: boolean | DrillCountOutputTypeCountDrillActivityArgs
  }

  // Custom InputTypes
  /**
   * DrillCountOutputType without action
   */
  export type DrillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillCountOutputType
     */
    select?: DrillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DrillCountOutputType without action
   */
  export type DrillCountOutputTypeCountDrillActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrillActivityWhereInput
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
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
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
    passwordHash: string
    role: $Enums.Role
    createdAt: Date
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
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    createdTasks?: boolean | User$createdTasksArgs<ExtArgs>
    createdDrills?: boolean | User$createdDrillsArgs<ExtArgs>
    taskActivity?: boolean | User$taskActivityArgs<ExtArgs>
    drillActivity?: boolean | User$drillActivityArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdTasks?: boolean | User$createdTasksArgs<ExtArgs>
    createdDrills?: boolean | User$createdDrillsArgs<ExtArgs>
    taskActivity?: boolean | User$taskActivityArgs<ExtArgs>
    drillActivity?: boolean | User$drillActivityArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdTasks: Prisma.$TaskPayload<ExtArgs>[]
      createdDrills: Prisma.$DrillPayload<ExtArgs>[]
      taskActivity: Prisma.$TaskActivityPayload<ExtArgs>[]
      drillActivity: Prisma.$DrillActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      role: $Enums.Role
      createdAt: Date
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
    createdTasks<T extends User$createdTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$createdTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdDrills<T extends User$createdDrillsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdDrillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taskActivity<T extends User$taskActivityArgs<ExtArgs> = {}>(args?: Subset<T, User$taskActivityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    drillActivity<T extends User$drillActivityArgs<ExtArgs> = {}>(args?: Subset<T, User$drillActivityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrillActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.createdTasks
   */
  export type User$createdTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.createdDrills
   */
  export type User$createdDrillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drill
     */
    select?: DrillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drill
     */
    omit?: DrillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillInclude<ExtArgs> | null
    where?: DrillWhereInput
    orderBy?: DrillOrderByWithRelationInput | DrillOrderByWithRelationInput[]
    cursor?: DrillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrillScalarFieldEnum | DrillScalarFieldEnum[]
  }

  /**
   * User.taskActivity
   */
  export type User$taskActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    where?: TaskActivityWhereInput
    orderBy?: TaskActivityOrderByWithRelationInput | TaskActivityOrderByWithRelationInput[]
    cursor?: TaskActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskActivityScalarFieldEnum | TaskActivityScalarFieldEnum[]
  }

  /**
   * User.drillActivity
   */
  export type User$drillActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillActivity
     */
    select?: DrillActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillActivity
     */
    omit?: DrillActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillActivityInclude<ExtArgs> | null
    where?: DrillActivityWhereInput
    orderBy?: DrillActivityOrderByWithRelationInput | DrillActivityOrderByWithRelationInput[]
    cursor?: DrillActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrillActivityScalarFieldEnum | DrillActivityScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Ship
   */

  export type AggregateShip = {
    _count: ShipCountAggregateOutputType | null
    _min: ShipMinAggregateOutputType | null
    _max: ShipMaxAggregateOutputType | null
  }

  export type ShipMinAggregateOutputType = {
    id: string | null
    name: string | null
    imoNumber: string | null
    createdAt: Date | null
  }

  export type ShipMaxAggregateOutputType = {
    id: string | null
    name: string | null
    imoNumber: string | null
    createdAt: Date | null
  }

  export type ShipCountAggregateOutputType = {
    id: number
    name: number
    imoNumber: number
    createdAt: number
    _all: number
  }


  export type ShipMinAggregateInputType = {
    id?: true
    name?: true
    imoNumber?: true
    createdAt?: true
  }

  export type ShipMaxAggregateInputType = {
    id?: true
    name?: true
    imoNumber?: true
    createdAt?: true
  }

  export type ShipCountAggregateInputType = {
    id?: true
    name?: true
    imoNumber?: true
    createdAt?: true
    _all?: true
  }

  export type ShipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ship to aggregate.
     */
    where?: ShipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ships to fetch.
     */
    orderBy?: ShipOrderByWithRelationInput | ShipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ships
    **/
    _count?: true | ShipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipMaxAggregateInputType
  }

  export type GetShipAggregateType<T extends ShipAggregateArgs> = {
        [P in keyof T & keyof AggregateShip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShip[P]>
      : GetScalarType<T[P], AggregateShip[P]>
  }




  export type ShipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipWhereInput
    orderBy?: ShipOrderByWithAggregationInput | ShipOrderByWithAggregationInput[]
    by: ShipScalarFieldEnum[] | ShipScalarFieldEnum
    having?: ShipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipCountAggregateInputType | true
    _min?: ShipMinAggregateInputType
    _max?: ShipMaxAggregateInputType
  }

  export type ShipGroupByOutputType = {
    id: string
    name: string
    imoNumber: string
    createdAt: Date
    _count: ShipCountAggregateOutputType | null
    _min: ShipMinAggregateOutputType | null
    _max: ShipMaxAggregateOutputType | null
  }

  type GetShipGroupByPayload<T extends ShipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipGroupByOutputType[P]>
            : GetScalarType<T[P], ShipGroupByOutputType[P]>
        }
      >
    >


  export type ShipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imoNumber?: boolean
    createdAt?: boolean
    tasks?: boolean | Ship$tasksArgs<ExtArgs>
    drills?: boolean | Ship$drillsArgs<ExtArgs>
    _count?: boolean | ShipCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ship"]>

  export type ShipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imoNumber?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ship"]>

  export type ShipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imoNumber?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ship"]>

  export type ShipSelectScalar = {
    id?: boolean
    name?: boolean
    imoNumber?: boolean
    createdAt?: boolean
  }

  export type ShipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "imoNumber" | "createdAt", ExtArgs["result"]["ship"]>
  export type ShipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Ship$tasksArgs<ExtArgs>
    drills?: boolean | Ship$drillsArgs<ExtArgs>
    _count?: boolean | ShipCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ship"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      drills: Prisma.$DrillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      imoNumber: string
      createdAt: Date
    }, ExtArgs["result"]["ship"]>
    composites: {}
  }

  type ShipGetPayload<S extends boolean | null | undefined | ShipDefaultArgs> = $Result.GetResult<Prisma.$ShipPayload, S>

  type ShipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipCountAggregateInputType | true
    }

  export interface ShipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ship'], meta: { name: 'Ship' } }
    /**
     * Find zero or one Ship that matches the filter.
     * @param {ShipFindUniqueArgs} args - Arguments to find a Ship
     * @example
     * // Get one Ship
     * const ship = await prisma.ship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipFindUniqueArgs>(args: SelectSubset<T, ShipFindUniqueArgs<ExtArgs>>): Prisma__ShipClient<$Result.GetResult<Prisma.$ShipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipFindUniqueOrThrowArgs} args - Arguments to find a Ship
     * @example
     * // Get one Ship
     * const ship = await prisma.ship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipClient<$Result.GetResult<Prisma.$ShipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipFindFirstArgs} args - Arguments to find a Ship
     * @example
     * // Get one Ship
     * const ship = await prisma.ship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipFindFirstArgs>(args?: SelectSubset<T, ShipFindFirstArgs<ExtArgs>>): Prisma__ShipClient<$Result.GetResult<Prisma.$ShipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipFindFirstOrThrowArgs} args - Arguments to find a Ship
     * @example
     * // Get one Ship
     * const ship = await prisma.ship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipClient<$Result.GetResult<Prisma.$ShipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ships
     * const ships = await prisma.ship.findMany()
     * 
     * // Get first 10 Ships
     * const ships = await prisma.ship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipWithIdOnly = await prisma.ship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipFindManyArgs>(args?: SelectSubset<T, ShipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ship.
     * @param {ShipCreateArgs} args - Arguments to create a Ship.
     * @example
     * // Create one Ship
     * const Ship = await prisma.ship.create({
     *   data: {
     *     // ... data to create a Ship
     *   }
     * })
     * 
     */
    create<T extends ShipCreateArgs>(args: SelectSubset<T, ShipCreateArgs<ExtArgs>>): Prisma__ShipClient<$Result.GetResult<Prisma.$ShipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ships.
     * @param {ShipCreateManyArgs} args - Arguments to create many Ships.
     * @example
     * // Create many Ships
     * const ship = await prisma.ship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipCreateManyArgs>(args?: SelectSubset<T, ShipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ships and returns the data saved in the database.
     * @param {ShipCreateManyAndReturnArgs} args - Arguments to create many Ships.
     * @example
     * // Create many Ships
     * const ship = await prisma.ship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ships and only return the `id`
     * const shipWithIdOnly = await prisma.ship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ship.
     * @param {ShipDeleteArgs} args - Arguments to delete one Ship.
     * @example
     * // Delete one Ship
     * const Ship = await prisma.ship.delete({
     *   where: {
     *     // ... filter to delete one Ship
     *   }
     * })
     * 
     */
    delete<T extends ShipDeleteArgs>(args: SelectSubset<T, ShipDeleteArgs<ExtArgs>>): Prisma__ShipClient<$Result.GetResult<Prisma.$ShipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ship.
     * @param {ShipUpdateArgs} args - Arguments to update one Ship.
     * @example
     * // Update one Ship
     * const ship = await prisma.ship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipUpdateArgs>(args: SelectSubset<T, ShipUpdateArgs<ExtArgs>>): Prisma__ShipClient<$Result.GetResult<Prisma.$ShipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ships.
     * @param {ShipDeleteManyArgs} args - Arguments to filter Ships to delete.
     * @example
     * // Delete a few Ships
     * const { count } = await prisma.ship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipDeleteManyArgs>(args?: SelectSubset<T, ShipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ships
     * const ship = await prisma.ship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipUpdateManyArgs>(args: SelectSubset<T, ShipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ships and returns the data updated in the database.
     * @param {ShipUpdateManyAndReturnArgs} args - Arguments to update many Ships.
     * @example
     * // Update many Ships
     * const ship = await prisma.ship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ships and only return the `id`
     * const shipWithIdOnly = await prisma.ship.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShipUpdateManyAndReturnArgs>(args: SelectSubset<T, ShipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ship.
     * @param {ShipUpsertArgs} args - Arguments to update or create a Ship.
     * @example
     * // Update or create a Ship
     * const ship = await prisma.ship.upsert({
     *   create: {
     *     // ... data to create a Ship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ship we want to update
     *   }
     * })
     */
    upsert<T extends ShipUpsertArgs>(args: SelectSubset<T, ShipUpsertArgs<ExtArgs>>): Prisma__ShipClient<$Result.GetResult<Prisma.$ShipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipCountArgs} args - Arguments to filter Ships to count.
     * @example
     * // Count the number of Ships
     * const count = await prisma.ship.count({
     *   where: {
     *     // ... the filter for the Ships we want to count
     *   }
     * })
    **/
    count<T extends ShipCountArgs>(
      args?: Subset<T, ShipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShipAggregateArgs>(args: Subset<T, ShipAggregateArgs>): Prisma.PrismaPromise<GetShipAggregateType<T>>

    /**
     * Group by Ship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipGroupByArgs} args - Group by arguments.
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
      T extends ShipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipGroupByArgs['orderBy'] }
        : { orderBy?: ShipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ship model
   */
  readonly fields: ShipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends Ship$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Ship$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    drills<T extends Ship$drillsArgs<ExtArgs> = {}>(args?: Subset<T, Ship$drillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ship model
   */
  interface ShipFieldRefs {
    readonly id: FieldRef<"Ship", 'String'>
    readonly name: FieldRef<"Ship", 'String'>
    readonly imoNumber: FieldRef<"Ship", 'String'>
    readonly createdAt: FieldRef<"Ship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ship findUnique
   */
  export type ShipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ship
     */
    select?: ShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ship
     */
    omit?: ShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipInclude<ExtArgs> | null
    /**
     * Filter, which Ship to fetch.
     */
    where: ShipWhereUniqueInput
  }

  /**
   * Ship findUniqueOrThrow
   */
  export type ShipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ship
     */
    select?: ShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ship
     */
    omit?: ShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipInclude<ExtArgs> | null
    /**
     * Filter, which Ship to fetch.
     */
    where: ShipWhereUniqueInput
  }

  /**
   * Ship findFirst
   */
  export type ShipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ship
     */
    select?: ShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ship
     */
    omit?: ShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipInclude<ExtArgs> | null
    /**
     * Filter, which Ship to fetch.
     */
    where?: ShipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ships to fetch.
     */
    orderBy?: ShipOrderByWithRelationInput | ShipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ships.
     */
    cursor?: ShipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ships.
     */
    distinct?: ShipScalarFieldEnum | ShipScalarFieldEnum[]
  }

  /**
   * Ship findFirstOrThrow
   */
  export type ShipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ship
     */
    select?: ShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ship
     */
    omit?: ShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipInclude<ExtArgs> | null
    /**
     * Filter, which Ship to fetch.
     */
    where?: ShipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ships to fetch.
     */
    orderBy?: ShipOrderByWithRelationInput | ShipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ships.
     */
    cursor?: ShipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ships.
     */
    distinct?: ShipScalarFieldEnum | ShipScalarFieldEnum[]
  }

  /**
   * Ship findMany
   */
  export type ShipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ship
     */
    select?: ShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ship
     */
    omit?: ShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipInclude<ExtArgs> | null
    /**
     * Filter, which Ships to fetch.
     */
    where?: ShipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ships to fetch.
     */
    orderBy?: ShipOrderByWithRelationInput | ShipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ships.
     */
    cursor?: ShipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ships.
     */
    distinct?: ShipScalarFieldEnum | ShipScalarFieldEnum[]
  }

  /**
   * Ship create
   */
  export type ShipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ship
     */
    select?: ShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ship
     */
    omit?: ShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipInclude<ExtArgs> | null
    /**
     * The data needed to create a Ship.
     */
    data: XOR<ShipCreateInput, ShipUncheckedCreateInput>
  }

  /**
   * Ship createMany
   */
  export type ShipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ships.
     */
    data: ShipCreateManyInput | ShipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ship createManyAndReturn
   */
  export type ShipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ship
     */
    select?: ShipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ship
     */
    omit?: ShipOmit<ExtArgs> | null
    /**
     * The data used to create many Ships.
     */
    data: ShipCreateManyInput | ShipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ship update
   */
  export type ShipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ship
     */
    select?: ShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ship
     */
    omit?: ShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipInclude<ExtArgs> | null
    /**
     * The data needed to update a Ship.
     */
    data: XOR<ShipUpdateInput, ShipUncheckedUpdateInput>
    /**
     * Choose, which Ship to update.
     */
    where: ShipWhereUniqueInput
  }

  /**
   * Ship updateMany
   */
  export type ShipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ships.
     */
    data: XOR<ShipUpdateManyMutationInput, ShipUncheckedUpdateManyInput>
    /**
     * Filter which Ships to update
     */
    where?: ShipWhereInput
    /**
     * Limit how many Ships to update.
     */
    limit?: number
  }

  /**
   * Ship updateManyAndReturn
   */
  export type ShipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ship
     */
    select?: ShipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ship
     */
    omit?: ShipOmit<ExtArgs> | null
    /**
     * The data used to update Ships.
     */
    data: XOR<ShipUpdateManyMutationInput, ShipUncheckedUpdateManyInput>
    /**
     * Filter which Ships to update
     */
    where?: ShipWhereInput
    /**
     * Limit how many Ships to update.
     */
    limit?: number
  }

  /**
   * Ship upsert
   */
  export type ShipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ship
     */
    select?: ShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ship
     */
    omit?: ShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipInclude<ExtArgs> | null
    /**
     * The filter to search for the Ship to update in case it exists.
     */
    where: ShipWhereUniqueInput
    /**
     * In case the Ship found by the `where` argument doesn't exist, create a new Ship with this data.
     */
    create: XOR<ShipCreateInput, ShipUncheckedCreateInput>
    /**
     * In case the Ship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipUpdateInput, ShipUncheckedUpdateInput>
  }

  /**
   * Ship delete
   */
  export type ShipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ship
     */
    select?: ShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ship
     */
    omit?: ShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipInclude<ExtArgs> | null
    /**
     * Filter which Ship to delete.
     */
    where: ShipWhereUniqueInput
  }

  /**
   * Ship deleteMany
   */
  export type ShipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ships to delete
     */
    where?: ShipWhereInput
    /**
     * Limit how many Ships to delete.
     */
    limit?: number
  }

  /**
   * Ship.tasks
   */
  export type Ship$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Ship.drills
   */
  export type Ship$drillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drill
     */
    select?: DrillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drill
     */
    omit?: DrillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillInclude<ExtArgs> | null
    where?: DrillWhereInput
    orderBy?: DrillOrderByWithRelationInput | DrillOrderByWithRelationInput[]
    cursor?: DrillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrillScalarFieldEnum | DrillScalarFieldEnum[]
  }

  /**
   * Ship without action
   */
  export type ShipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ship
     */
    select?: ShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ship
     */
    omit?: ShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    dueDate: Date | null
    description: string | null
    createdAt: Date | null
    shipId: string | null
    createdById: string | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    dueDate: Date | null
    description: string | null
    createdAt: Date | null
    shipId: string | null
    createdById: string | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    dueDate: number
    description: number
    createdAt: number
    shipId: number
    createdById: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    dueDate?: true
    description?: true
    createdAt?: true
    shipId?: true
    createdById?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    dueDate?: true
    description?: true
    createdAt?: true
    shipId?: true
    createdById?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    dueDate?: true
    description?: true
    createdAt?: true
    shipId?: true
    createdById?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    dueDate: Date
    description: string | null
    createdAt: Date
    shipId: string
    createdById: string
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    dueDate?: boolean
    description?: boolean
    createdAt?: boolean
    shipId?: boolean
    createdById?: boolean
    ship?: boolean | ShipDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    taskActivity?: boolean | Task$taskActivityArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    dueDate?: boolean
    description?: boolean
    createdAt?: boolean
    shipId?: boolean
    createdById?: boolean
    ship?: boolean | ShipDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    dueDate?: boolean
    description?: boolean
    createdAt?: boolean
    shipId?: boolean
    createdById?: boolean
    ship?: boolean | ShipDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    dueDate?: boolean
    description?: boolean
    createdAt?: boolean
    shipId?: boolean
    createdById?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "dueDate" | "description" | "createdAt" | "shipId" | "createdById", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ship?: boolean | ShipDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    taskActivity?: boolean | Task$taskActivityArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ship?: boolean | ShipDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ship?: boolean | ShipDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      ship: Prisma.$ShipPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      taskActivity: Prisma.$TaskActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      dueDate: Date
      description: string | null
      createdAt: Date
      shipId: string
      createdById: string
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ship<T extends ShipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipDefaultArgs<ExtArgs>>): Prisma__ShipClient<$Result.GetResult<Prisma.$ShipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    taskActivity<T extends Task$taskActivityArgs<ExtArgs> = {}>(args?: Subset<T, Task$taskActivityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly description: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly shipId: FieldRef<"Task", 'String'>
    readonly createdById: FieldRef<"Task", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.taskActivity
   */
  export type Task$taskActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    where?: TaskActivityWhereInput
    orderBy?: TaskActivityOrderByWithRelationInput | TaskActivityOrderByWithRelationInput[]
    cursor?: TaskActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskActivityScalarFieldEnum | TaskActivityScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Drill
   */

  export type AggregateDrill = {
    _count: DrillCountAggregateOutputType | null
    _min: DrillMinAggregateOutputType | null
    _max: DrillMaxAggregateOutputType | null
  }

  export type DrillMinAggregateOutputType = {
    id: string | null
    title: string | null
    drillType: string | null
    scheduledDate: Date | null
    createdAt: Date | null
    shipId: string | null
    createdById: string | null
  }

  export type DrillMaxAggregateOutputType = {
    id: string | null
    title: string | null
    drillType: string | null
    scheduledDate: Date | null
    createdAt: Date | null
    shipId: string | null
    createdById: string | null
  }

  export type DrillCountAggregateOutputType = {
    id: number
    title: number
    drillType: number
    scheduledDate: number
    createdAt: number
    shipId: number
    createdById: number
    _all: number
  }


  export type DrillMinAggregateInputType = {
    id?: true
    title?: true
    drillType?: true
    scheduledDate?: true
    createdAt?: true
    shipId?: true
    createdById?: true
  }

  export type DrillMaxAggregateInputType = {
    id?: true
    title?: true
    drillType?: true
    scheduledDate?: true
    createdAt?: true
    shipId?: true
    createdById?: true
  }

  export type DrillCountAggregateInputType = {
    id?: true
    title?: true
    drillType?: true
    scheduledDate?: true
    createdAt?: true
    shipId?: true
    createdById?: true
    _all?: true
  }

  export type DrillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drill to aggregate.
     */
    where?: DrillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drills to fetch.
     */
    orderBy?: DrillOrderByWithRelationInput | DrillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drills
    **/
    _count?: true | DrillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrillMaxAggregateInputType
  }

  export type GetDrillAggregateType<T extends DrillAggregateArgs> = {
        [P in keyof T & keyof AggregateDrill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrill[P]>
      : GetScalarType<T[P], AggregateDrill[P]>
  }




  export type DrillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrillWhereInput
    orderBy?: DrillOrderByWithAggregationInput | DrillOrderByWithAggregationInput[]
    by: DrillScalarFieldEnum[] | DrillScalarFieldEnum
    having?: DrillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrillCountAggregateInputType | true
    _min?: DrillMinAggregateInputType
    _max?: DrillMaxAggregateInputType
  }

  export type DrillGroupByOutputType = {
    id: string
    title: string
    drillType: string
    scheduledDate: Date
    createdAt: Date
    shipId: string
    createdById: string
    _count: DrillCountAggregateOutputType | null
    _min: DrillMinAggregateOutputType | null
    _max: DrillMaxAggregateOutputType | null
  }

  type GetDrillGroupByPayload<T extends DrillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrillGroupByOutputType[P]>
            : GetScalarType<T[P], DrillGroupByOutputType[P]>
        }
      >
    >


  export type DrillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    drillType?: boolean
    scheduledDate?: boolean
    createdAt?: boolean
    shipId?: boolean
    createdById?: boolean
    ship?: boolean | ShipDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    drillActivity?: boolean | Drill$drillActivityArgs<ExtArgs>
    _count?: boolean | DrillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drill"]>

  export type DrillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    drillType?: boolean
    scheduledDate?: boolean
    createdAt?: boolean
    shipId?: boolean
    createdById?: boolean
    ship?: boolean | ShipDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drill"]>

  export type DrillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    drillType?: boolean
    scheduledDate?: boolean
    createdAt?: boolean
    shipId?: boolean
    createdById?: boolean
    ship?: boolean | ShipDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drill"]>

  export type DrillSelectScalar = {
    id?: boolean
    title?: boolean
    drillType?: boolean
    scheduledDate?: boolean
    createdAt?: boolean
    shipId?: boolean
    createdById?: boolean
  }

  export type DrillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "drillType" | "scheduledDate" | "createdAt" | "shipId" | "createdById", ExtArgs["result"]["drill"]>
  export type DrillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ship?: boolean | ShipDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    drillActivity?: boolean | Drill$drillActivityArgs<ExtArgs>
    _count?: boolean | DrillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DrillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ship?: boolean | ShipDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DrillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ship?: boolean | ShipDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DrillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Drill"
    objects: {
      ship: Prisma.$ShipPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      drillActivity: Prisma.$DrillActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      drillType: string
      scheduledDate: Date
      createdAt: Date
      shipId: string
      createdById: string
    }, ExtArgs["result"]["drill"]>
    composites: {}
  }

  type DrillGetPayload<S extends boolean | null | undefined | DrillDefaultArgs> = $Result.GetResult<Prisma.$DrillPayload, S>

  type DrillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrillCountAggregateInputType | true
    }

  export interface DrillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Drill'], meta: { name: 'Drill' } }
    /**
     * Find zero or one Drill that matches the filter.
     * @param {DrillFindUniqueArgs} args - Arguments to find a Drill
     * @example
     * // Get one Drill
     * const drill = await prisma.drill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrillFindUniqueArgs>(args: SelectSubset<T, DrillFindUniqueArgs<ExtArgs>>): Prisma__DrillClient<$Result.GetResult<Prisma.$DrillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrillFindUniqueOrThrowArgs} args - Arguments to find a Drill
     * @example
     * // Get one Drill
     * const drill = await prisma.drill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrillFindUniqueOrThrowArgs>(args: SelectSubset<T, DrillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrillClient<$Result.GetResult<Prisma.$DrillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillFindFirstArgs} args - Arguments to find a Drill
     * @example
     * // Get one Drill
     * const drill = await prisma.drill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrillFindFirstArgs>(args?: SelectSubset<T, DrillFindFirstArgs<ExtArgs>>): Prisma__DrillClient<$Result.GetResult<Prisma.$DrillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillFindFirstOrThrowArgs} args - Arguments to find a Drill
     * @example
     * // Get one Drill
     * const drill = await prisma.drill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrillFindFirstOrThrowArgs>(args?: SelectSubset<T, DrillFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrillClient<$Result.GetResult<Prisma.$DrillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drills
     * const drills = await prisma.drill.findMany()
     * 
     * // Get first 10 Drills
     * const drills = await prisma.drill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drillWithIdOnly = await prisma.drill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DrillFindManyArgs>(args?: SelectSubset<T, DrillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drill.
     * @param {DrillCreateArgs} args - Arguments to create a Drill.
     * @example
     * // Create one Drill
     * const Drill = await prisma.drill.create({
     *   data: {
     *     // ... data to create a Drill
     *   }
     * })
     * 
     */
    create<T extends DrillCreateArgs>(args: SelectSubset<T, DrillCreateArgs<ExtArgs>>): Prisma__DrillClient<$Result.GetResult<Prisma.$DrillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drills.
     * @param {DrillCreateManyArgs} args - Arguments to create many Drills.
     * @example
     * // Create many Drills
     * const drill = await prisma.drill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrillCreateManyArgs>(args?: SelectSubset<T, DrillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drills and returns the data saved in the database.
     * @param {DrillCreateManyAndReturnArgs} args - Arguments to create many Drills.
     * @example
     * // Create many Drills
     * const drill = await prisma.drill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drills and only return the `id`
     * const drillWithIdOnly = await prisma.drill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DrillCreateManyAndReturnArgs>(args?: SelectSubset<T, DrillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Drill.
     * @param {DrillDeleteArgs} args - Arguments to delete one Drill.
     * @example
     * // Delete one Drill
     * const Drill = await prisma.drill.delete({
     *   where: {
     *     // ... filter to delete one Drill
     *   }
     * })
     * 
     */
    delete<T extends DrillDeleteArgs>(args: SelectSubset<T, DrillDeleteArgs<ExtArgs>>): Prisma__DrillClient<$Result.GetResult<Prisma.$DrillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drill.
     * @param {DrillUpdateArgs} args - Arguments to update one Drill.
     * @example
     * // Update one Drill
     * const drill = await prisma.drill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrillUpdateArgs>(args: SelectSubset<T, DrillUpdateArgs<ExtArgs>>): Prisma__DrillClient<$Result.GetResult<Prisma.$DrillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drills.
     * @param {DrillDeleteManyArgs} args - Arguments to filter Drills to delete.
     * @example
     * // Delete a few Drills
     * const { count } = await prisma.drill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrillDeleteManyArgs>(args?: SelectSubset<T, DrillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drills
     * const drill = await prisma.drill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrillUpdateManyArgs>(args: SelectSubset<T, DrillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drills and returns the data updated in the database.
     * @param {DrillUpdateManyAndReturnArgs} args - Arguments to update many Drills.
     * @example
     * // Update many Drills
     * const drill = await prisma.drill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drills and only return the `id`
     * const drillWithIdOnly = await prisma.drill.updateManyAndReturn({
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
    updateManyAndReturn<T extends DrillUpdateManyAndReturnArgs>(args: SelectSubset<T, DrillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Drill.
     * @param {DrillUpsertArgs} args - Arguments to update or create a Drill.
     * @example
     * // Update or create a Drill
     * const drill = await prisma.drill.upsert({
     *   create: {
     *     // ... data to create a Drill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drill we want to update
     *   }
     * })
     */
    upsert<T extends DrillUpsertArgs>(args: SelectSubset<T, DrillUpsertArgs<ExtArgs>>): Prisma__DrillClient<$Result.GetResult<Prisma.$DrillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillCountArgs} args - Arguments to filter Drills to count.
     * @example
     * // Count the number of Drills
     * const count = await prisma.drill.count({
     *   where: {
     *     // ... the filter for the Drills we want to count
     *   }
     * })
    **/
    count<T extends DrillCountArgs>(
      args?: Subset<T, DrillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DrillAggregateArgs>(args: Subset<T, DrillAggregateArgs>): Prisma.PrismaPromise<GetDrillAggregateType<T>>

    /**
     * Group by Drill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillGroupByArgs} args - Group by arguments.
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
      T extends DrillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrillGroupByArgs['orderBy'] }
        : { orderBy?: DrillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DrillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Drill model
   */
  readonly fields: DrillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Drill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ship<T extends ShipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipDefaultArgs<ExtArgs>>): Prisma__ShipClient<$Result.GetResult<Prisma.$ShipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    drillActivity<T extends Drill$drillActivityArgs<ExtArgs> = {}>(args?: Subset<T, Drill$drillActivityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrillActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Drill model
   */
  interface DrillFieldRefs {
    readonly id: FieldRef<"Drill", 'String'>
    readonly title: FieldRef<"Drill", 'String'>
    readonly drillType: FieldRef<"Drill", 'String'>
    readonly scheduledDate: FieldRef<"Drill", 'DateTime'>
    readonly createdAt: FieldRef<"Drill", 'DateTime'>
    readonly shipId: FieldRef<"Drill", 'String'>
    readonly createdById: FieldRef<"Drill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Drill findUnique
   */
  export type DrillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drill
     */
    select?: DrillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drill
     */
    omit?: DrillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillInclude<ExtArgs> | null
    /**
     * Filter, which Drill to fetch.
     */
    where: DrillWhereUniqueInput
  }

  /**
   * Drill findUniqueOrThrow
   */
  export type DrillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drill
     */
    select?: DrillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drill
     */
    omit?: DrillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillInclude<ExtArgs> | null
    /**
     * Filter, which Drill to fetch.
     */
    where: DrillWhereUniqueInput
  }

  /**
   * Drill findFirst
   */
  export type DrillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drill
     */
    select?: DrillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drill
     */
    omit?: DrillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillInclude<ExtArgs> | null
    /**
     * Filter, which Drill to fetch.
     */
    where?: DrillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drills to fetch.
     */
    orderBy?: DrillOrderByWithRelationInput | DrillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drills.
     */
    cursor?: DrillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drills.
     */
    distinct?: DrillScalarFieldEnum | DrillScalarFieldEnum[]
  }

  /**
   * Drill findFirstOrThrow
   */
  export type DrillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drill
     */
    select?: DrillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drill
     */
    omit?: DrillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillInclude<ExtArgs> | null
    /**
     * Filter, which Drill to fetch.
     */
    where?: DrillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drills to fetch.
     */
    orderBy?: DrillOrderByWithRelationInput | DrillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drills.
     */
    cursor?: DrillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drills.
     */
    distinct?: DrillScalarFieldEnum | DrillScalarFieldEnum[]
  }

  /**
   * Drill findMany
   */
  export type DrillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drill
     */
    select?: DrillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drill
     */
    omit?: DrillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillInclude<ExtArgs> | null
    /**
     * Filter, which Drills to fetch.
     */
    where?: DrillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drills to fetch.
     */
    orderBy?: DrillOrderByWithRelationInput | DrillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drills.
     */
    cursor?: DrillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drills.
     */
    distinct?: DrillScalarFieldEnum | DrillScalarFieldEnum[]
  }

  /**
   * Drill create
   */
  export type DrillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drill
     */
    select?: DrillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drill
     */
    omit?: DrillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillInclude<ExtArgs> | null
    /**
     * The data needed to create a Drill.
     */
    data: XOR<DrillCreateInput, DrillUncheckedCreateInput>
  }

  /**
   * Drill createMany
   */
  export type DrillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drills.
     */
    data: DrillCreateManyInput | DrillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Drill createManyAndReturn
   */
  export type DrillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drill
     */
    select?: DrillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drill
     */
    omit?: DrillOmit<ExtArgs> | null
    /**
     * The data used to create many Drills.
     */
    data: DrillCreateManyInput | DrillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Drill update
   */
  export type DrillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drill
     */
    select?: DrillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drill
     */
    omit?: DrillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillInclude<ExtArgs> | null
    /**
     * The data needed to update a Drill.
     */
    data: XOR<DrillUpdateInput, DrillUncheckedUpdateInput>
    /**
     * Choose, which Drill to update.
     */
    where: DrillWhereUniqueInput
  }

  /**
   * Drill updateMany
   */
  export type DrillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drills.
     */
    data: XOR<DrillUpdateManyMutationInput, DrillUncheckedUpdateManyInput>
    /**
     * Filter which Drills to update
     */
    where?: DrillWhereInput
    /**
     * Limit how many Drills to update.
     */
    limit?: number
  }

  /**
   * Drill updateManyAndReturn
   */
  export type DrillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drill
     */
    select?: DrillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drill
     */
    omit?: DrillOmit<ExtArgs> | null
    /**
     * The data used to update Drills.
     */
    data: XOR<DrillUpdateManyMutationInput, DrillUncheckedUpdateManyInput>
    /**
     * Filter which Drills to update
     */
    where?: DrillWhereInput
    /**
     * Limit how many Drills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Drill upsert
   */
  export type DrillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drill
     */
    select?: DrillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drill
     */
    omit?: DrillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillInclude<ExtArgs> | null
    /**
     * The filter to search for the Drill to update in case it exists.
     */
    where: DrillWhereUniqueInput
    /**
     * In case the Drill found by the `where` argument doesn't exist, create a new Drill with this data.
     */
    create: XOR<DrillCreateInput, DrillUncheckedCreateInput>
    /**
     * In case the Drill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrillUpdateInput, DrillUncheckedUpdateInput>
  }

  /**
   * Drill delete
   */
  export type DrillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drill
     */
    select?: DrillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drill
     */
    omit?: DrillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillInclude<ExtArgs> | null
    /**
     * Filter which Drill to delete.
     */
    where: DrillWhereUniqueInput
  }

  /**
   * Drill deleteMany
   */
  export type DrillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drills to delete
     */
    where?: DrillWhereInput
    /**
     * Limit how many Drills to delete.
     */
    limit?: number
  }

  /**
   * Drill.drillActivity
   */
  export type Drill$drillActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillActivity
     */
    select?: DrillActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillActivity
     */
    omit?: DrillActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillActivityInclude<ExtArgs> | null
    where?: DrillActivityWhereInput
    orderBy?: DrillActivityOrderByWithRelationInput | DrillActivityOrderByWithRelationInput[]
    cursor?: DrillActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrillActivityScalarFieldEnum | DrillActivityScalarFieldEnum[]
  }

  /**
   * Drill without action
   */
  export type DrillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drill
     */
    select?: DrillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drill
     */
    omit?: DrillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillInclude<ExtArgs> | null
  }


  /**
   * Model TaskActivity
   */

  export type AggregateTaskActivity = {
    _count: TaskActivityCountAggregateOutputType | null
    _min: TaskActivityMinAggregateOutputType | null
    _max: TaskActivityMaxAggregateOutputType | null
  }

  export type TaskActivityMinAggregateOutputType = {
    id: string | null
    status: $Enums.TaskStatus | null
    comments: string | null
    updatedAt: Date | null
    taskId: string | null
    userId: string | null
  }

  export type TaskActivityMaxAggregateOutputType = {
    id: string | null
    status: $Enums.TaskStatus | null
    comments: string | null
    updatedAt: Date | null
    taskId: string | null
    userId: string | null
  }

  export type TaskActivityCountAggregateOutputType = {
    id: number
    status: number
    comments: number
    updatedAt: number
    taskId: number
    userId: number
    _all: number
  }


  export type TaskActivityMinAggregateInputType = {
    id?: true
    status?: true
    comments?: true
    updatedAt?: true
    taskId?: true
    userId?: true
  }

  export type TaskActivityMaxAggregateInputType = {
    id?: true
    status?: true
    comments?: true
    updatedAt?: true
    taskId?: true
    userId?: true
  }

  export type TaskActivityCountAggregateInputType = {
    id?: true
    status?: true
    comments?: true
    updatedAt?: true
    taskId?: true
    userId?: true
    _all?: true
  }

  export type TaskActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskActivity to aggregate.
     */
    where?: TaskActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskActivities to fetch.
     */
    orderBy?: TaskActivityOrderByWithRelationInput | TaskActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskActivities
    **/
    _count?: true | TaskActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskActivityMaxAggregateInputType
  }

  export type GetTaskActivityAggregateType<T extends TaskActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskActivity[P]>
      : GetScalarType<T[P], AggregateTaskActivity[P]>
  }




  export type TaskActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskActivityWhereInput
    orderBy?: TaskActivityOrderByWithAggregationInput | TaskActivityOrderByWithAggregationInput[]
    by: TaskActivityScalarFieldEnum[] | TaskActivityScalarFieldEnum
    having?: TaskActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskActivityCountAggregateInputType | true
    _min?: TaskActivityMinAggregateInputType
    _max?: TaskActivityMaxAggregateInputType
  }

  export type TaskActivityGroupByOutputType = {
    id: string
    status: $Enums.TaskStatus
    comments: string | null
    updatedAt: Date
    taskId: string
    userId: string
    _count: TaskActivityCountAggregateOutputType | null
    _min: TaskActivityMinAggregateOutputType | null
    _max: TaskActivityMaxAggregateOutputType | null
  }

  type GetTaskActivityGroupByPayload<T extends TaskActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskActivityGroupByOutputType[P]>
            : GetScalarType<T[P], TaskActivityGroupByOutputType[P]>
        }
      >
    >


  export type TaskActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    comments?: boolean
    updatedAt?: boolean
    taskId?: boolean
    userId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskActivity"]>

  export type TaskActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    comments?: boolean
    updatedAt?: boolean
    taskId?: boolean
    userId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskActivity"]>

  export type TaskActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    comments?: boolean
    updatedAt?: boolean
    taskId?: boolean
    userId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskActivity"]>

  export type TaskActivitySelectScalar = {
    id?: boolean
    status?: boolean
    comments?: boolean
    updatedAt?: boolean
    taskId?: boolean
    userId?: boolean
  }

  export type TaskActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "comments" | "updatedAt" | "taskId" | "userId", ExtArgs["result"]["taskActivity"]>
  export type TaskActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskActivity"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.TaskStatus
      comments: string | null
      updatedAt: Date
      taskId: string
      userId: string
    }, ExtArgs["result"]["taskActivity"]>
    composites: {}
  }

  type TaskActivityGetPayload<S extends boolean | null | undefined | TaskActivityDefaultArgs> = $Result.GetResult<Prisma.$TaskActivityPayload, S>

  type TaskActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskActivityCountAggregateInputType | true
    }

  export interface TaskActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskActivity'], meta: { name: 'TaskActivity' } }
    /**
     * Find zero or one TaskActivity that matches the filter.
     * @param {TaskActivityFindUniqueArgs} args - Arguments to find a TaskActivity
     * @example
     * // Get one TaskActivity
     * const taskActivity = await prisma.taskActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskActivityFindUniqueArgs>(args: SelectSubset<T, TaskActivityFindUniqueArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskActivityFindUniqueOrThrowArgs} args - Arguments to find a TaskActivity
     * @example
     * // Get one TaskActivity
     * const taskActivity = await prisma.taskActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityFindFirstArgs} args - Arguments to find a TaskActivity
     * @example
     * // Get one TaskActivity
     * const taskActivity = await prisma.taskActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskActivityFindFirstArgs>(args?: SelectSubset<T, TaskActivityFindFirstArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityFindFirstOrThrowArgs} args - Arguments to find a TaskActivity
     * @example
     * // Get one TaskActivity
     * const taskActivity = await prisma.taskActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskActivities
     * const taskActivities = await prisma.taskActivity.findMany()
     * 
     * // Get first 10 TaskActivities
     * const taskActivities = await prisma.taskActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskActivityWithIdOnly = await prisma.taskActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskActivityFindManyArgs>(args?: SelectSubset<T, TaskActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskActivity.
     * @param {TaskActivityCreateArgs} args - Arguments to create a TaskActivity.
     * @example
     * // Create one TaskActivity
     * const TaskActivity = await prisma.taskActivity.create({
     *   data: {
     *     // ... data to create a TaskActivity
     *   }
     * })
     * 
     */
    create<T extends TaskActivityCreateArgs>(args: SelectSubset<T, TaskActivityCreateArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskActivities.
     * @param {TaskActivityCreateManyArgs} args - Arguments to create many TaskActivities.
     * @example
     * // Create many TaskActivities
     * const taskActivity = await prisma.taskActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskActivityCreateManyArgs>(args?: SelectSubset<T, TaskActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskActivities and returns the data saved in the database.
     * @param {TaskActivityCreateManyAndReturnArgs} args - Arguments to create many TaskActivities.
     * @example
     * // Create many TaskActivities
     * const taskActivity = await prisma.taskActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskActivities and only return the `id`
     * const taskActivityWithIdOnly = await prisma.taskActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskActivity.
     * @param {TaskActivityDeleteArgs} args - Arguments to delete one TaskActivity.
     * @example
     * // Delete one TaskActivity
     * const TaskActivity = await prisma.taskActivity.delete({
     *   where: {
     *     // ... filter to delete one TaskActivity
     *   }
     * })
     * 
     */
    delete<T extends TaskActivityDeleteArgs>(args: SelectSubset<T, TaskActivityDeleteArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskActivity.
     * @param {TaskActivityUpdateArgs} args - Arguments to update one TaskActivity.
     * @example
     * // Update one TaskActivity
     * const taskActivity = await prisma.taskActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskActivityUpdateArgs>(args: SelectSubset<T, TaskActivityUpdateArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskActivities.
     * @param {TaskActivityDeleteManyArgs} args - Arguments to filter TaskActivities to delete.
     * @example
     * // Delete a few TaskActivities
     * const { count } = await prisma.taskActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskActivityDeleteManyArgs>(args?: SelectSubset<T, TaskActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskActivities
     * const taskActivity = await prisma.taskActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskActivityUpdateManyArgs>(args: SelectSubset<T, TaskActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskActivities and returns the data updated in the database.
     * @param {TaskActivityUpdateManyAndReturnArgs} args - Arguments to update many TaskActivities.
     * @example
     * // Update many TaskActivities
     * const taskActivity = await prisma.taskActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskActivities and only return the `id`
     * const taskActivityWithIdOnly = await prisma.taskActivity.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskActivity.
     * @param {TaskActivityUpsertArgs} args - Arguments to update or create a TaskActivity.
     * @example
     * // Update or create a TaskActivity
     * const taskActivity = await prisma.taskActivity.upsert({
     *   create: {
     *     // ... data to create a TaskActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskActivity we want to update
     *   }
     * })
     */
    upsert<T extends TaskActivityUpsertArgs>(args: SelectSubset<T, TaskActivityUpsertArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityCountArgs} args - Arguments to filter TaskActivities to count.
     * @example
     * // Count the number of TaskActivities
     * const count = await prisma.taskActivity.count({
     *   where: {
     *     // ... the filter for the TaskActivities we want to count
     *   }
     * })
    **/
    count<T extends TaskActivityCountArgs>(
      args?: Subset<T, TaskActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskActivityAggregateArgs>(args: Subset<T, TaskActivityAggregateArgs>): Prisma.PrismaPromise<GetTaskActivityAggregateType<T>>

    /**
     * Group by TaskActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityGroupByArgs} args - Group by arguments.
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
      T extends TaskActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskActivityGroupByArgs['orderBy'] }
        : { orderBy?: TaskActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskActivity model
   */
  readonly fields: TaskActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TaskActivity model
   */
  interface TaskActivityFieldRefs {
    readonly id: FieldRef<"TaskActivity", 'String'>
    readonly status: FieldRef<"TaskActivity", 'TaskStatus'>
    readonly comments: FieldRef<"TaskActivity", 'String'>
    readonly updatedAt: FieldRef<"TaskActivity", 'DateTime'>
    readonly taskId: FieldRef<"TaskActivity", 'String'>
    readonly userId: FieldRef<"TaskActivity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TaskActivity findUnique
   */
  export type TaskActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * Filter, which TaskActivity to fetch.
     */
    where: TaskActivityWhereUniqueInput
  }

  /**
   * TaskActivity findUniqueOrThrow
   */
  export type TaskActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * Filter, which TaskActivity to fetch.
     */
    where: TaskActivityWhereUniqueInput
  }

  /**
   * TaskActivity findFirst
   */
  export type TaskActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * Filter, which TaskActivity to fetch.
     */
    where?: TaskActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskActivities to fetch.
     */
    orderBy?: TaskActivityOrderByWithRelationInput | TaskActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskActivities.
     */
    cursor?: TaskActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskActivities.
     */
    distinct?: TaskActivityScalarFieldEnum | TaskActivityScalarFieldEnum[]
  }

  /**
   * TaskActivity findFirstOrThrow
   */
  export type TaskActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * Filter, which TaskActivity to fetch.
     */
    where?: TaskActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskActivities to fetch.
     */
    orderBy?: TaskActivityOrderByWithRelationInput | TaskActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskActivities.
     */
    cursor?: TaskActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskActivities.
     */
    distinct?: TaskActivityScalarFieldEnum | TaskActivityScalarFieldEnum[]
  }

  /**
   * TaskActivity findMany
   */
  export type TaskActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * Filter, which TaskActivities to fetch.
     */
    where?: TaskActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskActivities to fetch.
     */
    orderBy?: TaskActivityOrderByWithRelationInput | TaskActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskActivities.
     */
    cursor?: TaskActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskActivities.
     */
    distinct?: TaskActivityScalarFieldEnum | TaskActivityScalarFieldEnum[]
  }

  /**
   * TaskActivity create
   */
  export type TaskActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskActivity.
     */
    data: XOR<TaskActivityCreateInput, TaskActivityUncheckedCreateInput>
  }

  /**
   * TaskActivity createMany
   */
  export type TaskActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskActivities.
     */
    data: TaskActivityCreateManyInput | TaskActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskActivity createManyAndReturn
   */
  export type TaskActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * The data used to create many TaskActivities.
     */
    data: TaskActivityCreateManyInput | TaskActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskActivity update
   */
  export type TaskActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskActivity.
     */
    data: XOR<TaskActivityUpdateInput, TaskActivityUncheckedUpdateInput>
    /**
     * Choose, which TaskActivity to update.
     */
    where: TaskActivityWhereUniqueInput
  }

  /**
   * TaskActivity updateMany
   */
  export type TaskActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskActivities.
     */
    data: XOR<TaskActivityUpdateManyMutationInput, TaskActivityUncheckedUpdateManyInput>
    /**
     * Filter which TaskActivities to update
     */
    where?: TaskActivityWhereInput
    /**
     * Limit how many TaskActivities to update.
     */
    limit?: number
  }

  /**
   * TaskActivity updateManyAndReturn
   */
  export type TaskActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * The data used to update TaskActivities.
     */
    data: XOR<TaskActivityUpdateManyMutationInput, TaskActivityUncheckedUpdateManyInput>
    /**
     * Filter which TaskActivities to update
     */
    where?: TaskActivityWhereInput
    /**
     * Limit how many TaskActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskActivity upsert
   */
  export type TaskActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskActivity to update in case it exists.
     */
    where: TaskActivityWhereUniqueInput
    /**
     * In case the TaskActivity found by the `where` argument doesn't exist, create a new TaskActivity with this data.
     */
    create: XOR<TaskActivityCreateInput, TaskActivityUncheckedCreateInput>
    /**
     * In case the TaskActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskActivityUpdateInput, TaskActivityUncheckedUpdateInput>
  }

  /**
   * TaskActivity delete
   */
  export type TaskActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * Filter which TaskActivity to delete.
     */
    where: TaskActivityWhereUniqueInput
  }

  /**
   * TaskActivity deleteMany
   */
  export type TaskActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskActivities to delete
     */
    where?: TaskActivityWhereInput
    /**
     * Limit how many TaskActivities to delete.
     */
    limit?: number
  }

  /**
   * TaskActivity without action
   */
  export type TaskActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
  }


  /**
   * Model DrillActivity
   */

  export type AggregateDrillActivity = {
    _count: DrillActivityCountAggregateOutputType | null
    _min: DrillActivityMinAggregateOutputType | null
    _max: DrillActivityMaxAggregateOutputType | null
  }

  export type DrillActivityMinAggregateOutputType = {
    id: string | null
    attended: boolean | null
    completed: boolean | null
    updatedAt: Date | null
    drillId: string | null
    userId: string | null
  }

  export type DrillActivityMaxAggregateOutputType = {
    id: string | null
    attended: boolean | null
    completed: boolean | null
    updatedAt: Date | null
    drillId: string | null
    userId: string | null
  }

  export type DrillActivityCountAggregateOutputType = {
    id: number
    attended: number
    completed: number
    updatedAt: number
    drillId: number
    userId: number
    _all: number
  }


  export type DrillActivityMinAggregateInputType = {
    id?: true
    attended?: true
    completed?: true
    updatedAt?: true
    drillId?: true
    userId?: true
  }

  export type DrillActivityMaxAggregateInputType = {
    id?: true
    attended?: true
    completed?: true
    updatedAt?: true
    drillId?: true
    userId?: true
  }

  export type DrillActivityCountAggregateInputType = {
    id?: true
    attended?: true
    completed?: true
    updatedAt?: true
    drillId?: true
    userId?: true
    _all?: true
  }

  export type DrillActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrillActivity to aggregate.
     */
    where?: DrillActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrillActivities to fetch.
     */
    orderBy?: DrillActivityOrderByWithRelationInput | DrillActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrillActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrillActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrillActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DrillActivities
    **/
    _count?: true | DrillActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrillActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrillActivityMaxAggregateInputType
  }

  export type GetDrillActivityAggregateType<T extends DrillActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateDrillActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrillActivity[P]>
      : GetScalarType<T[P], AggregateDrillActivity[P]>
  }




  export type DrillActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrillActivityWhereInput
    orderBy?: DrillActivityOrderByWithAggregationInput | DrillActivityOrderByWithAggregationInput[]
    by: DrillActivityScalarFieldEnum[] | DrillActivityScalarFieldEnum
    having?: DrillActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrillActivityCountAggregateInputType | true
    _min?: DrillActivityMinAggregateInputType
    _max?: DrillActivityMaxAggregateInputType
  }

  export type DrillActivityGroupByOutputType = {
    id: string
    attended: boolean
    completed: boolean
    updatedAt: Date
    drillId: string
    userId: string
    _count: DrillActivityCountAggregateOutputType | null
    _min: DrillActivityMinAggregateOutputType | null
    _max: DrillActivityMaxAggregateOutputType | null
  }

  type GetDrillActivityGroupByPayload<T extends DrillActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrillActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrillActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrillActivityGroupByOutputType[P]>
            : GetScalarType<T[P], DrillActivityGroupByOutputType[P]>
        }
      >
    >


  export type DrillActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attended?: boolean
    completed?: boolean
    updatedAt?: boolean
    drillId?: boolean
    userId?: boolean
    drill?: boolean | DrillDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drillActivity"]>

  export type DrillActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attended?: boolean
    completed?: boolean
    updatedAt?: boolean
    drillId?: boolean
    userId?: boolean
    drill?: boolean | DrillDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drillActivity"]>

  export type DrillActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attended?: boolean
    completed?: boolean
    updatedAt?: boolean
    drillId?: boolean
    userId?: boolean
    drill?: boolean | DrillDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drillActivity"]>

  export type DrillActivitySelectScalar = {
    id?: boolean
    attended?: boolean
    completed?: boolean
    updatedAt?: boolean
    drillId?: boolean
    userId?: boolean
  }

  export type DrillActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "attended" | "completed" | "updatedAt" | "drillId" | "userId", ExtArgs["result"]["drillActivity"]>
  export type DrillActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drill?: boolean | DrillDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DrillActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drill?: boolean | DrillDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DrillActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drill?: boolean | DrillDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DrillActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DrillActivity"
    objects: {
      drill: Prisma.$DrillPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      attended: boolean
      completed: boolean
      updatedAt: Date
      drillId: string
      userId: string
    }, ExtArgs["result"]["drillActivity"]>
    composites: {}
  }

  type DrillActivityGetPayload<S extends boolean | null | undefined | DrillActivityDefaultArgs> = $Result.GetResult<Prisma.$DrillActivityPayload, S>

  type DrillActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrillActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrillActivityCountAggregateInputType | true
    }

  export interface DrillActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DrillActivity'], meta: { name: 'DrillActivity' } }
    /**
     * Find zero or one DrillActivity that matches the filter.
     * @param {DrillActivityFindUniqueArgs} args - Arguments to find a DrillActivity
     * @example
     * // Get one DrillActivity
     * const drillActivity = await prisma.drillActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrillActivityFindUniqueArgs>(args: SelectSubset<T, DrillActivityFindUniqueArgs<ExtArgs>>): Prisma__DrillActivityClient<$Result.GetResult<Prisma.$DrillActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DrillActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrillActivityFindUniqueOrThrowArgs} args - Arguments to find a DrillActivity
     * @example
     * // Get one DrillActivity
     * const drillActivity = await prisma.drillActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrillActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, DrillActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrillActivityClient<$Result.GetResult<Prisma.$DrillActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrillActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillActivityFindFirstArgs} args - Arguments to find a DrillActivity
     * @example
     * // Get one DrillActivity
     * const drillActivity = await prisma.drillActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrillActivityFindFirstArgs>(args?: SelectSubset<T, DrillActivityFindFirstArgs<ExtArgs>>): Prisma__DrillActivityClient<$Result.GetResult<Prisma.$DrillActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrillActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillActivityFindFirstOrThrowArgs} args - Arguments to find a DrillActivity
     * @example
     * // Get one DrillActivity
     * const drillActivity = await prisma.drillActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrillActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, DrillActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrillActivityClient<$Result.GetResult<Prisma.$DrillActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DrillActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DrillActivities
     * const drillActivities = await prisma.drillActivity.findMany()
     * 
     * // Get first 10 DrillActivities
     * const drillActivities = await prisma.drillActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drillActivityWithIdOnly = await prisma.drillActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DrillActivityFindManyArgs>(args?: SelectSubset<T, DrillActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrillActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DrillActivity.
     * @param {DrillActivityCreateArgs} args - Arguments to create a DrillActivity.
     * @example
     * // Create one DrillActivity
     * const DrillActivity = await prisma.drillActivity.create({
     *   data: {
     *     // ... data to create a DrillActivity
     *   }
     * })
     * 
     */
    create<T extends DrillActivityCreateArgs>(args: SelectSubset<T, DrillActivityCreateArgs<ExtArgs>>): Prisma__DrillActivityClient<$Result.GetResult<Prisma.$DrillActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DrillActivities.
     * @param {DrillActivityCreateManyArgs} args - Arguments to create many DrillActivities.
     * @example
     * // Create many DrillActivities
     * const drillActivity = await prisma.drillActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrillActivityCreateManyArgs>(args?: SelectSubset<T, DrillActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DrillActivities and returns the data saved in the database.
     * @param {DrillActivityCreateManyAndReturnArgs} args - Arguments to create many DrillActivities.
     * @example
     * // Create many DrillActivities
     * const drillActivity = await prisma.drillActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DrillActivities and only return the `id`
     * const drillActivityWithIdOnly = await prisma.drillActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DrillActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, DrillActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrillActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DrillActivity.
     * @param {DrillActivityDeleteArgs} args - Arguments to delete one DrillActivity.
     * @example
     * // Delete one DrillActivity
     * const DrillActivity = await prisma.drillActivity.delete({
     *   where: {
     *     // ... filter to delete one DrillActivity
     *   }
     * })
     * 
     */
    delete<T extends DrillActivityDeleteArgs>(args: SelectSubset<T, DrillActivityDeleteArgs<ExtArgs>>): Prisma__DrillActivityClient<$Result.GetResult<Prisma.$DrillActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DrillActivity.
     * @param {DrillActivityUpdateArgs} args - Arguments to update one DrillActivity.
     * @example
     * // Update one DrillActivity
     * const drillActivity = await prisma.drillActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrillActivityUpdateArgs>(args: SelectSubset<T, DrillActivityUpdateArgs<ExtArgs>>): Prisma__DrillActivityClient<$Result.GetResult<Prisma.$DrillActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DrillActivities.
     * @param {DrillActivityDeleteManyArgs} args - Arguments to filter DrillActivities to delete.
     * @example
     * // Delete a few DrillActivities
     * const { count } = await prisma.drillActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrillActivityDeleteManyArgs>(args?: SelectSubset<T, DrillActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrillActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DrillActivities
     * const drillActivity = await prisma.drillActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrillActivityUpdateManyArgs>(args: SelectSubset<T, DrillActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrillActivities and returns the data updated in the database.
     * @param {DrillActivityUpdateManyAndReturnArgs} args - Arguments to update many DrillActivities.
     * @example
     * // Update many DrillActivities
     * const drillActivity = await prisma.drillActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DrillActivities and only return the `id`
     * const drillActivityWithIdOnly = await prisma.drillActivity.updateManyAndReturn({
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
    updateManyAndReturn<T extends DrillActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, DrillActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrillActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DrillActivity.
     * @param {DrillActivityUpsertArgs} args - Arguments to update or create a DrillActivity.
     * @example
     * // Update or create a DrillActivity
     * const drillActivity = await prisma.drillActivity.upsert({
     *   create: {
     *     // ... data to create a DrillActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DrillActivity we want to update
     *   }
     * })
     */
    upsert<T extends DrillActivityUpsertArgs>(args: SelectSubset<T, DrillActivityUpsertArgs<ExtArgs>>): Prisma__DrillActivityClient<$Result.GetResult<Prisma.$DrillActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DrillActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillActivityCountArgs} args - Arguments to filter DrillActivities to count.
     * @example
     * // Count the number of DrillActivities
     * const count = await prisma.drillActivity.count({
     *   where: {
     *     // ... the filter for the DrillActivities we want to count
     *   }
     * })
    **/
    count<T extends DrillActivityCountArgs>(
      args?: Subset<T, DrillActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrillActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DrillActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DrillActivityAggregateArgs>(args: Subset<T, DrillActivityAggregateArgs>): Prisma.PrismaPromise<GetDrillActivityAggregateType<T>>

    /**
     * Group by DrillActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillActivityGroupByArgs} args - Group by arguments.
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
      T extends DrillActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrillActivityGroupByArgs['orderBy'] }
        : { orderBy?: DrillActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DrillActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrillActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DrillActivity model
   */
  readonly fields: DrillActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DrillActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrillActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drill<T extends DrillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DrillDefaultArgs<ExtArgs>>): Prisma__DrillClient<$Result.GetResult<Prisma.$DrillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DrillActivity model
   */
  interface DrillActivityFieldRefs {
    readonly id: FieldRef<"DrillActivity", 'String'>
    readonly attended: FieldRef<"DrillActivity", 'Boolean'>
    readonly completed: FieldRef<"DrillActivity", 'Boolean'>
    readonly updatedAt: FieldRef<"DrillActivity", 'DateTime'>
    readonly drillId: FieldRef<"DrillActivity", 'String'>
    readonly userId: FieldRef<"DrillActivity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DrillActivity findUnique
   */
  export type DrillActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillActivity
     */
    select?: DrillActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillActivity
     */
    omit?: DrillActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillActivityInclude<ExtArgs> | null
    /**
     * Filter, which DrillActivity to fetch.
     */
    where: DrillActivityWhereUniqueInput
  }

  /**
   * DrillActivity findUniqueOrThrow
   */
  export type DrillActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillActivity
     */
    select?: DrillActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillActivity
     */
    omit?: DrillActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillActivityInclude<ExtArgs> | null
    /**
     * Filter, which DrillActivity to fetch.
     */
    where: DrillActivityWhereUniqueInput
  }

  /**
   * DrillActivity findFirst
   */
  export type DrillActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillActivity
     */
    select?: DrillActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillActivity
     */
    omit?: DrillActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillActivityInclude<ExtArgs> | null
    /**
     * Filter, which DrillActivity to fetch.
     */
    where?: DrillActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrillActivities to fetch.
     */
    orderBy?: DrillActivityOrderByWithRelationInput | DrillActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrillActivities.
     */
    cursor?: DrillActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrillActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrillActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrillActivities.
     */
    distinct?: DrillActivityScalarFieldEnum | DrillActivityScalarFieldEnum[]
  }

  /**
   * DrillActivity findFirstOrThrow
   */
  export type DrillActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillActivity
     */
    select?: DrillActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillActivity
     */
    omit?: DrillActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillActivityInclude<ExtArgs> | null
    /**
     * Filter, which DrillActivity to fetch.
     */
    where?: DrillActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrillActivities to fetch.
     */
    orderBy?: DrillActivityOrderByWithRelationInput | DrillActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrillActivities.
     */
    cursor?: DrillActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrillActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrillActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrillActivities.
     */
    distinct?: DrillActivityScalarFieldEnum | DrillActivityScalarFieldEnum[]
  }

  /**
   * DrillActivity findMany
   */
  export type DrillActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillActivity
     */
    select?: DrillActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillActivity
     */
    omit?: DrillActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillActivityInclude<ExtArgs> | null
    /**
     * Filter, which DrillActivities to fetch.
     */
    where?: DrillActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrillActivities to fetch.
     */
    orderBy?: DrillActivityOrderByWithRelationInput | DrillActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DrillActivities.
     */
    cursor?: DrillActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrillActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrillActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrillActivities.
     */
    distinct?: DrillActivityScalarFieldEnum | DrillActivityScalarFieldEnum[]
  }

  /**
   * DrillActivity create
   */
  export type DrillActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillActivity
     */
    select?: DrillActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillActivity
     */
    omit?: DrillActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a DrillActivity.
     */
    data: XOR<DrillActivityCreateInput, DrillActivityUncheckedCreateInput>
  }

  /**
   * DrillActivity createMany
   */
  export type DrillActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DrillActivities.
     */
    data: DrillActivityCreateManyInput | DrillActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DrillActivity createManyAndReturn
   */
  export type DrillActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillActivity
     */
    select?: DrillActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DrillActivity
     */
    omit?: DrillActivityOmit<ExtArgs> | null
    /**
     * The data used to create many DrillActivities.
     */
    data: DrillActivityCreateManyInput | DrillActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DrillActivity update
   */
  export type DrillActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillActivity
     */
    select?: DrillActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillActivity
     */
    omit?: DrillActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a DrillActivity.
     */
    data: XOR<DrillActivityUpdateInput, DrillActivityUncheckedUpdateInput>
    /**
     * Choose, which DrillActivity to update.
     */
    where: DrillActivityWhereUniqueInput
  }

  /**
   * DrillActivity updateMany
   */
  export type DrillActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DrillActivities.
     */
    data: XOR<DrillActivityUpdateManyMutationInput, DrillActivityUncheckedUpdateManyInput>
    /**
     * Filter which DrillActivities to update
     */
    where?: DrillActivityWhereInput
    /**
     * Limit how many DrillActivities to update.
     */
    limit?: number
  }

  /**
   * DrillActivity updateManyAndReturn
   */
  export type DrillActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillActivity
     */
    select?: DrillActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DrillActivity
     */
    omit?: DrillActivityOmit<ExtArgs> | null
    /**
     * The data used to update DrillActivities.
     */
    data: XOR<DrillActivityUpdateManyMutationInput, DrillActivityUncheckedUpdateManyInput>
    /**
     * Filter which DrillActivities to update
     */
    where?: DrillActivityWhereInput
    /**
     * Limit how many DrillActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DrillActivity upsert
   */
  export type DrillActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillActivity
     */
    select?: DrillActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillActivity
     */
    omit?: DrillActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the DrillActivity to update in case it exists.
     */
    where: DrillActivityWhereUniqueInput
    /**
     * In case the DrillActivity found by the `where` argument doesn't exist, create a new DrillActivity with this data.
     */
    create: XOR<DrillActivityCreateInput, DrillActivityUncheckedCreateInput>
    /**
     * In case the DrillActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrillActivityUpdateInput, DrillActivityUncheckedUpdateInput>
  }

  /**
   * DrillActivity delete
   */
  export type DrillActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillActivity
     */
    select?: DrillActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillActivity
     */
    omit?: DrillActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillActivityInclude<ExtArgs> | null
    /**
     * Filter which DrillActivity to delete.
     */
    where: DrillActivityWhereUniqueInput
  }

  /**
   * DrillActivity deleteMany
   */
  export type DrillActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrillActivities to delete
     */
    where?: DrillActivityWhereInput
    /**
     * Limit how many DrillActivities to delete.
     */
    limit?: number
  }

  /**
   * DrillActivity without action
   */
  export type DrillActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillActivity
     */
    select?: DrillActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillActivity
     */
    omit?: DrillActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillActivityInclude<ExtArgs> | null
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
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ShipScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imoNumber: 'imoNumber',
    createdAt: 'createdAt'
  };

  export type ShipScalarFieldEnum = (typeof ShipScalarFieldEnum)[keyof typeof ShipScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    dueDate: 'dueDate',
    description: 'description',
    createdAt: 'createdAt',
    shipId: 'shipId',
    createdById: 'createdById'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const DrillScalarFieldEnum: {
    id: 'id',
    title: 'title',
    drillType: 'drillType',
    scheduledDate: 'scheduledDate',
    createdAt: 'createdAt',
    shipId: 'shipId',
    createdById: 'createdById'
  };

  export type DrillScalarFieldEnum = (typeof DrillScalarFieldEnum)[keyof typeof DrillScalarFieldEnum]


  export const TaskActivityScalarFieldEnum: {
    id: 'id',
    status: 'status',
    comments: 'comments',
    updatedAt: 'updatedAt',
    taskId: 'taskId',
    userId: 'userId'
  };

  export type TaskActivityScalarFieldEnum = (typeof TaskActivityScalarFieldEnum)[keyof typeof TaskActivityScalarFieldEnum]


  export const DrillActivityScalarFieldEnum: {
    id: 'id',
    attended: 'attended',
    completed: 'completed',
    updatedAt: 'updatedAt',
    drillId: 'drillId',
    userId: 'userId'
  };

  export type DrillActivityScalarFieldEnum = (typeof DrillActivityScalarFieldEnum)[keyof typeof DrillActivityScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    createdTasks?: TaskListRelationFilter
    createdDrills?: DrillListRelationFilter
    taskActivity?: TaskActivityListRelationFilter
    drillActivity?: DrillActivityListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    createdTasks?: TaskOrderByRelationAggregateInput
    createdDrills?: DrillOrderByRelationAggregateInput
    taskActivity?: TaskActivityOrderByRelationAggregateInput
    drillActivity?: DrillActivityOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    createdTasks?: TaskListRelationFilter
    createdDrills?: DrillListRelationFilter
    taskActivity?: TaskActivityListRelationFilter
    drillActivity?: DrillActivityListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ShipWhereInput = {
    AND?: ShipWhereInput | ShipWhereInput[]
    OR?: ShipWhereInput[]
    NOT?: ShipWhereInput | ShipWhereInput[]
    id?: StringFilter<"Ship"> | string
    name?: StringFilter<"Ship"> | string
    imoNumber?: StringFilter<"Ship"> | string
    createdAt?: DateTimeFilter<"Ship"> | Date | string
    tasks?: TaskListRelationFilter
    drills?: DrillListRelationFilter
  }

  export type ShipOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imoNumber?: SortOrder
    createdAt?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
    drills?: DrillOrderByRelationAggregateInput
  }

  export type ShipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    imoNumber?: string
    AND?: ShipWhereInput | ShipWhereInput[]
    OR?: ShipWhereInput[]
    NOT?: ShipWhereInput | ShipWhereInput[]
    name?: StringFilter<"Ship"> | string
    createdAt?: DateTimeFilter<"Ship"> | Date | string
    tasks?: TaskListRelationFilter
    drills?: DrillListRelationFilter
  }, "id" | "imoNumber">

  export type ShipOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imoNumber?: SortOrder
    createdAt?: SortOrder
    _count?: ShipCountOrderByAggregateInput
    _max?: ShipMaxOrderByAggregateInput
    _min?: ShipMinOrderByAggregateInput
  }

  export type ShipScalarWhereWithAggregatesInput = {
    AND?: ShipScalarWhereWithAggregatesInput | ShipScalarWhereWithAggregatesInput[]
    OR?: ShipScalarWhereWithAggregatesInput[]
    NOT?: ShipScalarWhereWithAggregatesInput | ShipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ship"> | string
    name?: StringWithAggregatesFilter<"Ship"> | string
    imoNumber?: StringWithAggregatesFilter<"Ship"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Ship"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    dueDate?: DateTimeFilter<"Task"> | Date | string
    description?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    shipId?: StringFilter<"Task"> | string
    createdById?: StringFilter<"Task"> | string
    ship?: XOR<ShipScalarRelationFilter, ShipWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    taskActivity?: TaskActivityListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    dueDate?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    shipId?: SortOrder
    createdById?: SortOrder
    ship?: ShipOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    taskActivity?: TaskActivityOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    dueDate?: DateTimeFilter<"Task"> | Date | string
    description?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    shipId?: StringFilter<"Task"> | string
    createdById?: StringFilter<"Task"> | string
    ship?: XOR<ShipScalarRelationFilter, ShipWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    taskActivity?: TaskActivityListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    dueDate?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    shipId?: SortOrder
    createdById?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    dueDate?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    shipId?: StringWithAggregatesFilter<"Task"> | string
    createdById?: StringWithAggregatesFilter<"Task"> | string
  }

  export type DrillWhereInput = {
    AND?: DrillWhereInput | DrillWhereInput[]
    OR?: DrillWhereInput[]
    NOT?: DrillWhereInput | DrillWhereInput[]
    id?: StringFilter<"Drill"> | string
    title?: StringFilter<"Drill"> | string
    drillType?: StringFilter<"Drill"> | string
    scheduledDate?: DateTimeFilter<"Drill"> | Date | string
    createdAt?: DateTimeFilter<"Drill"> | Date | string
    shipId?: StringFilter<"Drill"> | string
    createdById?: StringFilter<"Drill"> | string
    ship?: XOR<ShipScalarRelationFilter, ShipWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    drillActivity?: DrillActivityListRelationFilter
  }

  export type DrillOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    drillType?: SortOrder
    scheduledDate?: SortOrder
    createdAt?: SortOrder
    shipId?: SortOrder
    createdById?: SortOrder
    ship?: ShipOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    drillActivity?: DrillActivityOrderByRelationAggregateInput
  }

  export type DrillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DrillWhereInput | DrillWhereInput[]
    OR?: DrillWhereInput[]
    NOT?: DrillWhereInput | DrillWhereInput[]
    title?: StringFilter<"Drill"> | string
    drillType?: StringFilter<"Drill"> | string
    scheduledDate?: DateTimeFilter<"Drill"> | Date | string
    createdAt?: DateTimeFilter<"Drill"> | Date | string
    shipId?: StringFilter<"Drill"> | string
    createdById?: StringFilter<"Drill"> | string
    ship?: XOR<ShipScalarRelationFilter, ShipWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    drillActivity?: DrillActivityListRelationFilter
  }, "id">

  export type DrillOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    drillType?: SortOrder
    scheduledDate?: SortOrder
    createdAt?: SortOrder
    shipId?: SortOrder
    createdById?: SortOrder
    _count?: DrillCountOrderByAggregateInput
    _max?: DrillMaxOrderByAggregateInput
    _min?: DrillMinOrderByAggregateInput
  }

  export type DrillScalarWhereWithAggregatesInput = {
    AND?: DrillScalarWhereWithAggregatesInput | DrillScalarWhereWithAggregatesInput[]
    OR?: DrillScalarWhereWithAggregatesInput[]
    NOT?: DrillScalarWhereWithAggregatesInput | DrillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Drill"> | string
    title?: StringWithAggregatesFilter<"Drill"> | string
    drillType?: StringWithAggregatesFilter<"Drill"> | string
    scheduledDate?: DateTimeWithAggregatesFilter<"Drill"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Drill"> | Date | string
    shipId?: StringWithAggregatesFilter<"Drill"> | string
    createdById?: StringWithAggregatesFilter<"Drill"> | string
  }

  export type TaskActivityWhereInput = {
    AND?: TaskActivityWhereInput | TaskActivityWhereInput[]
    OR?: TaskActivityWhereInput[]
    NOT?: TaskActivityWhereInput | TaskActivityWhereInput[]
    id?: StringFilter<"TaskActivity"> | string
    status?: EnumTaskStatusFilter<"TaskActivity"> | $Enums.TaskStatus
    comments?: StringNullableFilter<"TaskActivity"> | string | null
    updatedAt?: DateTimeFilter<"TaskActivity"> | Date | string
    taskId?: StringFilter<"TaskActivity"> | string
    userId?: StringFilter<"TaskActivity"> | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TaskActivityOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    comments?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    task?: TaskOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TaskActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    taskId_userId?: TaskActivityTaskIdUserIdCompoundUniqueInput
    AND?: TaskActivityWhereInput | TaskActivityWhereInput[]
    OR?: TaskActivityWhereInput[]
    NOT?: TaskActivityWhereInput | TaskActivityWhereInput[]
    status?: EnumTaskStatusFilter<"TaskActivity"> | $Enums.TaskStatus
    comments?: StringNullableFilter<"TaskActivity"> | string | null
    updatedAt?: DateTimeFilter<"TaskActivity"> | Date | string
    taskId?: StringFilter<"TaskActivity"> | string
    userId?: StringFilter<"TaskActivity"> | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "taskId_userId">

  export type TaskActivityOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    comments?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    _count?: TaskActivityCountOrderByAggregateInput
    _max?: TaskActivityMaxOrderByAggregateInput
    _min?: TaskActivityMinOrderByAggregateInput
  }

  export type TaskActivityScalarWhereWithAggregatesInput = {
    AND?: TaskActivityScalarWhereWithAggregatesInput | TaskActivityScalarWhereWithAggregatesInput[]
    OR?: TaskActivityScalarWhereWithAggregatesInput[]
    NOT?: TaskActivityScalarWhereWithAggregatesInput | TaskActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskActivity"> | string
    status?: EnumTaskStatusWithAggregatesFilter<"TaskActivity"> | $Enums.TaskStatus
    comments?: StringNullableWithAggregatesFilter<"TaskActivity"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"TaskActivity"> | Date | string
    taskId?: StringWithAggregatesFilter<"TaskActivity"> | string
    userId?: StringWithAggregatesFilter<"TaskActivity"> | string
  }

  export type DrillActivityWhereInput = {
    AND?: DrillActivityWhereInput | DrillActivityWhereInput[]
    OR?: DrillActivityWhereInput[]
    NOT?: DrillActivityWhereInput | DrillActivityWhereInput[]
    id?: StringFilter<"DrillActivity"> | string
    attended?: BoolFilter<"DrillActivity"> | boolean
    completed?: BoolFilter<"DrillActivity"> | boolean
    updatedAt?: DateTimeFilter<"DrillActivity"> | Date | string
    drillId?: StringFilter<"DrillActivity"> | string
    userId?: StringFilter<"DrillActivity"> | string
    drill?: XOR<DrillScalarRelationFilter, DrillWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DrillActivityOrderByWithRelationInput = {
    id?: SortOrder
    attended?: SortOrder
    completed?: SortOrder
    updatedAt?: SortOrder
    drillId?: SortOrder
    userId?: SortOrder
    drill?: DrillOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type DrillActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    drillId_userId?: DrillActivityDrillIdUserIdCompoundUniqueInput
    AND?: DrillActivityWhereInput | DrillActivityWhereInput[]
    OR?: DrillActivityWhereInput[]
    NOT?: DrillActivityWhereInput | DrillActivityWhereInput[]
    attended?: BoolFilter<"DrillActivity"> | boolean
    completed?: BoolFilter<"DrillActivity"> | boolean
    updatedAt?: DateTimeFilter<"DrillActivity"> | Date | string
    drillId?: StringFilter<"DrillActivity"> | string
    userId?: StringFilter<"DrillActivity"> | string
    drill?: XOR<DrillScalarRelationFilter, DrillWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "drillId_userId">

  export type DrillActivityOrderByWithAggregationInput = {
    id?: SortOrder
    attended?: SortOrder
    completed?: SortOrder
    updatedAt?: SortOrder
    drillId?: SortOrder
    userId?: SortOrder
    _count?: DrillActivityCountOrderByAggregateInput
    _max?: DrillActivityMaxOrderByAggregateInput
    _min?: DrillActivityMinOrderByAggregateInput
  }

  export type DrillActivityScalarWhereWithAggregatesInput = {
    AND?: DrillActivityScalarWhereWithAggregatesInput | DrillActivityScalarWhereWithAggregatesInput[]
    OR?: DrillActivityScalarWhereWithAggregatesInput[]
    NOT?: DrillActivityScalarWhereWithAggregatesInput | DrillActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DrillActivity"> | string
    attended?: BoolWithAggregatesFilter<"DrillActivity"> | boolean
    completed?: BoolWithAggregatesFilter<"DrillActivity"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"DrillActivity"> | Date | string
    drillId?: StringWithAggregatesFilter<"DrillActivity"> | string
    userId?: StringWithAggregatesFilter<"DrillActivity"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    createdDrills?: DrillCreateNestedManyWithoutCreatedByInput
    taskActivity?: TaskActivityCreateNestedManyWithoutUserInput
    drillActivity?: DrillActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    createdDrills?: DrillUncheckedCreateNestedManyWithoutCreatedByInput
    taskActivity?: TaskActivityUncheckedCreateNestedManyWithoutUserInput
    drillActivity?: DrillActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    createdDrills?: DrillUpdateManyWithoutCreatedByNestedInput
    taskActivity?: TaskActivityUpdateManyWithoutUserNestedInput
    drillActivity?: DrillActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    createdDrills?: DrillUncheckedUpdateManyWithoutCreatedByNestedInput
    taskActivity?: TaskActivityUncheckedUpdateManyWithoutUserNestedInput
    drillActivity?: DrillActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipCreateInput = {
    id?: string
    name: string
    imoNumber: string
    createdAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutShipInput
    drills?: DrillCreateNestedManyWithoutShipInput
  }

  export type ShipUncheckedCreateInput = {
    id?: string
    name: string
    imoNumber: string
    createdAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutShipInput
    drills?: DrillUncheckedCreateNestedManyWithoutShipInput
  }

  export type ShipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imoNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutShipNestedInput
    drills?: DrillUpdateManyWithoutShipNestedInput
  }

  export type ShipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imoNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutShipNestedInput
    drills?: DrillUncheckedUpdateManyWithoutShipNestedInput
  }

  export type ShipCreateManyInput = {
    id?: string
    name: string
    imoNumber: string
    createdAt?: Date | string
  }

  export type ShipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imoNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imoNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    dueDate: Date | string
    description?: string | null
    createdAt?: Date | string
    ship: ShipCreateNestedOneWithoutTasksInput
    createdBy: UserCreateNestedOneWithoutCreatedTasksInput
    taskActivity?: TaskActivityCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    dueDate: Date | string
    description?: string | null
    createdAt?: Date | string
    shipId: string
    createdById: string
    taskActivity?: TaskActivityUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ship?: ShipUpdateOneRequiredWithoutTasksNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    taskActivity?: TaskActivityUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    taskActivity?: TaskActivityUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    dueDate: Date | string
    description?: string | null
    createdAt?: Date | string
    shipId: string
    createdById: string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type DrillCreateInput = {
    id?: string
    title: string
    drillType: string
    scheduledDate: Date | string
    createdAt?: Date | string
    ship: ShipCreateNestedOneWithoutDrillsInput
    createdBy: UserCreateNestedOneWithoutCreatedDrillsInput
    drillActivity?: DrillActivityCreateNestedManyWithoutDrillInput
  }

  export type DrillUncheckedCreateInput = {
    id?: string
    title: string
    drillType: string
    scheduledDate: Date | string
    createdAt?: Date | string
    shipId: string
    createdById: string
    drillActivity?: DrillActivityUncheckedCreateNestedManyWithoutDrillInput
  }

  export type DrillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    drillType?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ship?: ShipUpdateOneRequiredWithoutDrillsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedDrillsNestedInput
    drillActivity?: DrillActivityUpdateManyWithoutDrillNestedInput
  }

  export type DrillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    drillType?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    drillActivity?: DrillActivityUncheckedUpdateManyWithoutDrillNestedInput
  }

  export type DrillCreateManyInput = {
    id?: string
    title: string
    drillType: string
    scheduledDate: Date | string
    createdAt?: Date | string
    shipId: string
    createdById: string
  }

  export type DrillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    drillType?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    drillType?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type TaskActivityCreateInput = {
    id?: string
    status?: $Enums.TaskStatus
    comments?: string | null
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutTaskActivityInput
    user: UserCreateNestedOneWithoutTaskActivityInput
  }

  export type TaskActivityUncheckedCreateInput = {
    id?: string
    status?: $Enums.TaskStatus
    comments?: string | null
    updatedAt?: Date | string
    taskId: string
    userId: string
  }

  export type TaskActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutTaskActivityNestedInput
    user?: UserUpdateOneRequiredWithoutTaskActivityNestedInput
  }

  export type TaskActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskActivityCreateManyInput = {
    id?: string
    status?: $Enums.TaskStatus
    comments?: string | null
    updatedAt?: Date | string
    taskId: string
    userId: string
  }

  export type TaskActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DrillActivityCreateInput = {
    id?: string
    attended?: boolean
    completed?: boolean
    updatedAt?: Date | string
    drill: DrillCreateNestedOneWithoutDrillActivityInput
    user: UserCreateNestedOneWithoutDrillActivityInput
  }

  export type DrillActivityUncheckedCreateInput = {
    id?: string
    attended?: boolean
    completed?: boolean
    updatedAt?: Date | string
    drillId: string
    userId: string
  }

  export type DrillActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attended?: BoolFieldUpdateOperationsInput | boolean
    completed?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drill?: DrillUpdateOneRequiredWithoutDrillActivityNestedInput
    user?: UserUpdateOneRequiredWithoutDrillActivityNestedInput
  }

  export type DrillActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attended?: BoolFieldUpdateOperationsInput | boolean
    completed?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drillId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DrillActivityCreateManyInput = {
    id?: string
    attended?: boolean
    completed?: boolean
    updatedAt?: Date | string
    drillId: string
    userId: string
  }

  export type DrillActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    attended?: BoolFieldUpdateOperationsInput | boolean
    completed?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrillActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    attended?: BoolFieldUpdateOperationsInput | boolean
    completed?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drillId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type DrillListRelationFilter = {
    every?: DrillWhereInput
    some?: DrillWhereInput
    none?: DrillWhereInput
  }

  export type TaskActivityListRelationFilter = {
    every?: TaskActivityWhereInput
    some?: TaskActivityWhereInput
    none?: TaskActivityWhereInput
  }

  export type DrillActivityListRelationFilter = {
    every?: DrillActivityWhereInput
    some?: DrillActivityWhereInput
    none?: DrillActivityWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DrillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DrillActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type ShipCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imoNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type ShipMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imoNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type ShipMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imoNumber?: SortOrder
    createdAt?: SortOrder
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

  export type ShipScalarRelationFilter = {
    is?: ShipWhereInput
    isNot?: ShipWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    dueDate?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    shipId?: SortOrder
    createdById?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    dueDate?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    shipId?: SortOrder
    createdById?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    dueDate?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    shipId?: SortOrder
    createdById?: SortOrder
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

  export type DrillCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    drillType?: SortOrder
    scheduledDate?: SortOrder
    createdAt?: SortOrder
    shipId?: SortOrder
    createdById?: SortOrder
  }

  export type DrillMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    drillType?: SortOrder
    scheduledDate?: SortOrder
    createdAt?: SortOrder
    shipId?: SortOrder
    createdById?: SortOrder
  }

  export type DrillMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    drillType?: SortOrder
    scheduledDate?: SortOrder
    createdAt?: SortOrder
    shipId?: SortOrder
    createdById?: SortOrder
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TaskActivityTaskIdUserIdCompoundUniqueInput = {
    taskId: string
    userId: string
  }

  export type TaskActivityCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    comments?: SortOrder
    updatedAt?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
  }

  export type TaskActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    comments?: SortOrder
    updatedAt?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
  }

  export type TaskActivityMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    comments?: SortOrder
    updatedAt?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DrillScalarRelationFilter = {
    is?: DrillWhereInput
    isNot?: DrillWhereInput
  }

  export type DrillActivityDrillIdUserIdCompoundUniqueInput = {
    drillId: string
    userId: string
  }

  export type DrillActivityCountOrderByAggregateInput = {
    id?: SortOrder
    attended?: SortOrder
    completed?: SortOrder
    updatedAt?: SortOrder
    drillId?: SortOrder
    userId?: SortOrder
  }

  export type DrillActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    attended?: SortOrder
    completed?: SortOrder
    updatedAt?: SortOrder
    drillId?: SortOrder
    userId?: SortOrder
  }

  export type DrillActivityMinOrderByAggregateInput = {
    id?: SortOrder
    attended?: SortOrder
    completed?: SortOrder
    updatedAt?: SortOrder
    drillId?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TaskCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type DrillCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DrillCreateWithoutCreatedByInput, DrillUncheckedCreateWithoutCreatedByInput> | DrillCreateWithoutCreatedByInput[] | DrillUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DrillCreateOrConnectWithoutCreatedByInput | DrillCreateOrConnectWithoutCreatedByInput[]
    createMany?: DrillCreateManyCreatedByInputEnvelope
    connect?: DrillWhereUniqueInput | DrillWhereUniqueInput[]
  }

  export type TaskActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskActivityCreateWithoutUserInput, TaskActivityUncheckedCreateWithoutUserInput> | TaskActivityCreateWithoutUserInput[] | TaskActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskActivityCreateOrConnectWithoutUserInput | TaskActivityCreateOrConnectWithoutUserInput[]
    createMany?: TaskActivityCreateManyUserInputEnvelope
    connect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
  }

  export type DrillActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<DrillActivityCreateWithoutUserInput, DrillActivityUncheckedCreateWithoutUserInput> | DrillActivityCreateWithoutUserInput[] | DrillActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DrillActivityCreateOrConnectWithoutUserInput | DrillActivityCreateOrConnectWithoutUserInput[]
    createMany?: DrillActivityCreateManyUserInputEnvelope
    connect?: DrillActivityWhereUniqueInput | DrillActivityWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type DrillUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DrillCreateWithoutCreatedByInput, DrillUncheckedCreateWithoutCreatedByInput> | DrillCreateWithoutCreatedByInput[] | DrillUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DrillCreateOrConnectWithoutCreatedByInput | DrillCreateOrConnectWithoutCreatedByInput[]
    createMany?: DrillCreateManyCreatedByInputEnvelope
    connect?: DrillWhereUniqueInput | DrillWhereUniqueInput[]
  }

  export type TaskActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskActivityCreateWithoutUserInput, TaskActivityUncheckedCreateWithoutUserInput> | TaskActivityCreateWithoutUserInput[] | TaskActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskActivityCreateOrConnectWithoutUserInput | TaskActivityCreateOrConnectWithoutUserInput[]
    createMany?: TaskActivityCreateManyUserInputEnvelope
    connect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
  }

  export type DrillActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DrillActivityCreateWithoutUserInput, DrillActivityUncheckedCreateWithoutUserInput> | DrillActivityCreateWithoutUserInput[] | DrillActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DrillActivityCreateOrConnectWithoutUserInput | DrillActivityCreateOrConnectWithoutUserInput[]
    createMany?: DrillActivityCreateManyUserInputEnvelope
    connect?: DrillActivityWhereUniqueInput | DrillActivityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TaskUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCreatedByInput | TaskUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCreatedByInput | TaskUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCreatedByInput | TaskUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type DrillUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DrillCreateWithoutCreatedByInput, DrillUncheckedCreateWithoutCreatedByInput> | DrillCreateWithoutCreatedByInput[] | DrillUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DrillCreateOrConnectWithoutCreatedByInput | DrillCreateOrConnectWithoutCreatedByInput[]
    upsert?: DrillUpsertWithWhereUniqueWithoutCreatedByInput | DrillUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DrillCreateManyCreatedByInputEnvelope
    set?: DrillWhereUniqueInput | DrillWhereUniqueInput[]
    disconnect?: DrillWhereUniqueInput | DrillWhereUniqueInput[]
    delete?: DrillWhereUniqueInput | DrillWhereUniqueInput[]
    connect?: DrillWhereUniqueInput | DrillWhereUniqueInput[]
    update?: DrillUpdateWithWhereUniqueWithoutCreatedByInput | DrillUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DrillUpdateManyWithWhereWithoutCreatedByInput | DrillUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DrillScalarWhereInput | DrillScalarWhereInput[]
  }

  export type TaskActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskActivityCreateWithoutUserInput, TaskActivityUncheckedCreateWithoutUserInput> | TaskActivityCreateWithoutUserInput[] | TaskActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskActivityCreateOrConnectWithoutUserInput | TaskActivityCreateOrConnectWithoutUserInput[]
    upsert?: TaskActivityUpsertWithWhereUniqueWithoutUserInput | TaskActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskActivityCreateManyUserInputEnvelope
    set?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    disconnect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    delete?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    connect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    update?: TaskActivityUpdateWithWhereUniqueWithoutUserInput | TaskActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskActivityUpdateManyWithWhereWithoutUserInput | TaskActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskActivityScalarWhereInput | TaskActivityScalarWhereInput[]
  }

  export type DrillActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<DrillActivityCreateWithoutUserInput, DrillActivityUncheckedCreateWithoutUserInput> | DrillActivityCreateWithoutUserInput[] | DrillActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DrillActivityCreateOrConnectWithoutUserInput | DrillActivityCreateOrConnectWithoutUserInput[]
    upsert?: DrillActivityUpsertWithWhereUniqueWithoutUserInput | DrillActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DrillActivityCreateManyUserInputEnvelope
    set?: DrillActivityWhereUniqueInput | DrillActivityWhereUniqueInput[]
    disconnect?: DrillActivityWhereUniqueInput | DrillActivityWhereUniqueInput[]
    delete?: DrillActivityWhereUniqueInput | DrillActivityWhereUniqueInput[]
    connect?: DrillActivityWhereUniqueInput | DrillActivityWhereUniqueInput[]
    update?: DrillActivityUpdateWithWhereUniqueWithoutUserInput | DrillActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DrillActivityUpdateManyWithWhereWithoutUserInput | DrillActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DrillActivityScalarWhereInput | DrillActivityScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCreatedByInput | TaskUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCreatedByInput | TaskUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCreatedByInput | TaskUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type DrillUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DrillCreateWithoutCreatedByInput, DrillUncheckedCreateWithoutCreatedByInput> | DrillCreateWithoutCreatedByInput[] | DrillUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DrillCreateOrConnectWithoutCreatedByInput | DrillCreateOrConnectWithoutCreatedByInput[]
    upsert?: DrillUpsertWithWhereUniqueWithoutCreatedByInput | DrillUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DrillCreateManyCreatedByInputEnvelope
    set?: DrillWhereUniqueInput | DrillWhereUniqueInput[]
    disconnect?: DrillWhereUniqueInput | DrillWhereUniqueInput[]
    delete?: DrillWhereUniqueInput | DrillWhereUniqueInput[]
    connect?: DrillWhereUniqueInput | DrillWhereUniqueInput[]
    update?: DrillUpdateWithWhereUniqueWithoutCreatedByInput | DrillUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DrillUpdateManyWithWhereWithoutCreatedByInput | DrillUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DrillScalarWhereInput | DrillScalarWhereInput[]
  }

  export type TaskActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskActivityCreateWithoutUserInput, TaskActivityUncheckedCreateWithoutUserInput> | TaskActivityCreateWithoutUserInput[] | TaskActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskActivityCreateOrConnectWithoutUserInput | TaskActivityCreateOrConnectWithoutUserInput[]
    upsert?: TaskActivityUpsertWithWhereUniqueWithoutUserInput | TaskActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskActivityCreateManyUserInputEnvelope
    set?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    disconnect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    delete?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    connect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    update?: TaskActivityUpdateWithWhereUniqueWithoutUserInput | TaskActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskActivityUpdateManyWithWhereWithoutUserInput | TaskActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskActivityScalarWhereInput | TaskActivityScalarWhereInput[]
  }

  export type DrillActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DrillActivityCreateWithoutUserInput, DrillActivityUncheckedCreateWithoutUserInput> | DrillActivityCreateWithoutUserInput[] | DrillActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DrillActivityCreateOrConnectWithoutUserInput | DrillActivityCreateOrConnectWithoutUserInput[]
    upsert?: DrillActivityUpsertWithWhereUniqueWithoutUserInput | DrillActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DrillActivityCreateManyUserInputEnvelope
    set?: DrillActivityWhereUniqueInput | DrillActivityWhereUniqueInput[]
    disconnect?: DrillActivityWhereUniqueInput | DrillActivityWhereUniqueInput[]
    delete?: DrillActivityWhereUniqueInput | DrillActivityWhereUniqueInput[]
    connect?: DrillActivityWhereUniqueInput | DrillActivityWhereUniqueInput[]
    update?: DrillActivityUpdateWithWhereUniqueWithoutUserInput | DrillActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DrillActivityUpdateManyWithWhereWithoutUserInput | DrillActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DrillActivityScalarWhereInput | DrillActivityScalarWhereInput[]
  }

  export type TaskCreateNestedManyWithoutShipInput = {
    create?: XOR<TaskCreateWithoutShipInput, TaskUncheckedCreateWithoutShipInput> | TaskCreateWithoutShipInput[] | TaskUncheckedCreateWithoutShipInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutShipInput | TaskCreateOrConnectWithoutShipInput[]
    createMany?: TaskCreateManyShipInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type DrillCreateNestedManyWithoutShipInput = {
    create?: XOR<DrillCreateWithoutShipInput, DrillUncheckedCreateWithoutShipInput> | DrillCreateWithoutShipInput[] | DrillUncheckedCreateWithoutShipInput[]
    connectOrCreate?: DrillCreateOrConnectWithoutShipInput | DrillCreateOrConnectWithoutShipInput[]
    createMany?: DrillCreateManyShipInputEnvelope
    connect?: DrillWhereUniqueInput | DrillWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutShipInput = {
    create?: XOR<TaskCreateWithoutShipInput, TaskUncheckedCreateWithoutShipInput> | TaskCreateWithoutShipInput[] | TaskUncheckedCreateWithoutShipInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutShipInput | TaskCreateOrConnectWithoutShipInput[]
    createMany?: TaskCreateManyShipInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type DrillUncheckedCreateNestedManyWithoutShipInput = {
    create?: XOR<DrillCreateWithoutShipInput, DrillUncheckedCreateWithoutShipInput> | DrillCreateWithoutShipInput[] | DrillUncheckedCreateWithoutShipInput[]
    connectOrCreate?: DrillCreateOrConnectWithoutShipInput | DrillCreateOrConnectWithoutShipInput[]
    createMany?: DrillCreateManyShipInputEnvelope
    connect?: DrillWhereUniqueInput | DrillWhereUniqueInput[]
  }

  export type TaskUpdateManyWithoutShipNestedInput = {
    create?: XOR<TaskCreateWithoutShipInput, TaskUncheckedCreateWithoutShipInput> | TaskCreateWithoutShipInput[] | TaskUncheckedCreateWithoutShipInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutShipInput | TaskCreateOrConnectWithoutShipInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutShipInput | TaskUpsertWithWhereUniqueWithoutShipInput[]
    createMany?: TaskCreateManyShipInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutShipInput | TaskUpdateWithWhereUniqueWithoutShipInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutShipInput | TaskUpdateManyWithWhereWithoutShipInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type DrillUpdateManyWithoutShipNestedInput = {
    create?: XOR<DrillCreateWithoutShipInput, DrillUncheckedCreateWithoutShipInput> | DrillCreateWithoutShipInput[] | DrillUncheckedCreateWithoutShipInput[]
    connectOrCreate?: DrillCreateOrConnectWithoutShipInput | DrillCreateOrConnectWithoutShipInput[]
    upsert?: DrillUpsertWithWhereUniqueWithoutShipInput | DrillUpsertWithWhereUniqueWithoutShipInput[]
    createMany?: DrillCreateManyShipInputEnvelope
    set?: DrillWhereUniqueInput | DrillWhereUniqueInput[]
    disconnect?: DrillWhereUniqueInput | DrillWhereUniqueInput[]
    delete?: DrillWhereUniqueInput | DrillWhereUniqueInput[]
    connect?: DrillWhereUniqueInput | DrillWhereUniqueInput[]
    update?: DrillUpdateWithWhereUniqueWithoutShipInput | DrillUpdateWithWhereUniqueWithoutShipInput[]
    updateMany?: DrillUpdateManyWithWhereWithoutShipInput | DrillUpdateManyWithWhereWithoutShipInput[]
    deleteMany?: DrillScalarWhereInput | DrillScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutShipNestedInput = {
    create?: XOR<TaskCreateWithoutShipInput, TaskUncheckedCreateWithoutShipInput> | TaskCreateWithoutShipInput[] | TaskUncheckedCreateWithoutShipInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutShipInput | TaskCreateOrConnectWithoutShipInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutShipInput | TaskUpsertWithWhereUniqueWithoutShipInput[]
    createMany?: TaskCreateManyShipInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutShipInput | TaskUpdateWithWhereUniqueWithoutShipInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutShipInput | TaskUpdateManyWithWhereWithoutShipInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type DrillUncheckedUpdateManyWithoutShipNestedInput = {
    create?: XOR<DrillCreateWithoutShipInput, DrillUncheckedCreateWithoutShipInput> | DrillCreateWithoutShipInput[] | DrillUncheckedCreateWithoutShipInput[]
    connectOrCreate?: DrillCreateOrConnectWithoutShipInput | DrillCreateOrConnectWithoutShipInput[]
    upsert?: DrillUpsertWithWhereUniqueWithoutShipInput | DrillUpsertWithWhereUniqueWithoutShipInput[]
    createMany?: DrillCreateManyShipInputEnvelope
    set?: DrillWhereUniqueInput | DrillWhereUniqueInput[]
    disconnect?: DrillWhereUniqueInput | DrillWhereUniqueInput[]
    delete?: DrillWhereUniqueInput | DrillWhereUniqueInput[]
    connect?: DrillWhereUniqueInput | DrillWhereUniqueInput[]
    update?: DrillUpdateWithWhereUniqueWithoutShipInput | DrillUpdateWithWhereUniqueWithoutShipInput[]
    updateMany?: DrillUpdateManyWithWhereWithoutShipInput | DrillUpdateManyWithWhereWithoutShipInput[]
    deleteMany?: DrillScalarWhereInput | DrillScalarWhereInput[]
  }

  export type ShipCreateNestedOneWithoutTasksInput = {
    create?: XOR<ShipCreateWithoutTasksInput, ShipUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ShipCreateOrConnectWithoutTasksInput
    connect?: ShipWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedTasksInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type TaskActivityCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskActivityCreateWithoutTaskInput, TaskActivityUncheckedCreateWithoutTaskInput> | TaskActivityCreateWithoutTaskInput[] | TaskActivityUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskActivityCreateOrConnectWithoutTaskInput | TaskActivityCreateOrConnectWithoutTaskInput[]
    createMany?: TaskActivityCreateManyTaskInputEnvelope
    connect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
  }

  export type TaskActivityUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskActivityCreateWithoutTaskInput, TaskActivityUncheckedCreateWithoutTaskInput> | TaskActivityCreateWithoutTaskInput[] | TaskActivityUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskActivityCreateOrConnectWithoutTaskInput | TaskActivityCreateOrConnectWithoutTaskInput[]
    createMany?: TaskActivityCreateManyTaskInputEnvelope
    connect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ShipUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ShipCreateWithoutTasksInput, ShipUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ShipCreateOrConnectWithoutTasksInput
    upsert?: ShipUpsertWithoutTasksInput
    connect?: ShipWhereUniqueInput
    update?: XOR<XOR<ShipUpdateToOneWithWhereWithoutTasksInput, ShipUpdateWithoutTasksInput>, ShipUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedTasksNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    upsert?: UserUpsertWithoutCreatedTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedTasksInput, UserUpdateWithoutCreatedTasksInput>, UserUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type TaskActivityUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskActivityCreateWithoutTaskInput, TaskActivityUncheckedCreateWithoutTaskInput> | TaskActivityCreateWithoutTaskInput[] | TaskActivityUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskActivityCreateOrConnectWithoutTaskInput | TaskActivityCreateOrConnectWithoutTaskInput[]
    upsert?: TaskActivityUpsertWithWhereUniqueWithoutTaskInput | TaskActivityUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskActivityCreateManyTaskInputEnvelope
    set?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    disconnect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    delete?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    connect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    update?: TaskActivityUpdateWithWhereUniqueWithoutTaskInput | TaskActivityUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskActivityUpdateManyWithWhereWithoutTaskInput | TaskActivityUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskActivityScalarWhereInput | TaskActivityScalarWhereInput[]
  }

  export type TaskActivityUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskActivityCreateWithoutTaskInput, TaskActivityUncheckedCreateWithoutTaskInput> | TaskActivityCreateWithoutTaskInput[] | TaskActivityUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskActivityCreateOrConnectWithoutTaskInput | TaskActivityCreateOrConnectWithoutTaskInput[]
    upsert?: TaskActivityUpsertWithWhereUniqueWithoutTaskInput | TaskActivityUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskActivityCreateManyTaskInputEnvelope
    set?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    disconnect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    delete?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    connect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    update?: TaskActivityUpdateWithWhereUniqueWithoutTaskInput | TaskActivityUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskActivityUpdateManyWithWhereWithoutTaskInput | TaskActivityUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskActivityScalarWhereInput | TaskActivityScalarWhereInput[]
  }

  export type ShipCreateNestedOneWithoutDrillsInput = {
    create?: XOR<ShipCreateWithoutDrillsInput, ShipUncheckedCreateWithoutDrillsInput>
    connectOrCreate?: ShipCreateOrConnectWithoutDrillsInput
    connect?: ShipWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedDrillsInput = {
    create?: XOR<UserCreateWithoutCreatedDrillsInput, UserUncheckedCreateWithoutCreatedDrillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedDrillsInput
    connect?: UserWhereUniqueInput
  }

  export type DrillActivityCreateNestedManyWithoutDrillInput = {
    create?: XOR<DrillActivityCreateWithoutDrillInput, DrillActivityUncheckedCreateWithoutDrillInput> | DrillActivityCreateWithoutDrillInput[] | DrillActivityUncheckedCreateWithoutDrillInput[]
    connectOrCreate?: DrillActivityCreateOrConnectWithoutDrillInput | DrillActivityCreateOrConnectWithoutDrillInput[]
    createMany?: DrillActivityCreateManyDrillInputEnvelope
    connect?: DrillActivityWhereUniqueInput | DrillActivityWhereUniqueInput[]
  }

  export type DrillActivityUncheckedCreateNestedManyWithoutDrillInput = {
    create?: XOR<DrillActivityCreateWithoutDrillInput, DrillActivityUncheckedCreateWithoutDrillInput> | DrillActivityCreateWithoutDrillInput[] | DrillActivityUncheckedCreateWithoutDrillInput[]
    connectOrCreate?: DrillActivityCreateOrConnectWithoutDrillInput | DrillActivityCreateOrConnectWithoutDrillInput[]
    createMany?: DrillActivityCreateManyDrillInputEnvelope
    connect?: DrillActivityWhereUniqueInput | DrillActivityWhereUniqueInput[]
  }

  export type ShipUpdateOneRequiredWithoutDrillsNestedInput = {
    create?: XOR<ShipCreateWithoutDrillsInput, ShipUncheckedCreateWithoutDrillsInput>
    connectOrCreate?: ShipCreateOrConnectWithoutDrillsInput
    upsert?: ShipUpsertWithoutDrillsInput
    connect?: ShipWhereUniqueInput
    update?: XOR<XOR<ShipUpdateToOneWithWhereWithoutDrillsInput, ShipUpdateWithoutDrillsInput>, ShipUncheckedUpdateWithoutDrillsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedDrillsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedDrillsInput, UserUncheckedCreateWithoutCreatedDrillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedDrillsInput
    upsert?: UserUpsertWithoutCreatedDrillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedDrillsInput, UserUpdateWithoutCreatedDrillsInput>, UserUncheckedUpdateWithoutCreatedDrillsInput>
  }

  export type DrillActivityUpdateManyWithoutDrillNestedInput = {
    create?: XOR<DrillActivityCreateWithoutDrillInput, DrillActivityUncheckedCreateWithoutDrillInput> | DrillActivityCreateWithoutDrillInput[] | DrillActivityUncheckedCreateWithoutDrillInput[]
    connectOrCreate?: DrillActivityCreateOrConnectWithoutDrillInput | DrillActivityCreateOrConnectWithoutDrillInput[]
    upsert?: DrillActivityUpsertWithWhereUniqueWithoutDrillInput | DrillActivityUpsertWithWhereUniqueWithoutDrillInput[]
    createMany?: DrillActivityCreateManyDrillInputEnvelope
    set?: DrillActivityWhereUniqueInput | DrillActivityWhereUniqueInput[]
    disconnect?: DrillActivityWhereUniqueInput | DrillActivityWhereUniqueInput[]
    delete?: DrillActivityWhereUniqueInput | DrillActivityWhereUniqueInput[]
    connect?: DrillActivityWhereUniqueInput | DrillActivityWhereUniqueInput[]
    update?: DrillActivityUpdateWithWhereUniqueWithoutDrillInput | DrillActivityUpdateWithWhereUniqueWithoutDrillInput[]
    updateMany?: DrillActivityUpdateManyWithWhereWithoutDrillInput | DrillActivityUpdateManyWithWhereWithoutDrillInput[]
    deleteMany?: DrillActivityScalarWhereInput | DrillActivityScalarWhereInput[]
  }

  export type DrillActivityUncheckedUpdateManyWithoutDrillNestedInput = {
    create?: XOR<DrillActivityCreateWithoutDrillInput, DrillActivityUncheckedCreateWithoutDrillInput> | DrillActivityCreateWithoutDrillInput[] | DrillActivityUncheckedCreateWithoutDrillInput[]
    connectOrCreate?: DrillActivityCreateOrConnectWithoutDrillInput | DrillActivityCreateOrConnectWithoutDrillInput[]
    upsert?: DrillActivityUpsertWithWhereUniqueWithoutDrillInput | DrillActivityUpsertWithWhereUniqueWithoutDrillInput[]
    createMany?: DrillActivityCreateManyDrillInputEnvelope
    set?: DrillActivityWhereUniqueInput | DrillActivityWhereUniqueInput[]
    disconnect?: DrillActivityWhereUniqueInput | DrillActivityWhereUniqueInput[]
    delete?: DrillActivityWhereUniqueInput | DrillActivityWhereUniqueInput[]
    connect?: DrillActivityWhereUniqueInput | DrillActivityWhereUniqueInput[]
    update?: DrillActivityUpdateWithWhereUniqueWithoutDrillInput | DrillActivityUpdateWithWhereUniqueWithoutDrillInput[]
    updateMany?: DrillActivityUpdateManyWithWhereWithoutDrillInput | DrillActivityUpdateManyWithWhereWithoutDrillInput[]
    deleteMany?: DrillActivityScalarWhereInput | DrillActivityScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutTaskActivityInput = {
    create?: XOR<TaskCreateWithoutTaskActivityInput, TaskUncheckedCreateWithoutTaskActivityInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTaskActivityInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTaskActivityInput = {
    create?: XOR<UserCreateWithoutTaskActivityInput, UserUncheckedCreateWithoutTaskActivityInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskActivityInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type TaskUpdateOneRequiredWithoutTaskActivityNestedInput = {
    create?: XOR<TaskCreateWithoutTaskActivityInput, TaskUncheckedCreateWithoutTaskActivityInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTaskActivityInput
    upsert?: TaskUpsertWithoutTaskActivityInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutTaskActivityInput, TaskUpdateWithoutTaskActivityInput>, TaskUncheckedUpdateWithoutTaskActivityInput>
  }

  export type UserUpdateOneRequiredWithoutTaskActivityNestedInput = {
    create?: XOR<UserCreateWithoutTaskActivityInput, UserUncheckedCreateWithoutTaskActivityInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskActivityInput
    upsert?: UserUpsertWithoutTaskActivityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaskActivityInput, UserUpdateWithoutTaskActivityInput>, UserUncheckedUpdateWithoutTaskActivityInput>
  }

  export type DrillCreateNestedOneWithoutDrillActivityInput = {
    create?: XOR<DrillCreateWithoutDrillActivityInput, DrillUncheckedCreateWithoutDrillActivityInput>
    connectOrCreate?: DrillCreateOrConnectWithoutDrillActivityInput
    connect?: DrillWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDrillActivityInput = {
    create?: XOR<UserCreateWithoutDrillActivityInput, UserUncheckedCreateWithoutDrillActivityInput>
    connectOrCreate?: UserCreateOrConnectWithoutDrillActivityInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DrillUpdateOneRequiredWithoutDrillActivityNestedInput = {
    create?: XOR<DrillCreateWithoutDrillActivityInput, DrillUncheckedCreateWithoutDrillActivityInput>
    connectOrCreate?: DrillCreateOrConnectWithoutDrillActivityInput
    upsert?: DrillUpsertWithoutDrillActivityInput
    connect?: DrillWhereUniqueInput
    update?: XOR<XOR<DrillUpdateToOneWithWhereWithoutDrillActivityInput, DrillUpdateWithoutDrillActivityInput>, DrillUncheckedUpdateWithoutDrillActivityInput>
  }

  export type UserUpdateOneRequiredWithoutDrillActivityNestedInput = {
    create?: XOR<UserCreateWithoutDrillActivityInput, UserUncheckedCreateWithoutDrillActivityInput>
    connectOrCreate?: UserCreateOrConnectWithoutDrillActivityInput
    upsert?: UserUpsertWithoutDrillActivityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDrillActivityInput, UserUpdateWithoutDrillActivityInput>, UserUncheckedUpdateWithoutDrillActivityInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
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

  export type TaskCreateWithoutCreatedByInput = {
    id?: string
    title: string
    dueDate: Date | string
    description?: string | null
    createdAt?: Date | string
    ship: ShipCreateNestedOneWithoutTasksInput
    taskActivity?: TaskActivityCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    dueDate: Date | string
    description?: string | null
    createdAt?: Date | string
    shipId: string
    taskActivity?: TaskActivityUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutCreatedByInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput>
  }

  export type TaskCreateManyCreatedByInputEnvelope = {
    data: TaskCreateManyCreatedByInput | TaskCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type DrillCreateWithoutCreatedByInput = {
    id?: string
    title: string
    drillType: string
    scheduledDate: Date | string
    createdAt?: Date | string
    ship: ShipCreateNestedOneWithoutDrillsInput
    drillActivity?: DrillActivityCreateNestedManyWithoutDrillInput
  }

  export type DrillUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    drillType: string
    scheduledDate: Date | string
    createdAt?: Date | string
    shipId: string
    drillActivity?: DrillActivityUncheckedCreateNestedManyWithoutDrillInput
  }

  export type DrillCreateOrConnectWithoutCreatedByInput = {
    where: DrillWhereUniqueInput
    create: XOR<DrillCreateWithoutCreatedByInput, DrillUncheckedCreateWithoutCreatedByInput>
  }

  export type DrillCreateManyCreatedByInputEnvelope = {
    data: DrillCreateManyCreatedByInput | DrillCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type TaskActivityCreateWithoutUserInput = {
    id?: string
    status?: $Enums.TaskStatus
    comments?: string | null
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutTaskActivityInput
  }

  export type TaskActivityUncheckedCreateWithoutUserInput = {
    id?: string
    status?: $Enums.TaskStatus
    comments?: string | null
    updatedAt?: Date | string
    taskId: string
  }

  export type TaskActivityCreateOrConnectWithoutUserInput = {
    where: TaskActivityWhereUniqueInput
    create: XOR<TaskActivityCreateWithoutUserInput, TaskActivityUncheckedCreateWithoutUserInput>
  }

  export type TaskActivityCreateManyUserInputEnvelope = {
    data: TaskActivityCreateManyUserInput | TaskActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DrillActivityCreateWithoutUserInput = {
    id?: string
    attended?: boolean
    completed?: boolean
    updatedAt?: Date | string
    drill: DrillCreateNestedOneWithoutDrillActivityInput
  }

  export type DrillActivityUncheckedCreateWithoutUserInput = {
    id?: string
    attended?: boolean
    completed?: boolean
    updatedAt?: Date | string
    drillId: string
  }

  export type DrillActivityCreateOrConnectWithoutUserInput = {
    where: DrillActivityWhereUniqueInput
    create: XOR<DrillActivityCreateWithoutUserInput, DrillActivityUncheckedCreateWithoutUserInput>
  }

  export type DrillActivityCreateManyUserInputEnvelope = {
    data: DrillActivityCreateManyUserInput | DrillActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutCreatedByInput, TaskUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutCreatedByInput, TaskUncheckedUpdateWithoutCreatedByInput>
  }

  export type TaskUpdateManyWithWhereWithoutCreatedByInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    dueDate?: DateTimeFilter<"Task"> | Date | string
    description?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    shipId?: StringFilter<"Task"> | string
    createdById?: StringFilter<"Task"> | string
  }

  export type DrillUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: DrillWhereUniqueInput
    update: XOR<DrillUpdateWithoutCreatedByInput, DrillUncheckedUpdateWithoutCreatedByInput>
    create: XOR<DrillCreateWithoutCreatedByInput, DrillUncheckedCreateWithoutCreatedByInput>
  }

  export type DrillUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: DrillWhereUniqueInput
    data: XOR<DrillUpdateWithoutCreatedByInput, DrillUncheckedUpdateWithoutCreatedByInput>
  }

  export type DrillUpdateManyWithWhereWithoutCreatedByInput = {
    where: DrillScalarWhereInput
    data: XOR<DrillUpdateManyMutationInput, DrillUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type DrillScalarWhereInput = {
    AND?: DrillScalarWhereInput | DrillScalarWhereInput[]
    OR?: DrillScalarWhereInput[]
    NOT?: DrillScalarWhereInput | DrillScalarWhereInput[]
    id?: StringFilter<"Drill"> | string
    title?: StringFilter<"Drill"> | string
    drillType?: StringFilter<"Drill"> | string
    scheduledDate?: DateTimeFilter<"Drill"> | Date | string
    createdAt?: DateTimeFilter<"Drill"> | Date | string
    shipId?: StringFilter<"Drill"> | string
    createdById?: StringFilter<"Drill"> | string
  }

  export type TaskActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskActivityWhereUniqueInput
    update: XOR<TaskActivityUpdateWithoutUserInput, TaskActivityUncheckedUpdateWithoutUserInput>
    create: XOR<TaskActivityCreateWithoutUserInput, TaskActivityUncheckedCreateWithoutUserInput>
  }

  export type TaskActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskActivityWhereUniqueInput
    data: XOR<TaskActivityUpdateWithoutUserInput, TaskActivityUncheckedUpdateWithoutUserInput>
  }

  export type TaskActivityUpdateManyWithWhereWithoutUserInput = {
    where: TaskActivityScalarWhereInput
    data: XOR<TaskActivityUpdateManyMutationInput, TaskActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskActivityScalarWhereInput = {
    AND?: TaskActivityScalarWhereInput | TaskActivityScalarWhereInput[]
    OR?: TaskActivityScalarWhereInput[]
    NOT?: TaskActivityScalarWhereInput | TaskActivityScalarWhereInput[]
    id?: StringFilter<"TaskActivity"> | string
    status?: EnumTaskStatusFilter<"TaskActivity"> | $Enums.TaskStatus
    comments?: StringNullableFilter<"TaskActivity"> | string | null
    updatedAt?: DateTimeFilter<"TaskActivity"> | Date | string
    taskId?: StringFilter<"TaskActivity"> | string
    userId?: StringFilter<"TaskActivity"> | string
  }

  export type DrillActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: DrillActivityWhereUniqueInput
    update: XOR<DrillActivityUpdateWithoutUserInput, DrillActivityUncheckedUpdateWithoutUserInput>
    create: XOR<DrillActivityCreateWithoutUserInput, DrillActivityUncheckedCreateWithoutUserInput>
  }

  export type DrillActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: DrillActivityWhereUniqueInput
    data: XOR<DrillActivityUpdateWithoutUserInput, DrillActivityUncheckedUpdateWithoutUserInput>
  }

  export type DrillActivityUpdateManyWithWhereWithoutUserInput = {
    where: DrillActivityScalarWhereInput
    data: XOR<DrillActivityUpdateManyMutationInput, DrillActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type DrillActivityScalarWhereInput = {
    AND?: DrillActivityScalarWhereInput | DrillActivityScalarWhereInput[]
    OR?: DrillActivityScalarWhereInput[]
    NOT?: DrillActivityScalarWhereInput | DrillActivityScalarWhereInput[]
    id?: StringFilter<"DrillActivity"> | string
    attended?: BoolFilter<"DrillActivity"> | boolean
    completed?: BoolFilter<"DrillActivity"> | boolean
    updatedAt?: DateTimeFilter<"DrillActivity"> | Date | string
    drillId?: StringFilter<"DrillActivity"> | string
    userId?: StringFilter<"DrillActivity"> | string
  }

  export type TaskCreateWithoutShipInput = {
    id?: string
    title: string
    dueDate: Date | string
    description?: string | null
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedTasksInput
    taskActivity?: TaskActivityCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutShipInput = {
    id?: string
    title: string
    dueDate: Date | string
    description?: string | null
    createdAt?: Date | string
    createdById: string
    taskActivity?: TaskActivityUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutShipInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutShipInput, TaskUncheckedCreateWithoutShipInput>
  }

  export type TaskCreateManyShipInputEnvelope = {
    data: TaskCreateManyShipInput | TaskCreateManyShipInput[]
    skipDuplicates?: boolean
  }

  export type DrillCreateWithoutShipInput = {
    id?: string
    title: string
    drillType: string
    scheduledDate: Date | string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedDrillsInput
    drillActivity?: DrillActivityCreateNestedManyWithoutDrillInput
  }

  export type DrillUncheckedCreateWithoutShipInput = {
    id?: string
    title: string
    drillType: string
    scheduledDate: Date | string
    createdAt?: Date | string
    createdById: string
    drillActivity?: DrillActivityUncheckedCreateNestedManyWithoutDrillInput
  }

  export type DrillCreateOrConnectWithoutShipInput = {
    where: DrillWhereUniqueInput
    create: XOR<DrillCreateWithoutShipInput, DrillUncheckedCreateWithoutShipInput>
  }

  export type DrillCreateManyShipInputEnvelope = {
    data: DrillCreateManyShipInput | DrillCreateManyShipInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutShipInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutShipInput, TaskUncheckedUpdateWithoutShipInput>
    create: XOR<TaskCreateWithoutShipInput, TaskUncheckedCreateWithoutShipInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutShipInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutShipInput, TaskUncheckedUpdateWithoutShipInput>
  }

  export type TaskUpdateManyWithWhereWithoutShipInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutShipInput>
  }

  export type DrillUpsertWithWhereUniqueWithoutShipInput = {
    where: DrillWhereUniqueInput
    update: XOR<DrillUpdateWithoutShipInput, DrillUncheckedUpdateWithoutShipInput>
    create: XOR<DrillCreateWithoutShipInput, DrillUncheckedCreateWithoutShipInput>
  }

  export type DrillUpdateWithWhereUniqueWithoutShipInput = {
    where: DrillWhereUniqueInput
    data: XOR<DrillUpdateWithoutShipInput, DrillUncheckedUpdateWithoutShipInput>
  }

  export type DrillUpdateManyWithWhereWithoutShipInput = {
    where: DrillScalarWhereInput
    data: XOR<DrillUpdateManyMutationInput, DrillUncheckedUpdateManyWithoutShipInput>
  }

  export type ShipCreateWithoutTasksInput = {
    id?: string
    name: string
    imoNumber: string
    createdAt?: Date | string
    drills?: DrillCreateNestedManyWithoutShipInput
  }

  export type ShipUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    imoNumber: string
    createdAt?: Date | string
    drills?: DrillUncheckedCreateNestedManyWithoutShipInput
  }

  export type ShipCreateOrConnectWithoutTasksInput = {
    where: ShipWhereUniqueInput
    create: XOR<ShipCreateWithoutTasksInput, ShipUncheckedCreateWithoutTasksInput>
  }

  export type UserCreateWithoutCreatedTasksInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    createdDrills?: DrillCreateNestedManyWithoutCreatedByInput
    taskActivity?: TaskActivityCreateNestedManyWithoutUserInput
    drillActivity?: DrillActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedTasksInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    createdDrills?: DrillUncheckedCreateNestedManyWithoutCreatedByInput
    taskActivity?: TaskActivityUncheckedCreateNestedManyWithoutUserInput
    drillActivity?: DrillActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
  }

  export type TaskActivityCreateWithoutTaskInput = {
    id?: string
    status?: $Enums.TaskStatus
    comments?: string | null
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTaskActivityInput
  }

  export type TaskActivityUncheckedCreateWithoutTaskInput = {
    id?: string
    status?: $Enums.TaskStatus
    comments?: string | null
    updatedAt?: Date | string
    userId: string
  }

  export type TaskActivityCreateOrConnectWithoutTaskInput = {
    where: TaskActivityWhereUniqueInput
    create: XOR<TaskActivityCreateWithoutTaskInput, TaskActivityUncheckedCreateWithoutTaskInput>
  }

  export type TaskActivityCreateManyTaskInputEnvelope = {
    data: TaskActivityCreateManyTaskInput | TaskActivityCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type ShipUpsertWithoutTasksInput = {
    update: XOR<ShipUpdateWithoutTasksInput, ShipUncheckedUpdateWithoutTasksInput>
    create: XOR<ShipCreateWithoutTasksInput, ShipUncheckedCreateWithoutTasksInput>
    where?: ShipWhereInput
  }

  export type ShipUpdateToOneWithWhereWithoutTasksInput = {
    where?: ShipWhereInput
    data: XOR<ShipUpdateWithoutTasksInput, ShipUncheckedUpdateWithoutTasksInput>
  }

  export type ShipUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imoNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drills?: DrillUpdateManyWithoutShipNestedInput
  }

  export type ShipUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imoNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drills?: DrillUncheckedUpdateManyWithoutShipNestedInput
  }

  export type UserUpsertWithoutCreatedTasksInput = {
    update: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type UserUpdateWithoutCreatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDrills?: DrillUpdateManyWithoutCreatedByNestedInput
    taskActivity?: TaskActivityUpdateManyWithoutUserNestedInput
    drillActivity?: DrillActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDrills?: DrillUncheckedUpdateManyWithoutCreatedByNestedInput
    taskActivity?: TaskActivityUncheckedUpdateManyWithoutUserNestedInput
    drillActivity?: DrillActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskActivityUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskActivityWhereUniqueInput
    update: XOR<TaskActivityUpdateWithoutTaskInput, TaskActivityUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskActivityCreateWithoutTaskInput, TaskActivityUncheckedCreateWithoutTaskInput>
  }

  export type TaskActivityUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskActivityWhereUniqueInput
    data: XOR<TaskActivityUpdateWithoutTaskInput, TaskActivityUncheckedUpdateWithoutTaskInput>
  }

  export type TaskActivityUpdateManyWithWhereWithoutTaskInput = {
    where: TaskActivityScalarWhereInput
    data: XOR<TaskActivityUpdateManyMutationInput, TaskActivityUncheckedUpdateManyWithoutTaskInput>
  }

  export type ShipCreateWithoutDrillsInput = {
    id?: string
    name: string
    imoNumber: string
    createdAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutShipInput
  }

  export type ShipUncheckedCreateWithoutDrillsInput = {
    id?: string
    name: string
    imoNumber: string
    createdAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutShipInput
  }

  export type ShipCreateOrConnectWithoutDrillsInput = {
    where: ShipWhereUniqueInput
    create: XOR<ShipCreateWithoutDrillsInput, ShipUncheckedCreateWithoutDrillsInput>
  }

  export type UserCreateWithoutCreatedDrillsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    taskActivity?: TaskActivityCreateNestedManyWithoutUserInput
    drillActivity?: DrillActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedDrillsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    taskActivity?: TaskActivityUncheckedCreateNestedManyWithoutUserInput
    drillActivity?: DrillActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedDrillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedDrillsInput, UserUncheckedCreateWithoutCreatedDrillsInput>
  }

  export type DrillActivityCreateWithoutDrillInput = {
    id?: string
    attended?: boolean
    completed?: boolean
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDrillActivityInput
  }

  export type DrillActivityUncheckedCreateWithoutDrillInput = {
    id?: string
    attended?: boolean
    completed?: boolean
    updatedAt?: Date | string
    userId: string
  }

  export type DrillActivityCreateOrConnectWithoutDrillInput = {
    where: DrillActivityWhereUniqueInput
    create: XOR<DrillActivityCreateWithoutDrillInput, DrillActivityUncheckedCreateWithoutDrillInput>
  }

  export type DrillActivityCreateManyDrillInputEnvelope = {
    data: DrillActivityCreateManyDrillInput | DrillActivityCreateManyDrillInput[]
    skipDuplicates?: boolean
  }

  export type ShipUpsertWithoutDrillsInput = {
    update: XOR<ShipUpdateWithoutDrillsInput, ShipUncheckedUpdateWithoutDrillsInput>
    create: XOR<ShipCreateWithoutDrillsInput, ShipUncheckedCreateWithoutDrillsInput>
    where?: ShipWhereInput
  }

  export type ShipUpdateToOneWithWhereWithoutDrillsInput = {
    where?: ShipWhereInput
    data: XOR<ShipUpdateWithoutDrillsInput, ShipUncheckedUpdateWithoutDrillsInput>
  }

  export type ShipUpdateWithoutDrillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imoNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutShipNestedInput
  }

  export type ShipUncheckedUpdateWithoutDrillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imoNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutShipNestedInput
  }

  export type UserUpsertWithoutCreatedDrillsInput = {
    update: XOR<UserUpdateWithoutCreatedDrillsInput, UserUncheckedUpdateWithoutCreatedDrillsInput>
    create: XOR<UserCreateWithoutCreatedDrillsInput, UserUncheckedCreateWithoutCreatedDrillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedDrillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedDrillsInput, UserUncheckedUpdateWithoutCreatedDrillsInput>
  }

  export type UserUpdateWithoutCreatedDrillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    taskActivity?: TaskActivityUpdateManyWithoutUserNestedInput
    drillActivity?: DrillActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedDrillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    taskActivity?: TaskActivityUncheckedUpdateManyWithoutUserNestedInput
    drillActivity?: DrillActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DrillActivityUpsertWithWhereUniqueWithoutDrillInput = {
    where: DrillActivityWhereUniqueInput
    update: XOR<DrillActivityUpdateWithoutDrillInput, DrillActivityUncheckedUpdateWithoutDrillInput>
    create: XOR<DrillActivityCreateWithoutDrillInput, DrillActivityUncheckedCreateWithoutDrillInput>
  }

  export type DrillActivityUpdateWithWhereUniqueWithoutDrillInput = {
    where: DrillActivityWhereUniqueInput
    data: XOR<DrillActivityUpdateWithoutDrillInput, DrillActivityUncheckedUpdateWithoutDrillInput>
  }

  export type DrillActivityUpdateManyWithWhereWithoutDrillInput = {
    where: DrillActivityScalarWhereInput
    data: XOR<DrillActivityUpdateManyMutationInput, DrillActivityUncheckedUpdateManyWithoutDrillInput>
  }

  export type TaskCreateWithoutTaskActivityInput = {
    id?: string
    title: string
    dueDate: Date | string
    description?: string | null
    createdAt?: Date | string
    ship: ShipCreateNestedOneWithoutTasksInput
    createdBy: UserCreateNestedOneWithoutCreatedTasksInput
  }

  export type TaskUncheckedCreateWithoutTaskActivityInput = {
    id?: string
    title: string
    dueDate: Date | string
    description?: string | null
    createdAt?: Date | string
    shipId: string
    createdById: string
  }

  export type TaskCreateOrConnectWithoutTaskActivityInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTaskActivityInput, TaskUncheckedCreateWithoutTaskActivityInput>
  }

  export type UserCreateWithoutTaskActivityInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    createdDrills?: DrillCreateNestedManyWithoutCreatedByInput
    drillActivity?: DrillActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTaskActivityInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    createdDrills?: DrillUncheckedCreateNestedManyWithoutCreatedByInput
    drillActivity?: DrillActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTaskActivityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaskActivityInput, UserUncheckedCreateWithoutTaskActivityInput>
  }

  export type TaskUpsertWithoutTaskActivityInput = {
    update: XOR<TaskUpdateWithoutTaskActivityInput, TaskUncheckedUpdateWithoutTaskActivityInput>
    create: XOR<TaskCreateWithoutTaskActivityInput, TaskUncheckedCreateWithoutTaskActivityInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutTaskActivityInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutTaskActivityInput, TaskUncheckedUpdateWithoutTaskActivityInput>
  }

  export type TaskUpdateWithoutTaskActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ship?: ShipUpdateOneRequiredWithoutTasksNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutTaskActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutTaskActivityInput = {
    update: XOR<UserUpdateWithoutTaskActivityInput, UserUncheckedUpdateWithoutTaskActivityInput>
    create: XOR<UserCreateWithoutTaskActivityInput, UserUncheckedCreateWithoutTaskActivityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaskActivityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaskActivityInput, UserUncheckedUpdateWithoutTaskActivityInput>
  }

  export type UserUpdateWithoutTaskActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    createdDrills?: DrillUpdateManyWithoutCreatedByNestedInput
    drillActivity?: DrillActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTaskActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    createdDrills?: DrillUncheckedUpdateManyWithoutCreatedByNestedInput
    drillActivity?: DrillActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DrillCreateWithoutDrillActivityInput = {
    id?: string
    title: string
    drillType: string
    scheduledDate: Date | string
    createdAt?: Date | string
    ship: ShipCreateNestedOneWithoutDrillsInput
    createdBy: UserCreateNestedOneWithoutCreatedDrillsInput
  }

  export type DrillUncheckedCreateWithoutDrillActivityInput = {
    id?: string
    title: string
    drillType: string
    scheduledDate: Date | string
    createdAt?: Date | string
    shipId: string
    createdById: string
  }

  export type DrillCreateOrConnectWithoutDrillActivityInput = {
    where: DrillWhereUniqueInput
    create: XOR<DrillCreateWithoutDrillActivityInput, DrillUncheckedCreateWithoutDrillActivityInput>
  }

  export type UserCreateWithoutDrillActivityInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    createdDrills?: DrillCreateNestedManyWithoutCreatedByInput
    taskActivity?: TaskActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDrillActivityInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    createdDrills?: DrillUncheckedCreateNestedManyWithoutCreatedByInput
    taskActivity?: TaskActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDrillActivityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDrillActivityInput, UserUncheckedCreateWithoutDrillActivityInput>
  }

  export type DrillUpsertWithoutDrillActivityInput = {
    update: XOR<DrillUpdateWithoutDrillActivityInput, DrillUncheckedUpdateWithoutDrillActivityInput>
    create: XOR<DrillCreateWithoutDrillActivityInput, DrillUncheckedCreateWithoutDrillActivityInput>
    where?: DrillWhereInput
  }

  export type DrillUpdateToOneWithWhereWithoutDrillActivityInput = {
    where?: DrillWhereInput
    data: XOR<DrillUpdateWithoutDrillActivityInput, DrillUncheckedUpdateWithoutDrillActivityInput>
  }

  export type DrillUpdateWithoutDrillActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    drillType?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ship?: ShipUpdateOneRequiredWithoutDrillsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedDrillsNestedInput
  }

  export type DrillUncheckedUpdateWithoutDrillActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    drillType?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutDrillActivityInput = {
    update: XOR<UserUpdateWithoutDrillActivityInput, UserUncheckedUpdateWithoutDrillActivityInput>
    create: XOR<UserCreateWithoutDrillActivityInput, UserUncheckedCreateWithoutDrillActivityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDrillActivityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDrillActivityInput, UserUncheckedUpdateWithoutDrillActivityInput>
  }

  export type UserUpdateWithoutDrillActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    createdDrills?: DrillUpdateManyWithoutCreatedByNestedInput
    taskActivity?: TaskActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDrillActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    createdDrills?: DrillUncheckedUpdateManyWithoutCreatedByNestedInput
    taskActivity?: TaskActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskCreateManyCreatedByInput = {
    id?: string
    title: string
    dueDate: Date | string
    description?: string | null
    createdAt?: Date | string
    shipId: string
  }

  export type DrillCreateManyCreatedByInput = {
    id?: string
    title: string
    drillType: string
    scheduledDate: Date | string
    createdAt?: Date | string
    shipId: string
  }

  export type TaskActivityCreateManyUserInput = {
    id?: string
    status?: $Enums.TaskStatus
    comments?: string | null
    updatedAt?: Date | string
    taskId: string
  }

  export type DrillActivityCreateManyUserInput = {
    id?: string
    attended?: boolean
    completed?: boolean
    updatedAt?: Date | string
    drillId: string
  }

  export type TaskUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ship?: ShipUpdateOneRequiredWithoutTasksNestedInput
    taskActivity?: TaskActivityUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipId?: StringFieldUpdateOperationsInput | string
    taskActivity?: TaskActivityUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipId?: StringFieldUpdateOperationsInput | string
  }

  export type DrillUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    drillType?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ship?: ShipUpdateOneRequiredWithoutDrillsNestedInput
    drillActivity?: DrillActivityUpdateManyWithoutDrillNestedInput
  }

  export type DrillUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    drillType?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipId?: StringFieldUpdateOperationsInput | string
    drillActivity?: DrillActivityUncheckedUpdateManyWithoutDrillNestedInput
  }

  export type DrillUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    drillType?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskActivityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutTaskActivityNestedInput
  }

  export type TaskActivityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskActivityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type DrillActivityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    attended?: BoolFieldUpdateOperationsInput | boolean
    completed?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drill?: DrillUpdateOneRequiredWithoutDrillActivityNestedInput
  }

  export type DrillActivityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    attended?: BoolFieldUpdateOperationsInput | boolean
    completed?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drillId?: StringFieldUpdateOperationsInput | string
  }

  export type DrillActivityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    attended?: BoolFieldUpdateOperationsInput | boolean
    completed?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drillId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateManyShipInput = {
    id?: string
    title: string
    dueDate: Date | string
    description?: string | null
    createdAt?: Date | string
    createdById: string
  }

  export type DrillCreateManyShipInput = {
    id?: string
    title: string
    drillType: string
    scheduledDate: Date | string
    createdAt?: Date | string
    createdById: string
  }

  export type TaskUpdateWithoutShipInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    taskActivity?: TaskActivityUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutShipInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    taskActivity?: TaskActivityUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutShipInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type DrillUpdateWithoutShipInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    drillType?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedDrillsNestedInput
    drillActivity?: DrillActivityUpdateManyWithoutDrillNestedInput
  }

  export type DrillUncheckedUpdateWithoutShipInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    drillType?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    drillActivity?: DrillActivityUncheckedUpdateManyWithoutDrillNestedInput
  }

  export type DrillUncheckedUpdateManyWithoutShipInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    drillType?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type TaskActivityCreateManyTaskInput = {
    id?: string
    status?: $Enums.TaskStatus
    comments?: string | null
    updatedAt?: Date | string
    userId: string
  }

  export type TaskActivityUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTaskActivityNestedInput
  }

  export type TaskActivityUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskActivityUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DrillActivityCreateManyDrillInput = {
    id?: string
    attended?: boolean
    completed?: boolean
    updatedAt?: Date | string
    userId: string
  }

  export type DrillActivityUpdateWithoutDrillInput = {
    id?: StringFieldUpdateOperationsInput | string
    attended?: BoolFieldUpdateOperationsInput | boolean
    completed?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDrillActivityNestedInput
  }

  export type DrillActivityUncheckedUpdateWithoutDrillInput = {
    id?: StringFieldUpdateOperationsInput | string
    attended?: BoolFieldUpdateOperationsInput | boolean
    completed?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DrillActivityUncheckedUpdateManyWithoutDrillInput = {
    id?: StringFieldUpdateOperationsInput | string
    attended?: BoolFieldUpdateOperationsInput | boolean
    completed?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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