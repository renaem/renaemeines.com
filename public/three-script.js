window.onload = function() { 
  let scene = new THREE.Scene();
  let container = document.getElementById( 'canvas' );
  let camera = new THREE.PerspectiveCamera( 75, container.offsetWidth / (container.offsetHeight * 2), 0.1, 3000 );
  let renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize( container.offsetWidth, (container.offsetHeight * 2) );
  container.appendChild( renderer.domElement );

  var ambientLight = new THREE.AmbientLight(0x444444);
  scene.add(ambientLight);

  new THREE.MTLLoader()
    .setPath( 'models/' )
    .load( 'desmoines_object.mtl', function ( materials ) {

      materials.preload();

      new THREE.OBJLoader()
        .setMaterials( materials )
        .setPath( 'models/' )
        .load( 'desmoines_object.obj', function ( object ) {
          object.traverse(function(child) {
            child.castShadow = true;
            child.receiveShadow = true;
          });

          scene.add( object );
        });
    } );

  let spotLight = new THREE.DirectionalLight(0xffffff, 100);
  // spotLight.castShadow = true;
  spotLight.position.z = 500;
  spotLight.position.y = 1000;
  // spotLight.shadow.mapSize.height = 4096;
  // spotLight.shadow.camera.near = 0.5;
  // spotLight.shadow.mapSize.width = 4096;
  // spotLight.shadow.camera.far = 2048;
  // spotLight.shadow.bias = 0.0001;

  camera.position.z = 1900;
  camera.position.y = 500;

  var animate = function () {
    scene.rotation.y += 0.003;
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  };
  
  animate();
};