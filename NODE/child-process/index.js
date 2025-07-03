const { exec } = require("child_process")



let tool = process.argv[2]

console.log(tool)

exec(`${tool} --version`, (error, stdout, stderr) => {

  console.log("error: " +  error)
  console.log("stdout: " +  stdout)
  console.log("stderr: " +  stderr)
})