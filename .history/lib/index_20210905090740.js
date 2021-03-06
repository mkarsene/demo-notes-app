import StorageStack from "./StorageStack";
import MyStack from "./MyStack";
import ApiStack from "./ApiStack";
import AuthStack from "./AuthStack";
export default function main(app) {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs12.x",
  });

  new MyStack(app, "my-stack");

  const storageStack = new StorageStack(app, "storage");

  const apistack = new ApiStack(app, "api", {
    table: storageStack.table,
  });

  new AuthStack(app, "auth", {
    api: apiStack.api,
    bucket: storageStack.bucket,
  });
}
