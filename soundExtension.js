  const { exec } = require('child_process');
  const fs = require('fs');
  const path = require('path');
  
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
  
  setInterval(playRandomSound, 8000); 