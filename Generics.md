# How Generics Work in TypeScript

## Introduction

A generic is a reusable placeholder for a type. You can think of it like a box whose contents can vary. Instead of writing a separate function for strings and numbers, you can write one generic function and let TypeScript keep track of the type you use.

The letter `T` is often used as the placeholder name, but it could be another name.

## A simple generic function

```ts
function keep<T>(item: T): T {
  return item;
}

const message = keep<string>("hello");
const score = keep<number>(42);
```

In the first call, `T` is `string`; in the second, `T` is `number`. The function returns the same type it receives, so TypeScript knows that `message` is a string and `score` is a number.

TypeScript can often figure out the type on its own, so you can also write:

```ts
const message = keep("hello"); // TypeScript infers string
const score = keep(42);        // TypeScript infers number
```

## Why use generics?

Generics let you reuse code for different types while preserving useful type information. For example, this function can return the first item from an array of any element type:

```ts
function firstElement<T>(items: T[]): T | undefined {
  return items[0];
}

const firstName = firstElement(["Mina", "Rafi"]); // string | undefined
const firstScore = firstElement([90, 85]);         // number | undefined
```

The return type is `T | undefined` because the array might be empty. TypeScript still knows which type of item the array contains.

Without a generic, using `any` would lose that information:

```ts
function firstElementWithoutTypeSafety(items: any[]): any {
  return items[0];
}
```

With `any`, TypeScript cannot help check how the returned value is used. A generic keeps the connection between the input array's element type and the returned value.

## Generics and asynchronous `Promise<T>` responses

A `Promise<T>` is a promise to provide a value of type `T` later. The `T` tells TypeScript what type the promise resolves to:

```ts
async function getAge(): Promise<number> {
  return 10;
}
```

Here, `getAge()` returns a `Promise<number>`. When it resolves, the value is a number. After using `await`, TypeScript knows the result is a number too:

```ts
const age = await getAge();
// age is a number
```

The same idea works with other result types:

```ts
async function getName(): Promise<string> {
  return "Mina";
}
```

So, `Promise<T>` means: “A promise that will eventually resolve with a value of type `T`.” This helps TypeScript check that asynchronous functions return the right kind of value and that the code using their results handles that type correctly.

## When should you use a generic?

Use a generic when the code should work with multiple types and you want to preserve the relationship between its inputs and outputs. Avoid adding a generic when the code only needs one fixed type; in that case, using the specific type is simpler.

In short, a generic is a type placeholder, and `Promise<T>` says that a promise will provide a value of that type later.
