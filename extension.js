// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// console.log("Real programmers don't have to debug");

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json


	let debug_start = vscode.debug.onDidStartDebugSession(function () {
		playSpecificSound("Real_programmers_dont")
		vscode.window.showWarningMessage("Real programmers don't have to debug");
	})

	const debug_terminate = vscode.debug.onDidTerminateDebugSession(function () {
		playSpecificSound("HA_HA_HA_you_QUIT")
		vscode.window.showWarningMessage("HA HA HA, you QUIT!")

	})


	let disposable = vscode.commands.registerCommand('demotivator2.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from demotivator_v2!');
	});


	// Register a command to remove semicolons from the active editor.
	const removeSemicolonsCommand = vscode.commands.registerCommand('extension.removeSemicolons', function () {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const document = editor.document;
			const text = document.getText();
			const newText = text.replace(/;/g, '');
			const edit = new vscode.WorkspaceEdit();
			edit.replace(document.uri, new vscode.Range(0, 0, document.lineCount, 0), newText);
			vscode.workspace.applyEdit(edit);
		}
	});
	console.log('The "funny-names" extension is now active!');

	// Register the "Replace Variables with Funny Names" command
	let replaceVariablesWithFunnyNamesCommand = vscode.commands.registerCommand('extension.replaceVariablesWithFunnyNames', function () {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return; // No open text editor
		}
<<<<<<< HEAD

=======
>>>>>>> a3e47f2cbab3bdcd2068b0d3c1d3e478b339984d
		const document = editor.document;
		const originalCode = document.getText();

		// Replace variable names with funny names
<<<<<<< HEAD
		let modifiedCode = originalCode.replace(/(?<=\blet\s|\bconst\s|\bvar\s)\b[a-zA-Z]+\b/g, function (match) {
			const funnyNames = ['penguin', 'banana', 'ninja', 'koala', 'squirrel', 'jellyfish', 'toothpaste', 'unicorn', 'bubblegum', 'panda'];
			const randomIndex = Math.floor(Math.random() * funnyNames.length);
			return funnyNames[randomIndex];
=======
		let modifiedCode = originalCode.replace(/(?<=\blet\s|\bconst\s|\bvar\s)\b[a-zA-Z]+\b/g, function(match) {
		  const funnyNames = ['penguin', 'banana', 'ninja', 'koala', 'tractor', 'pig', 'MyHoney', 'olaCutie', 'bubblegum', 'panda','YoMama','YoPapa'];
		  const randomIndex = Math.floor(Math.random() * funnyNames.length);
		  return funnyNames[randomIndex];
>>>>>>> a3e47f2cbab3bdcd2068b0d3c1d3e478b339984d
		});


		// Update the text editor with the modified code
		const edit = new vscode.WorkspaceEdit();
		edit.replace(document.uri, new vscode.Range(0, 0, document.lineCount, 0), modifiedCode);
		return vscode.workspace.applyEdit(edit);
<<<<<<< HEAD
	});
	let totalErrors = 0;

	const errorRegex = /(Uncaught\s+[^\s]+\s+)?(Error|TypeError|ReferenceError):\s(.+)/gi;

	const countConsoleErrors = vscode.debug.onDidTerminateDebugSession(async function (session) {
		const consoleOutput = session.configuration.console;
		if (consoleOutput === 'internalConsole') {
			// Get all debug console output
			const debugConsole = vscode.debug.activeDebugConsole;
			const terminalText = await debugConsole.getOutput();

			// Count the number of console errors in the terminal text
			const errorCount = (terminalText.match(errorRegex) || []).length;

			// Add the error count to the total and display it
			totalErrors += errorCount;
			vscode.window.showInformationMessage(`Total errors: ${totalErrors}`);
		}
	});


	context.subscriptions.push(disposable, debug_start, removeSemicolonsCommand, replaceVariablesWithFunnyNamesCommand, countConsoleErrors);
=======
	  });

	  
	context.subscriptions.push(disposable, debug_start, removeSemicolonsCommand,replaceVariablesWithFunnyNamesCommand);
>>>>>>> a3e47f2cbab3bdcd2068b0d3c1d3e478b339984d
	//Plays random sound once per 15seconds.
	//TODO: add/remove some sounds (format is .vaw)
	setInterval(playRandomSound, 15000);

	context.subscriptions.push(disposable, debug_start);
	setInterval(playRandomSound, 15000);

	context.subscriptions.push(disposable, debug_start, removeSemicolonsCommand, replaceVariablesWithFunnyNamesCommand, debug_terminate);
}

function read_output() { }

function playSpecificSound(soundName) {
	const soundFilesDir = path.join(__dirname, '/EventSounds/'+soundName+'.wav');
		exec(`start "" /min powershell (New-Object Media.SoundPlayer '${soundFilesDir}').PlaySync()`, (error, stdout, stderr) => {
			if (error) {
				console.error(`Failed to play sound: ${error.message}`);
				return;
			}
			if (stderr) {
				console.error(`Error while playing sound: ${stderr}`);
				return;
			}
		});
}

function playRandomSound() {
	const soundFilesDir = path.join(__dirname, '/Sounds');
	const soundFiles = fs.readdirSync(soundFilesDir);

	if (soundFiles.length === 0) {
		console.log('No sound files found!');
		return;
	}

	const randomIndex = Math.floor(Math.random() * soundFiles.length);
	const randomSound = path.join(soundFilesDir, soundFiles[randomIndex]);

	exec(`start "" /min powershell (New-Object Media.SoundPlayer '${randomSound}').PlaySync()`, (error, stdout, stderr) => {
		if (error) {
			console.error(`Failed to play sound: ${error.message}`);
			return;
		}
		if (stderr) {
			console.error(`Error while playing sound: ${stderr}`);
			return;
		}
	});
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}