interface MyUser {
  name: string;
  id: number;
  email?: string;
}

type UserWithoutID = Omit<MyUser, "id">;

const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: 1,
      name: "Mr. Foo",
    },
    {
      id: 2,
      name: "Mrs. Baz",
      email: "Mrs. Baz",
    },
  ])
);

// ==================================================================


const defaultMeta = {
  title: 'Wave Nation - Build a Web3 app with Solidity',
  siteName: 'Wave Nation - Build a Web3 app with Solidity',
  description: 'Buildspace "Build a Web3 app with Solidity" by Gaël Thomas',
  /** Without additional '/' on the end */
  url: 'https://tsnext-tw.thcl.dev',
  type: 'website',
  robots: 'follow, index',
  image: '',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

// ==================================================================

// A = string
type A = Awaited<Promise<string>>;

// B = number
type B = Awaited<Promise<Promise<number>>>;

// C = boolean | number
type C = Awaited<boolean | Promise<number>>;

// ==================================================================

type Excluded = Exclude<string | number, string>;

// number

// ==================================================================

// Extract<Type, Union>
// The extract utility type lets you extract all declared keys inside Union from Type
type ExType = 'messi' | 'ronaldo' | 'neymar' | 'mbappe' | 'maguire'

type Extracted1 = Extract<ExType, 'messi'>;
type Extracted2 = Extract<ExType, 'messi' | 'ronaldo'>;

// messi
// messi | ronaldo

// ==================================================================

// Exclude<Type, Union>
// The Exclude utility type lets you exclude all declared keys inside Union from Type
type ExcType = 'messi' | 'ronaldo' | 'neymar' | 'mbappe' | 'maguire'

type Exctracted1 = Exclude<ExcType, 'messi'>;
type Exctracted2 = Exclude<ExcType, 'messi' | 'ronaldo'>;

// 'ronaldo' | 'neymar' | 'mbappe' | 'maguire'
// 'neymar' | 'mbappe' | 'maguire'

// ==================================================================

type NonNull = NonNullable<string | number | void | null | undefined>;

// string | number

// ==================================================================

type Color = "WHITE" | "BLACK";

const myFunction = (color: Color, age: number): void => {
  console.log('color :', color)
}

// get type of function's params ---> as tuple ==> [string, number] 

type paramsType = Parameters<typeof myFunction>

// Creates a tuple [ string, number]
type T1 = Parameters<(p1: string, p2: number) => void>;

// ==================================================================

type T2 = ReturnType<() => string>;

// string

// ==================================================================
