// lastfm-status.js — renders last.fm latest track and supports a square card with marquee
document.addEventListener("DOMContentLoaded", async () => {
	const statusDiv = document.getElementById("lastfm-status");
	if (!statusDiv) return;

	// support an alternate presentation mode controlled from markup
	// usage: <div id="lastfm-status" data-user="wrired" data-mode="square"></div>
	const mode = statusDiv.dataset.mode || statusDiv.dataset.layout;
	// we rely on the data-mode attribute for styling; do not add helper class

	const user = statusDiv.dataset.user;
	if (!user) return;
	const url = `https://lastfm-last-played.biancarosa.com.br/${user}/latest-song`;

	try {
		const res = await fetch(url);
		const json = await res.json();

		statusDiv.classList.add("music-status", "fade-in");

		const isPlaying = json.track?.["@attr"]?.nowplaying;
		const statusText = isPlaying ? "Ouvindo agora:" : "Ouviu por último:";

		// base styles (small, non-square defaults). Square CSS moved to css/home.css.
		const style = document.createElement("style");
		style.id = "status-lastfm-style";
		style.innerHTML = `
      #lastfm-status {
        margin: 24px auto 0 auto;
      }

      div#lastfm-status a {
        display: flex;
        align-items: center;
        text-align: left;
        gap: 16px;
        text-decoration: none;
        color: var(--clr-white);
        width: 100%;
        font-family: var(--fonte-corpo, monospace);
        font-size: 1.07rem;
        cursor: pointer;
      }

      .box-inner:has(div#lastfm-status) {
        border: 1px solid var(--clr-borda);
        padding: 10px;
        transition: border 0.25s ease;
      }

      .box-inner:has(div#lastfm-status a):hover {
        border-color: var(--clr-main-a40);
      }

      div#lastfm-status a img {
        width: 48px;
        height: auto;
        border: 1px solid var(--clr-gray-a20);
        object-fit: cover;
        image-rendering: auto;
      }

      body.rounded div#lastfm-status a img {
        border-radius: 4px;
      }

      div#lastfm-status a:hover img {
        filter: none;
      }

      div#lastfm-status span#lastfm-track {
        font-size: 0.9em;
      }

      /* Square Mode */

      .box-inner:has(#lastfm-status[data-mode="square"]) {
        justify-content: center;
      }

      #lastfm-status[data-mode="square"] {
        margin: 0;
        height: 100%;
        width: 100%;
      }

      #lastfm-status[data-mode="square"] a {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 14px;
        padding: 14px;
        border-radius: 0;
        text-decoration: none;
        color: inherit;
        background-color: transparent;
        height: inherit;
        width: inherit;
      }

      #lastfm-status[data-mode="square"] span.lastfm-text {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      #lastfm-status[data-mode="square"] a img {
        flex: 1;
        height: 100%;
        width: auto;
        aspect-ratio: 1 / 1;
        border-radius: 0;
        object-fit: cover;
        display: block;
      }

      #lastfm-status[data-mode="square"] div.lastfm-square-cover {
        height: 100%;
        width: auto;
      }

      #lastfm-status[data-mode="square"] .lastfm-square-meta {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        min-width: 0;
        gap: 2px;
        // height: 100%;
        max-height: 100%;
        overflow: hidden;
        margin: 0 10px;
      }

      #lastfm-status[data-mode="square"] strong.lastfm-ouvindo {
        font-size: 1em;
        border-bottom: 1px solid var(--clr-gray-a20);
        padding-bottom: 2px;
        margin-bottom: 6px;
      }

      #lastfm-status[data-mode="square"] div.track-wrap {
        position: relative;
        overflow: hidden;
        width: 100%;
        min-width: 0;
        font-size: 1em;
      }

      #lastfm-status[data-mode="square"] div.track-wrap span#lastfm-track {
        flex: 1;
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      #lastfm-status[data-mode="square"] span.lastfm-track-name {
        font-size: 1em;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #lastfm-status[data-mode="square"] span.lastfm-track-artist {
        font-size: 0.9em;
        color: var(--clr-gray-a50);
      }

      #lastfm-status[data-mode="square"] span.lastfm-track-album {
        font-size: 0.9em;
      }

      /* ASCII-style music bars using characters ▁ ▂ ▃.
         We animate by swapping the pseudo-element content across keyframes
         (discrete steps) so the small/mid/large characters cycle positions,
         producing a faithful 'bars' effect without moving layout. */
      .lastfm-ouvindo.playing::before {
        /* render the current bar-string from data-bars so JS can swap it */
        content: attr(data-bars);
        font-family: var(--fonte-corpo, monospace);
        display: inline-block;
        margin-right: 6px;
        line-height: 1;
        vertical-align: middle;
        color: var(--clr-white, --clr-main-a30);
        letter-spacing: 3px;
        width: 36px;
        text-align: left;
        -webkit-font-smoothing: antialiased;
        font-size: 0.7em;
      }

      @media (max-width: 770px) {
        .box-inner:has(div#lastfm-status) {
          border-width: 1px 0 1px 0;
        }
      }
      `;
		document.head.appendChild(style);

		// Render HTML for square mode or default inline mode
		if (mode === "square") {
			statusDiv.innerHTML = `
        <a href="https://www.last.fm/user/${user}" target="_blank" class="lastfm-square-link">
          <div class="lastfm-square-cover"><img class="dither" src="${json.track.image[2]["#text"]}" loading="lazy"></div>
          <div class="lastfm-square-meta">
            <strong class="lastfm-ouvindo">${statusText}</strong>
            <div class="track-wrap" aria-hidden="false">
              <span id="lastfm-track" class="track-text">
                <span class="lastfm-track-name">${json.track.name}</span>
                <span class="lastfm-track-artist">${json.track.artist["#text"]}</span>
                <span class="lastfm-track-album">${json.track.album["#text"]}</span>
              </span>
            </div>
          </div>
        </a>
      `;
		} else {
			statusDiv.innerHTML = `
        <a href="https://www.last.fm/user/${user}" target="_blank">
          <img class="dither" src="${json.track.image[1]["#text"]}" loading="lazy">
          <span class="lastfm-text">
            <strong class="lastfm-ouvindo">${statusText}</strong><br>
            <span id="lastfm-track" class="lastfm-track">${json.track.name}<span style="opacity:0.7;"> por </span>${json.track.artist["#text"]}</span>
          </span>
        </a>
      `;
		}

		// Manage ASCII bar swapping with a JS interval (stored on statusDiv to
		// avoid globals). We rotate through small/mid/large permutations.
		try {
			const ouvElem = statusDiv.querySelector(".lastfm-ouvindo");
			const barStrings = [
				"▁▂▃",
				"▂▃▁",
				"▃▁▂",
				"▂▁▃",
				"▂▇▃",
				"▃▇▁",
				"▇▁▂",
				"▂▁▇",
				"▁▇▂",
				"▃▂▇",
			];
			// const barStrings = ["▁▂▃", "▂▇▃", "▃▇▁", "▇▁▂", "▂▁▇"];

			if (ouvElem) {
				// clear any previous interval
				if (statusDiv._lastfmBarsInterval) {
					clearInterval(statusDiv._lastfmBarsInterval);
					statusDiv._lastfmBarsInterval = null;
				}

				if (isPlaying) {
					ouvElem.classList.add("playing");
					ouvElem.dataset.bars = barStrings[0];
					let idx = 0;
					statusDiv._lastfmBarsInterval = setInterval(() => {
						idx = (idx + 1) % barStrings.length;
						ouvElem.dataset.bars = barStrings[idx];
					}, 300);
				} else {
					ouvElem.classList.remove("playing");
					ouvElem.removeAttribute("data-bars");
				}
			}
		} catch (err) {
			// defensive: do nothing if DOM query fails
		}

		// marquee behavior removed; keep overflow:ellipsis only
	} catch (e) {
		statusDiv.style.alignContent = "center";
		statusDiv.style.textAlign = "center";
		statusDiv.style.color = "var(--clr-gray-a30)";
		statusDiv.style.title = none;
		statusDiv.textContent = "Erro ao carregar status do Last.fm";
		statusDiv.classList.add("fade-in");
		console.error(e);
	}
});
