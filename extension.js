const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

let soundPath = path.join(__dirname, 'sound.wav'); //путь к звуку


function activate(context){
  console.log("Plugin has been activated");

  const playSound = vscode.commands.registerCommand('eshkere.playSound', async () => {
    setSound(context);
  });

  context.subscriptions.push(playSound);
}

function setSound(context){
  playSound(soundPath);
}

function playSound(path){
  const player = require('node-wav-player/lib/wav-player');
  player.play({
    path: path,
  }).then(() => {
    console.log("Sound played");
  }).catch(error => {
    console.error(error);
  });
} 

function deactivate(){}

module.exports = {
  activate,
  deactivate
};