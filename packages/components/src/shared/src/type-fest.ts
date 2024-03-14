// We used to have type-fest https://github.com/sindresorhus/type-fest as a dependency, but we've ran into multiple problems
// where consumers of our components would have build errors when using those interface
// Since they are only helper types, we've decided to copy them here and remove the dependency

type IsEqual<T, U> =
	(<G>() => G extends T ? 1 : 2) extends
	(<G>() => G extends U ? 1 : 2) ? true: false;

type Filter<KeyType, ExcludeType> = IsEqual<KeyType, ExcludeType> extends true ? never : (KeyType extends ExcludeType ? never : KeyType);

type Except<ObjectType, KeysType extends keyof ObjectType> = {
    [KeyType in keyof ObjectType as Filter<KeyType, KeysType>]: ObjectType[KeyType];
};

type Extract<T, U> = T extends U ? T : never;

type Merge_<FirstType, SecondType> = Except<FirstType, Extract<keyof FirstType, keyof SecondType>> & SecondType;

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

export type Merge<FirstType, SecondType> = Simplify<Merge_<FirstType, SecondType>>;

export type UnionToIntersection<Union> = (
    Union extends unknown
        ? (distributedUnion: Union) => void
        : never
) extends ((mergedIntersection: infer Intersection) => void)
    ? Intersection
    : never;

export type LiteralUnion<
    LiteralType,
    BaseType extends Primitive
> = LiteralType | (BaseType & { _?: never });

type Primitive =
	| null
	| undefined
	| string
	| number
	| boolean
	| symbol
	| bigint;
