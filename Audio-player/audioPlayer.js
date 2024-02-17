
$(document).ready(function() {
$('.hiro-audio').each(function() {
        var audioPlayer = $(this);
        var source = audioPlayer.find('audio').attr('src');
        // Append controls dynamically
        audioPlayer.append(`
            <button class="play-pause"><img src="icons/playbtn.png" alt="Play/Pause"></button>
            <input type="range" class="seek-bar" value="0" min="0" max="100" step="1">
        `);

        var song = new Howl({
            src: [source],
            html5: true, // Enable the HTML5 Audio backend for smoother seek handling
            onplay: function() {
                requestAnimationFrame(function updateSeekBar() {
                    if (!song.playing()) return;
                    var seek = song.seek() || 0;
                    audioPlayer.find('.seek-bar').val((seek / song.duration()) * 100 || 0);
                    requestAnimationFrame(updateSeekBar);
                });
            }
        });

        var playPause = audioPlayer.find('.play-pause');
        var seekBar = audioPlayer.find('.seek-bar');

        playPause.on('click', function() {
            if (song.playing()) {
                song.pause();
                playPause.find('img').attr('src', 'icons/playbtn.png');
            } else {
                song.play();
                playPause.find('img').attr('src', 'icons/pause.png');
            }
        });

        // Use event delegation for dynamically added seek bar
        seekBar.on('input', function() {
            var duration = song.duration();
            var seekTo = duration * ($(this).val() / 100);
            song.seek(seekTo);
        });
    });
});


//For dom added
function initializeAudioPlayer(audioPlayer) {
    var source = audioPlayer.find('audio').attr('src');

    // Append controls dynamically
    audioPlayer.append(`
        <button class="play-pause"><img src="icons/playbtn.png" alt="Play/Pause"></button>
        <input type="range" class="seek-bar" value="0" min="0" max="100" step="1">
    `);

    var song = new Howl({
        src: [source],
        html5: true, // Enable the HTML5 Audio backend for smoother seek handling
        onplay: function() {
            requestAnimationFrame(function updateSeekBar() {
                if (!song.playing()) return;
                var seek = song.seek() || 0;
                audioPlayer.find('.seek-bar').val((seek / song.duration()) * 100 || 0);
                requestAnimationFrame(updateSeekBar);
            });
        }
    });

    audioPlayer.on('click', '.play-pause', function() {
        if (song.playing()) {
            song.pause();
            $(this).find('img').attr('src', 'icons/playbtn.png');
        } else {
            song.play();
            $(this).find('img').attr('src', 'icons/pause.png');
        }
    });

    audioPlayer.on('input', '.seek-bar', function() {
        var duration = song.duration();
        var seekTo = duration * ($(this).val() / 100);
        song.seek(seekTo);
    });
}
