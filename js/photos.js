(function(html) {
const photo = document.currentScript.getAttribute('data-photo-id');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
document.querySelector(`#${photo}`).classList.add(TARGET_CLASS);
lazyload();
})(`
<li class="item " id="munchie-riding-shotgun" style="background-image: url('/photos/tint/munchie%20riding%20shotgun-65ba1d.jpg')" title="munchie riding shotgun">
  <img class="lazyload" data-src="/photos/thumbnail/munchie%20riding%20shotgun-ccf4df.jpg" src="/photos/tint/munchie%20riding%20shotgun-65ba1d.jpg" height="3024" width="4032" />
  <span class="full">
    <span style="background-image: url('/photos/large/munchie%20riding%20shotgun-686656.jpg')"></span>
  </span>
  <a class="open" href="/munchie-riding-shotgun" data-target="munchie-riding-shotgun">Open</a>
  <a class="close" href="/">Close</a>
  <!-- <ul class="meta">
    <li></li>
    <li>1/144</li>
    <li><span class="aperture"><em>f</em>/</span>2.4</li>
	</ul> -->
</li>
`);