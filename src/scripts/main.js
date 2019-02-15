$(document).ready(function () {

    // Use jQuery to get a reference to `load-songs`
    const loadSongs = $("#load-songs")

    // Use jQuery to get a reference to `song-list`
    const songList = $("#song-list")

    /*
        Attach a click handler to the button with jQuery. When
        the button is clicked, use fetch to load the song data from your json-server
    */
    loadSongs.click(() => {
        fetch("http://localhost:8088/songs")
            .then(songs => songs.json())
            .then(parsedSongs => {
                /*
               Chain a `.then()` method to the fetch call, and when
               it is complete build a DOM component for each song with
               the following structure. Use the jQuery append() method
               to put an HTML representation of each song the DOM as a
               child component of the "song-list" article.

                   <section class="song">
                       <h1 class="song__title">{Title of song}</h1>
                       <section class="song__description">
                           Performed by {artist} on the album {album}
                       </section>
                   </section>
           */
                parsedSongs.forEach(song => {
                    let songText = `<section class="song">
                    <h1 class="song__title">${song.title}</h1>
                    <section class="song__description">
                        Performed by ${song.artist} on the album ${song.album}.
                    </section>
                </section>`
                    songList.append(songText)

                });
            })
    }
    )
})