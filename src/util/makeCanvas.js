

import * as THREE from "three";
import $ from 'jquery';

export const makeCanvas = () => {
 const container = document.getElementById("canvas");

        if(container !== null){

            let windowHalfX = window.innerWidth /2 ;
            let windowHalfY = window.innerHeight  /2;
                    
            let mouseX = 0, mouseY = 0;

            const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 3000 );
            camera.position.z = 1400;

            const scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2( 0x8CB4D3, 0.0004 );

            const geometry = new THREE.Geometry();
            THREE.ImageUtils.crossOrigin = 'anonymous';
            
            const sprite = new THREE.TextureLoader().load(require('Assets/images/gold.png'));

            for (let i = 0; i < 1000; i ++ ) {
                let vertex = new THREE.Vector3();

                vertex.x = 2000 * Math.random() - 1000;
                vertex.y = 2000 * Math.random() - 1000;
                vertex.z = 2000 * Math.random() - 1000;

                geometry.vertices.push( vertex );
            }

            const material = new THREE.PointsMaterial( {  size: 20, map: sprite, transparent: true });
            const particles = new THREE.Points( geometry, material );
            scene.add( particles );


            const geometry2 = new THREE.Geometry();
            const sprite2 = new THREE.TextureLoader().load(require( "Assets/images/cloud10.png") );
            for (let i = 0; i < 900; i ++ ) {
                var vertex2 = new THREE.Vector3();
                vertex2.x = Math.random() * 4000 - 500;
                vertex2.y = - Math.random() * Math.random() * 400 - 15;
                vertex2.z = i;
                geometry2.vertices.push( vertex2 );
            }
            const material2 = new THREE.PointsMaterial({ size: 400, map: sprite2, 	depthWrite: false, depthTest: false, transparent: true, opacity:.2});
            const particles2 = new THREE.Points( geometry2, material2 );
            particles2.position.set(-800,-270,0);
            scene.add( particles2 );

            const renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( $(container).parent().width(), $(container).parent().height() );
            container.appendChild( renderer.domElement );

            document.addEventListener( 'mousemove', onDocumentMouseMove, false );

        
    
            const animate = function () {

            requestAnimationFrame( animate );
                camera.position.x += ( mouseX - camera.position.x ) * 0.05;
            camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
            camera.lookAt( scene.position );
                renderer.render( scene, camera );
            };

            function onDocumentMouseMove( event ) {
                mouseX = ( event.clientX - windowHalfX ) / 10;
                mouseY = ( event.clientY - windowHalfY ) / 10;
            }

            animate();
        }
}