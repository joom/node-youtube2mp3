var _ref = require('child_process'),
    spawn = _ref.spawn,
    exec = _ref.exec,
    request = require('request');

module.exports = function(req, res) {
  try {
    var url = "http://www.youtube.com/watch?v=" + req.params.id;
    var cmd = "youtube-dl --simulate --get-url " + url;

    var youtube_dl_url_child = exec(cmd, function(err, stdout, stderr) {
      var youtube_dl_url = stdout.toString();
      youtube_dl_url = youtube_dl_url.substring(0, youtube_dl_url.length - 1);
      res.contentType = 'audio/mpeg3';

      //delete the line below to make it a playable stream
      res.setHeader('Content-disposition', 'attachment; filename=' + req.params.id + '.mp3');

      var ffmpeg_child = spawn("ffmpeg", ['-i', 'pipe:0', '-acodec', 'libmp3lame', '-f', 'mp3', '-']);
      ffmpeg_child.stdout.pipe(res);
      request({
        url: youtube_dl_url,
        headers: {
          'Youtubedl-no-compression': 'True'
        }
      }).pipe(ffmpeg_child.stdin);
    });
  } catch(e) {
    console.log(e);
    res.redirect('/error');
  }
};