# TypeDoc Namespace Bug

Simple reproducable setup demonstrating a re-exporting bug in TypeDoc. 

## Purpose
Highlights the issue of "variables" appearing as a heading for type re-exporting, when in fact it is an interface. The complete source code can be found in `src`.

```ts
/**
 * Sample namespace exported that leverages aliasing. 
 */
export namespace admin.subnamespace{
  export import DemoInterface = demoInterfaceApi.DemoInterface; // DOES NOT WORK!
  export interface DemoClass extends demoClassApi.DemoClass {}
}
```

## Getting started 
```
npm install
npm run build
npm run docs
```

After, open the generated docs in the `docs` folder. You'll notice by going to the nested namespace the following:

![](https://i.imgur.com/DTKOX6z.png)

## Related Pull Requests
The [following](https://github.com/TypeStrong/typedoc/pull/1157) seems related but does not fully satisfy the issue. However, compared to TypeDoc `0.15.0` it is working much better because the re-export appears in the documentation unlike before.
