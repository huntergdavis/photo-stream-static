(function(html) {
const photo = document.currentScript.getAttribute('data-photo-id');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
document.querySelector(`#${photo}`).classList.add(TARGET_CLASS);
lazyload();
})(`
<li class="item " id="munchie-riding-shotgun" style="background-image: url('/photo-stream/photos/tint/munchie%20riding%20shotgun-65ba1d.jpg')" title="munchie riding shotgun">
  <img class="lazyload" data-src="/photo-stream/photos/thumbnail/munchie%20riding%20shotgun-ccf4df.jpg" src="/photo-stream/photos/tint/munchie%20riding%20shotgun-65ba1d.jpg" height="3024" width="4032" />
  <span class="full">
    <span style="background-image: url('/photo-stream/photos/large/munchie%20riding%20shotgun-686656.jpg')"></span>
    <h2><span>  Muncie (beagle) riding shotgun in my RV - 20/154/114/1</span></h2>
  </span>
  <a class="open" href="/photo-stream/munchie-riding-shotgun" data-target="munchie-riding-shotgun">Open</a>
  <a class="close" href="/photo-stream/">Close</a>
  <!-- <ul class="meta">
    <li></li>
    <li>1/144</li>
    <li><span class="aperture"><em>f</em>/</span>2.4</li>
	</ul> -->
</li>
`);