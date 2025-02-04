import { Server, Options } from './presentation/server';

(() => {
  main();
})()

async function main() {
  const options: Options = {
    port: 9000
  }
  new Server(options).start();
};
