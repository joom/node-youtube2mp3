#node-youtube2mp3
This is a small example web app for downloading YouTube videos as MP3 audio files. It runs youtube-dl and ffmpeg in child processes, so you should check (or directly run on Ubuntu/Debian) the installprereq.sh file. You can probably install the requirements with brew on Mac.

#Acknowledgment
The piping from youtube-dl to ffmpeg, and then from ffmpeg to the response, is done by the code from [here](http://pauldbergeron.com/code/networking/nodejs/coffeescript/streaming-youtube-to-mp3-audio-in-nodejs.html).
