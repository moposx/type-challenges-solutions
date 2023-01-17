# Type Challenges Solutions and Notes

Solutions and notes as the result of taking [Type Challenges](https://github.com/type-challenges/type-challenges).

A record of learning the TypeScript's typing system.

## Project Structure

In every challenge's folder (`challenges/ts/challenge-number`) there are `index.ts` that contains the finished TypeScript code and `note.md` which demystifies (immaturely or just simply wrongly) the solution.

## Setting up the Environment

Personally I use [VS Code](https://code.visualstudio.com/). It's free of charge so do not install the fake version which requires a purchase (sounds weird but it is happening!).

A required dependency is `@type-challenges/utils` which provides some utilties for testing our solutions.

It is recommended that the latest stable version of TypeScript be installed as a dependency. It's optional of course, since usually your editor, like VS Code already bundles TypeScript for out-of-the-box experience. If you choose to install TypeScript yourself, an additional step is to let VS Code choose the workspace version of TypeScript through GUI or add this line to `settings.json`:

```json
"typescript.tsdk": "node_modules\\typescript\\lib"
```

Moreover, we need to configure TypeScript for the type challenges:

```jsonc
{
  "compilerOptions": {
    "module": "ES6",
    "target": "ES2022",
    "strict": true, // recommended
    "forceConsistentCasingInFileNames": true,
    "lib": ["ES2022"],
    "noUnusedLocals": false,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "moduleResolution": "node" // **required**, so that VS Code can discover the installed depenencies and check the code
  },
  "exclude": ["node_modules"] // recommended, we are not going to compile the packages in the `node_modules`
}
```

Now the environment is set up.

## Credits

- [Solutions people submitted in the offical repository](https://github.com/type-challenges/type-challenges/issues)

- [Eugene Obrezkov aka ghaiklor's solution and explanation](https://ghaiklor.github.io/type-challenges-solutions/en/)
