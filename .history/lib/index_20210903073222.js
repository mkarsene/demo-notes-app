import StorageStack from "./StorageStack";
import MyStack from "./MyStack";

export default function main(app) {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs12.x",
  });

  new MyStack(app, "my-stack");

  const storageStack = new StorageStack(app, "storage");

  new ApiStack(app, "api", {
    table: storageStack.table,
  });
}
