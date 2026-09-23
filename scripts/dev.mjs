import { spawn } from "node:child_process";
import path from "node:path";

const forwarded = [];
for (const argument of process.argv.slice(2)) {
  if (argument === "--host") {
    forwarded.push("--hostname");
  } else if (argument !== "--strictPort") {
    forwarded.push(argument);
  }
}

const nextCli = path.join(process.cwd(), "node_modules", "next", "dist", "bin", "next");
const child = spawn(process.execPath, [nextCli, "dev", ...forwarded], {
  cwd: process.cwd(),
  env: process.env,
  stdio: "inherit",
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code ?? 1);
  }
});
