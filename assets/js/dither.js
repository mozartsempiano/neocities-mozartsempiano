(function injectDither() {
  const css = `
.dither-wrap {
  position: relative;
  display: inline-block;
  line-height: 0;
  height: inherit;
  width: inherit;
}
.dither-wrap.no-position {
  /* for special cases where the wrapper should not create a positioning context */
  position: unset !important;
}
.dither-wrap img.dither {
  display: inline-block;
  vertical-align: middle;
}
.dither-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: url("/assets/img/bayer.png");
  background-size: .5em;
  opacity: .7;
  mix-blend-mode: multiply;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-pixelated;
  image-rendering: pixelated;
  z-index: 2;
  filter: brightness(55%) contrast(2.75);
  mix-blend-mode: color-dodge;
  image-rendering: pixelated;
}
.dither-contrast {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-color: transparent;
  z-index: 3;
  filter: brightness(85%) contrast(120%) saturate(120%);
}
`.trim();

  function run() {
    // injeta CSS no <head>
    const style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    (document.head || document.documentElement).appendChild(style);

    const body = document.body || document.getElementsByTagName("body")[0];

    function wrapImage(img) {
      if (!img || img.closest(".dither-wrap")) return;
      const wrap = document.createElement("span");
      wrap.className = "dither-wrap";
      img.parentNode.insertBefore(wrap, img);
      wrap.appendChild(img);

      // if the image itself requests no-position for the wrapper, transfer that request
      // supports a class 'dither-no-position' or attribute 'data-dither-no-position'
      try {
        if (img.classList && img.classList.contains("dither-no-position")) {
          wrap.classList.add("no-position");
        }
        if (img.dataset && img.dataset.ditherNoPosition !== undefined) {
          wrap.classList.add("no-position");
        }
      } catch (e) {
        // ignore
      }

      // preserve margins by moving them from the img to the wrapper
      try {
        const cs = window.getComputedStyle(img);
        const mt = cs.marginTop || "0px";
        const mr = cs.marginRight || "0px";
        const mb = cs.marginBottom || "0px";
        const ml = cs.marginLeft || "0px";
        // if the image had margins, apply them to the wrapper and clear the img margins
        if (mt !== "0px" || mr !== "0px" || mb !== "0px" || ml !== "0px") {
          wrap.style.margin = `${mt} ${mr} ${mb} ${ml}`;
          img.style.margin = "0";
        }
        // preserve the image's display behavior so layout doesn't change
        const imgDisplay = cs.display || "";
        if (imgDisplay) wrap.style.display = imgDisplay === "block" ? "block" : imgDisplay === "inline" ? "inline" : "inline-block";
      } catch (e) {
        // getComputedStyle may fail in some edge cases; ignore and continue
      }

      const overlay = document.createElement("div");
      overlay.className = "dither-overlay";
      wrap.appendChild(overlay);

      const contrast = document.createElement("div");
      contrast.className = "dither-contrast";
      wrap.appendChild(contrast);

      // Ensure the dither overlay/contrast do not cover the image borders.
      // We position and size the overlays to match the image's content box (clientWidth/Height),
      // inset by the image border widths, and copy border-radius so rounded corners remain untouched.
      function updateOverlay() {
        try {
          const cs = window.getComputedStyle(img);
          // parse border widths
          const bt = parseFloat(cs.borderTopWidth) || 0;
          const bl = parseFloat(cs.borderLeftWidth) || 0;
          const bb = parseFloat(cs.borderBottomWidth) || 0;
          const br = parseFloat(cs.borderRightWidth) || 0;

          // position relative to the wrapper using img offsets
          const imgTop = img.offsetTop || 0;
          const imgLeft = img.offsetLeft || 0;

          // set overlay to the image's content box (clientWidth/Height do not include borders)
          overlay.style.top = imgTop + bt + "px";
          overlay.style.left = imgLeft + bl + "px";
          overlay.style.width = img.clientWidth + "px";
          overlay.style.height = img.clientHeight + "px";

          contrast.style.top = imgTop + bt + "px";
          contrast.style.left = imgLeft + bl + "px";
          contrast.style.width = img.clientWidth + "px";
          contrast.style.height = img.clientHeight + "px";

          // match border-radius so overlays don't spill over rounded corners
          overlay.style.borderRadius = cs.borderRadius || "";
          contrast.style.borderRadius = cs.borderRadius || "";

          // remove inset to avoid conflict with inline top/left/width/height
          overlay.style.inset = "";
          contrast.style.inset = "";
        } catch (e) {
          // ignore and continue
        }
      }

      // update when the image loads (if not yet loaded) and when it resizes
      if (!img.complete) {
        img.addEventListener("load", updateOverlay, { once: true });
      }
      updateOverlay();

      // observe size changes so overlay stays aligned with responsive images
      let ro;
      if (window.ResizeObserver) {
        ro = new ResizeObserver(updateOverlay);
        try {
          ro.observe(img);
        } catch (e) {
          // ignore
        }
      }

      // store observer so rewrapping / cleanup could access it in future if needed
      overlay._resizeObserver = ro;
      contrast._resizeObserver = ro;
      // also update on window resize to be safe
      window.addEventListener("resize", updateOverlay);
    }

    // wrap existing images
    Array.from(document.querySelectorAll("img.dither")).forEach(wrapImage);

    // observe future additions or class changes
    const mo = new MutationObserver((records) => {
      for (const r of records) {
        if (r.type === "childList") {
          r.addedNodes.forEach((n) => {
            if (n.nodeType === 1) {
              if (n.matches && n.matches("img.dither")) wrapImage(n);
              if (n.querySelectorAll) n.querySelectorAll("img.dither").forEach(wrapImage);
            }
          });
        } else if (r.type === "attributes" && r.attributeName === "class" && r.target.matches && r.target.matches("img.dither")) {
          wrapImage(r.target);
        }
      }
    });
    mo.observe(document.documentElement || document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
