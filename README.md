# Arkitektz Code Challenge

## How to run test the application

#### Install the dependencies

First of all make sure React Native Environment is configured correctly on your PC

Make Sure to install the dependencies by running `yarn install` or `npm install`

#### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

#### For iOS

```bash
pod install

# using npm
npm run ios

# OR using Yarn
yarn ios
```

### Testing

For testing I have used jest for unit testing and detox for e2e testing

The testing files for unit testing are in root in a folder named `__tests__`
And for e2e it is in the folder named `e2e`

### For Jest

you can simply open the terminal and run

```
# using yarn
yarn test

# using npm
npm test
```

### For Detox

make sure to install detox globally first

```
npm install -g detox-cli
```

after that in terminal of your project run these commands

```
# iOS
detox build -c ios
# Android
detox build -c android
```

## Reasoning behind the approach taken

### Testing

I chose `jest` for unit because it already comes with React Native and primarily due to its simplicity, speed, and comprehensive test suite capabilities, making it well-suited for isolating and testing individual components.

And using `Detox` for e2e because it allows testing the entire application flow in a realistic environment, ensuring smooth interactions between components. Detox provides a robust solution for testing the app as a whole, simulating real user interactions on both iOS and Android platforms.

### API calls

I used React Query in this app to call APIs as it has a lot of advantages like Automatic Caching, Real-time Updates, Optimistic Updates, Built-in Loading and Error States, Server-Side Rendering (SSR) Support and Global State Management.

### Design

I have the approach to design the screens in efficient manner like making reusable components and reusing it through out the app wherever needed. I focus on creating custom components rather than using UI libraries because using unnecassary libraries can affect on the app to make it slow and heavy.

## Assumptions made

After going through the instructions given in the file I assumed that what approach would I take like there was this feature to be made where I have call two APIs `trending` & `search` so I was first thinking should I use any middleware for this like Redux-Saga or Redux-Thunk then I switched my mind to React Query as it has its own advantages as I have mentioned above. And after that I was thinking how would I perform the task in most efficient way, using less third-party libraries and making some good logics.

## Total time taken

I might have taken more than 10 hours to work on this task

## Which solutions relied on googling hints, tips or answers; Googling is acceptable, but you should be prepared to explain your understanding of the solution and provide references to the source material as applicable.

Yes I took help from Google as I used React Query in this app to call APIs, while implementing the infinite loading in flatlist of the gif data it helped me because i was using react query after a long time, they had updated a lot of things so it helped me to solve the problems i was facing.

And for e2e testing I have not that much experience so took help for that as well. I am not good at it, but I am a quick learner and I can work on it.
