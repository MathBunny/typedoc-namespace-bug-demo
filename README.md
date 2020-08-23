# TypeDoc Namespace Bug

Simple reproducable setup demonstrating re-exporting bug in TypeDoc. It highlights the issue of "variables" appearing as a heading for type re-exporting, when in-fact it is an interface.

https://github.com/MathBunny/typedoc-namespace-bug/blob/b6b33964153421ed96cfc88f75991e3e0a7a63c8/src/index.ts#L8-L14

## Getting started 
```
npm install
npm run build
npm run docs
```

After, open the generated docs in the `docs` folder. You'll notice by going to the nested namespace the following:

![](https://i.imgur.com/DTKOX6z.png)


