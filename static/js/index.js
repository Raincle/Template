$(function() {

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();



    var scene, camera, renderer;
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog('rgb(150,200,230)', 5 ,0);
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight);
    camera.position.set(0,0,3);
    camera.lookAt(new THREE.Vector3(0,0,0));
    scene.add(camera);



    var texture = new THREE.TextureLoader().load( "static/img/rain.png" );
    var material = new THREE.PointsMaterial({
        size: .1,
        map: texture,
        //blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true
    });



    function pointsGenerator(num) {
        var geometry = new THREE.Geometry();
        for (var i = 0;i < num; i++) {
            var pX = Math.random() * 5 - 2.5;
            var pY = Math.random() * 3 - 1.5;
            var pZ = Math.random() * 4 - 2;
            var particle = new THREE.Vector3(pX, pY, pZ);
            geometry.vertices.push(particle);
        }
        return new THREE.Points(geometry, material);
    }

    var rain = pointsGenerator(300);
    rain.position.set(0,0,0);
    scene.add(rain);

    var additionRain = pointsGenerator(300);
    additionRain.position.set(0,3,0);
    scene.add(additionRain);



    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);



    function animate() {

        rain.position.y -= 0.01;
        if (rain.position.y <= - 3) {
            scene.remove(rain);
            rain = pointsGenerator(300);
            rain.position.set(0,3,0);
            scene.add(rain);
        }

        additionRain.position.y -= 0.01;
        if (additionRain.position.y <= - 3) {
            scene.remove(additionRain);
            additionRain = pointsGenerator(300);
            additionRain.position.set(0,3,0);
            scene.add(additionRain);
        }

        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();

});