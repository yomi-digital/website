<template>
  <div>
    <canvas id="c"></canvas>

    <div class="scene"></div>
    <div class="description">Scene $</div>
  </div>
</template>

<script>
const THREE = window.THREE;

export default {
  data() {
    return {
      scenes: [],
      canvas: {},
      frameCount: 0,
      animation: 0,
    };
  },
  mounted() {
    this.init();
    this.animate();
  },
  methods: {
    init() {
      const app = this;
      app.canvas = document.getElementById("c");

      var geometries = [
        new THREE.BoxBufferGeometry(1, 1, 1),
        new THREE.SphereBufferGeometry(0.5, 12, 8),
        new THREE.DodecahedronBufferGeometry(0.5),
        new THREE.CylinderBufferGeometry(0.5, 0.5, 1, 12),
      ];

      var template = document.getElementById("template").text;
      var content = document.getElementById("content");

      for (var i = 0; i < 40; i++) {
        let scene = new THREE.Scene();

        // make a list item
        var element = document.createElement("div");
        element.className = "list-item";
        element.innerHTML = template.replace("$", i + 1);

        // Look up the element that represents the area
        // we want to render the scene
        scene.userData.element = element.querySelector(".scene");
        content.appendChild(element);

        var camera = new THREE.PerspectiveCamera(50, 1, 1, 10);
        camera.position.z = 2;
        scene.userData.camera = camera;

        // add one random mesh to each scene
        var geometry = geometries[(geometries.length * Math.random()) | 0];

        var material = new THREE.MeshStandardMaterial({
          color: new THREE.Color().setHSL(Math.random(), 1, 0.75),
          roughness: 0.5,
          metalness: 0,
          flatShading: true,
        });

        scene.add(new THREE.Mesh(geometry, material));

        scene.add(new THREE.HemisphereLight(0xaaaaaa, 0x444444));

        var light = new THREE.DirectionalLight(0xffffff, 0.5);
        light.position.set(1, 1, 1);
        scene.add(light);

        app.scenes.push(scene);
      }

      let renderer = new THREE.WebGLRenderer({
        canvas: app.canvas,
        antialias: true,
      });
      renderer.setClearColor(0xffffff, 1);
      renderer.setPixelRatio(window.devicePixelRatio);
      // update size
      let width = app.canvas.clientWidth;
      let height = app.canvas.clientHeight;

      if (app.canvas.width !== width || app.canvas.height !== height) {
        renderer.setSize(width, height, false);
      }
    },

    animate() {
      const app = this;
      app.frameCount++;
      if (app.rameCount % 4 === 0) {
        app.render();
      }
      requestAnimationFrame(app.animation);
    },

    render() {
      const app = this;
      let width = app.canvas.clientWidth;
      let height = app.canvas.clientHeight;

      if (app.anvas.width !== width || app.canvas.height !== height) {
        app.renderer.setSize(width, height, false);
      }

      app.canvas.style.transform = `translateY(${window.scrollY}px)`;

      app.renderer.setClearColor(0xffffff);
      app.renderer.setScissorTest(false);
      app.renderer.clear();

      app.renderer.setClearColor(0xe0e0e0);
      app.renderer.setScissorTest(true);

      app.scenes.forEach(function (scene) {
        // so something moves
        scene.children[0].rotation.y = Date.now() * 0.001;

        // get the element that is a place holder for where we want to
        // draw the scene
        var element = scene.userData.element;

        // get its position relative to the page's viewport
        var rect = element.getBoundingClientRect();

        // check if it's offscreen. If so skip it
        if (
          rect.bottom < 0 ||
          rect.top > app.renderer.domElement.clientHeight ||
          rect.right < 0 ||
          rect.left > app.renderer.domElement.clientWidth
        ) {
          return; // it's off screen
        }

        // set the viewport
        var width = rect.right - rect.left;
        var height = rect.bottom - rect.top;
        var left = rect.left;
        var top = rect.top;

        app.renderer.setViewport(left, top, width, height);
        app.renderer.setScissor(left, top, width, height);

        var camera = scene.userData.camera;

        //camera.aspect = width / height; // not changing in this example
        //camera.updateProjectionMatrix();

        //scene.userData.controls.update();

        app.renderer.render(scene, camera);
      });
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}

body {
  color: #000;
  font-family: Monospace;
  font-size: 13px;

  background-color: #fff;
  margin: 0;
}

#info {
  position: absolute;
  top: 0;
  width: 100%;
  padding: 5px;
  text-align: center;
}

#content {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  padding: 3em 0 0 0;
}

a {
  color: #0080ff;
}

#c {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
}

.list-item {
  display: inline-block;
  margin: 1em;
  padding: 1em;
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.25);
}

.list-item .scene {
  width: 200px;
  height: 200px;
}

.list-item .description {
  color: #888;
  font-family: sans-serif;
  font-size: large;
  width: 200px;
  margin-top: 0.5em;
}
</style>
