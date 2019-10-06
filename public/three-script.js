window.onload = function() { 
  let scene = new THREE.Scene();
  let container = document.getElementById( 'canvas' );
  let camera = new THREE.PerspectiveCamera( 75, container.offsetWidth / (container.offsetHeight * 2), 0.1, 3500 );
  let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize( container.offsetWidth, (container.offsetHeight * 2) );
  container.appendChild( renderer.domElement );

  var ambientLight = new THREE.AmbientLight(0xF7486E, 0.8);
  scene.add(ambientLight);

  var pointLight = new THREE.PointLight( 0xFFD0E6, 0.8 );
  pointLight.position.y = 1500;
	pointLight.position.z = 1900;
  scene.add( pointLight );

  new THREE.MTLLoader()
    .setPath( 'models/' )
    .load( 'desmoines_object.mtl', function ( materials ) {

      materials.preload();

      new THREE.OBJLoader()
        .setMaterials( materials )
        .setPath( 'models/' )
        .load( 'desmoines_object.obj', function ( object ) {
          object.name = 'SpinningWorld';
          object.position.y = -400;
          scene.add( object );
        });
    } );

  camera.position.z = 2000;
  camera.position.y = 500;

  function animate() {
    if(scene.getObjectByName('SpinningWorld')) {
      // wrap to prevent error before load
      scene.getObjectByName('SpinningWorld').rotation.y += 0.003;
    }
    requestAnimationFrame( animate );
    render();
  }
  
  function render() {
    camera.lookAt( scene.position );
    renderer.render( scene, camera );
  }
  
  animate();
};