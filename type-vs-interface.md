# Type Aliases vs. Interfaces in TypeScript

## Introduction

In TypeScript, both `type` aliases and `interface` declarations can describe the shape of an object. For many object types, either option works. Their main differences are declaration merging and the kinds of types they can describe.

## Interfaces can be merged

If you declare an interface more than once with the same name, TypeScript merges the declarations into one interface. In this example, `Pet` ends up with both `name` and `age`:

```ts
interface Pet {
  name: string;
}

interface Pet {
  age: number;
}

const myPet: Pet = {
  name: "Milo",
  age: 3,
};
```

This behavior is called **declaration merging**. It can be useful when extending existing declarations, though it is important to avoid unintentionally reusing an interface name.

## Type aliases cannot be reopened

A type alias cannot be declared again with the same name to add more properties. TypeScript reports a duplicate identifier error for this example:

```ts
type Animal = {
  name: string;
};

// Error: Duplicate identifier 'Animal'
type Animal = {
  age: number;
};
```

## Type aliases can describe more than objects

A type alias can name a primitive type, a union, or a tuple. For example, `Score` represents a number, `Status` represents one of two string values, and `Point` represents a pair of numbers:

```ts
type Score = number;
type Status = "active" | "inactive";
type Point = [number, number];

const score: Score = 100;
const status: Status = "active";
const point: Point = [10, 20];
```

An interface is designed to describe object shapes; it cannot directly define a primitive, union, or tuple in the same way.

## Which one should you choose?

- Use an **interface** for an object shape or class contract, especially when declaration merging or extension is useful.
- Use a **type alias** for unions, tuples, primitive aliases, or when combining types with features such as intersections (`&`).
- For a regular object shape, either is usually fine. Follow your team's existing style and use the choice consistently.

## An additional note about interfaces and classes

An interface can extend a class's instance type, but it does not inherit the class's method implementations. If the class has `private` or `protected` members, those members also affect which classes can implement the interface. This is an advanced feature and is not usually the main reason to choose an interface over a type alias.
