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

	// This line of code will only be executed once when your extension is activated
	//vscode.window.showInformationMessage("Real programmers don't have to debug");
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json

	let debug_start = vscode.debug.onDidChangeActiveDebugSession(function(){
				vscode.window.showInformationMessage("Real programmers don't have to debug");
	})

	let disposable = vscode.commands.registerCommand('demotivator2.helloWorld', function () {
		// The code you place here will be executed every time your command is executed
		
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from demotivator_v2!');
	});

	//Plays random sound once per 15seconds.
	//TODO: add/remove some sounds (format is .vaw)
	setInterval(playRandomSound, 15000); 

	context.subscriptions.push(disposable,debug_start);
}

function read_output(){}

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
function deactivate() {}

module.exports = {
	activate,
	deactivate
}