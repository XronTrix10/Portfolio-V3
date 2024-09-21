import { say, think } from "cowsay";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

/**
 * Terminal commands.
 * @type {object} commands - Terminal commands.
 */
export const commands: { [key: string]: string } = {
  "cat welcome.txt": "Welcome in my portfolio!\n",
  date: new Date().toLocaleString(),
  time: new Date().toLocaleTimeString(),
  help: "help - Displays all available commands\npwd- Print working directory\ncat - Displays the contents of a file\nls - Lists the contents of a directory\necho - Prints a message\nuname - Displays the current environment\nwhoami - Displays the user name\ndate - Displays the current date\ntime - Displays the current time\nclear - Clears the terminal\ncd - Change the route\nrm - Try to remove a file\nsudo - Try to run a command as root\n",
};

/**
 * Appends a command to the terminal.
 * @param {string[]} pre - The previous value of the terminal.
 * @param {string} cmd - The command to append.
 * @param {string} output - The output of the command.
 * @returns {string[]} The updated value of the terminal.
 */
const appendCmd = (pre: string[], cmd: string, output: string): string[] => {
  return [...pre, `┌──(guest㉿trix)-[~]`, `└─$ ${cmd}`, `${output}\n`];
};

const routes = ["/home", "/work", "/projects", "/contact"];

/**
 * Executes a command in the terminal.
 * @param {string} cmd - the command to execute.
 * @param {string[]} preValue - the previous value of the terminal.
 * @param {string} pathname - the pathname of the current page.
 * @param {AppRouterInstance} router - the router instance.
 * @param {(newValue: string[]) => void} updateValue - the update value function.
 */
export const executeCommand = (
  cmd: string,
  preValue: string[],
  pathname: string,
  router: AppRouterInstance,
  // eslint-disable-next-line no-unused-vars
  updateValue: (newValue: string[]) => void,
): void => {
  if (!cmd) return;

  if (cmd === "clear") {
    updateValue([]);
    return;
  }

  if (cmd in commands) {
    updateValue(appendCmd(preValue, cmd, commands[cmd]));
  } else if (cmd.startsWith("sudo")) {
    updateValue(
      appendCmd(preValue, cmd, think({ text: "permission denied, sorry!" })),
    );
  } else if (cmd.startsWith("cd")) {
    const path = cmd.slice(3);

    if (routes.includes(path)) {
      updateValue(appendCmd(preValue, cmd, `Teleporting to ${path}`));
      router.push(path);
    } else {
      updateValue(
        appendCmd(
          preValue,
          cmd,
          `allowed paths: ${routes.join(", ")}\n\n` +
            think({
              text: `Can't take you to ${path}`,
            }),
        ),
      );
    }
  } else if (cmd.startsWith("ls")) {
    updateValue(
      appendCmd(
        preValue,
        cmd,
        "total 1\n-rw-r--r-- 1 user user 0 Oct 1 12:00 welcome.txt",
      ),
    );
  } else if (cmd.startsWith("cat")) {
    updateValue(appendCmd(preValue, cmd, say({ text: "file not found" })));
  } else if (cmd.startsWith("rm")) {
    updateValue(appendCmd(preValue, cmd, say({ text: "can not remove file" })));
  } else if (cmd.startsWith("uname")) {
    updateValue(
      appendCmd(
        preValue,
        cmd,
        navigator.platform +
          ", " +
          window.screen.width +
          "x" +
          window.screen.height +
          ", " +
          navigator.hardwareConcurrency +
          " cores" +
          "\n" +
          navigator.userAgent,
      ),
    );
  } else if (cmd.startsWith("echo")) {
    const message = cmd.slice(5);
    updateValue(appendCmd(preValue, cmd, message));
  } else if (cmd.startsWith("whoami")) {
    updateValue(appendCmd(preValue, cmd, "guest"));
  } else if (cmd === "pwd") {
    updateValue(appendCmd(preValue, cmd, pathname));
  } else {
    updateValue(appendCmd(preValue, cmd, say({ text: "command not found" })));
  }
};
