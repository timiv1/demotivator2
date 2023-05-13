// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// console.log("Real programmers don't have to debug");

	// This line of code will only be executed once when your extension is activated
	// vscode.window.showInformationMessage("Real programmers don't have to debug");
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json


	let debug_start = vscode.debug.onDidChangeActiveDebugSession(function () {
		vscode.window.showInformationMessage("Real programmers don't have to debug");
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
	
		const document = editor.document;
		const originalCode = document.getText();
	
		// Replace variable names with funny names
		let modifiedCode = originalCode.replace(/(?<=\blet\s|\bconst\s|\bvar\s)\b[a-zA-Z]+\b/g, function(match) {
		  const funnyNames = ['penguin', 'banana', 'ninja', 'koala', 'squirrel', 'jellyfish', 'toothpaste', 'unicorn', 'bubblegum', 'panda'];
		  const randomIndex = Math.floor(Math.random() * funnyNames.length);
		  return funnyNames[randomIndex];
		});
	
		// Update the text editor with the modified code
		const edit = new vscode.WorkspaceEdit();
		edit.replace(document.uri, new vscode.Range(0, 0, document.lineCount, 0), modifiedCode);
		return vscode.workspace.applyEdit(edit);
	  });

	context.subscriptions.push(disposable, debug_start, removeSemicolonsCommand,replaceVariablesWithFunnyNamesCommand);
}

function read_output() { }


// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
