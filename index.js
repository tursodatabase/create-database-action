const core = require("@actions/core");
// const github = require("@actions/github");

try {
  const organization_name = core.getInput("organization_name");
  console.log(`Hello ${organization_name}!`);

  const database_name = core.getInput("database_name");
  console.log(`Hello ${database_name}!`);

  const branch_name = core.getInput("branch_name");
  console.log(`Hello ${branch_name}!`);
} catch (error) {
  core.setFailed(error.message);
}
