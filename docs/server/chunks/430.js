"use strict";
exports.id = 430;
exports.ids = [430];
exports.modules = {

/***/ 6430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ voxel_dog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "three"
var external_three_ = __webpack_require__(2248);
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/controls/OrbitControls.js
var OrbitControls = __webpack_require__(9365);
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/loaders/GLTFLoader.js
var GLTFLoader = __webpack_require__(1217);
;// CONCATENATED MODULE: ./lib/model.js

function loadGLTFModel(scene, glbPath, options = {
    receiveShadow: true,
    castShadow: true
}) {
    const { receiveShadow , castShadow  } = options;
    return new Promise((resolve, reject)=>{
        const loader = new GLTFLoader/* GLTFLoader */.E();
        loader.load(glbPath, (gltf)=>{
            const obj = gltf.scene;
            obj.name = 'dog';
            obj.position.y = 0;
            obj.position.x = 0;
            obj.receiveShadow = receiveShadow;
            obj.castShadow = castShadow;
            scene.add(obj);
            obj.traverse(function(child) {
                if (child.isMesh) {
                    child.castShadow = castShadow;
                    child.receiveShadow = receiveShadow;
                }
            });
            resolve(obj);
        }, undefined, function(error) {
            reject(error);
        });
    });
}

// EXTERNAL MODULE: ./components/voxel-dog-loader.js
var voxel_dog_loader = __webpack_require__(1026);
;// CONCATENATED MODULE: ./components/voxel-dog.js






function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4));
}
const VoxelDog = ()=>{
    const refContainer = (0,external_react_.useRef)();
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    const { 0: renderer1 , 1: setRenderer  } = (0,external_react_.useState)();
    const { 0: _camera , 1: setCamera  } = (0,external_react_.useState)();
    const { 0: target  } = (0,external_react_.useState)(new external_three_.Vector3(-0.5, 1.2, 0));
    const { 0: initialCameraPosition  } = (0,external_react_.useState)(new external_three_.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI)));
    const { 0: scene  } = (0,external_react_.useState)(new external_three_.Scene());
    const { 0: _controls , 1: setControls  } = (0,external_react_.useState)();
    const handleWindowResize = (0,external_react_.useCallback)(()=>{
        const { current: container  } = refContainer;
        if (container && renderer1) {
            const scW = container.clientWidth;
            const scH = container.clientHeight;
            renderer1.setSize(scW, scH);
        }
    }, [
        renderer1
    ]);
    /* eslint-disable react-hooks/exhaustive-deps */ (0,external_react_.useEffect)(()=>{
        const { current: container  } = refContainer;
        if (container && !renderer1) {
            const scW = container.clientWidth;
            const scH = container.clientHeight;
            const renderer = new external_three_.WebGLRenderer({
                antialias: true,
                alpha: true
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(scW, scH);
            renderer.outputEncoding = external_three_.sRGBEncoding;
            container.appendChild(renderer.domElement);
            setRenderer(renderer);
            // 640 -> 240
            // 8   -> 6
            const scale = scH * 0.005 + 4.8;
            const camera = new external_three_.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);
            camera.position.copy(initialCameraPosition);
            camera.lookAt(target);
            setCamera(camera);
            const ambientLight = new external_three_.AmbientLight(13421772, 1);
            scene.add(ambientLight);
            const controls = new OrbitControls/* OrbitControls */.z(camera, renderer.domElement);
            controls.autoRotate = true;
            controls.target = target;
            setControls(controls);
            loadGLTFModel(scene, '/dog.glb', {
                receiveShadow: false,
                castShadow: false
            }).then(()=>{
                animate();
                setLoading(false);
            });
            let req = null;
            let frame = 0;
            const animate = ()=>{
                req = requestAnimationFrame(animate);
                frame = frame <= 100 ? frame + 1 : frame;
                if (frame <= 100) {
                    const p = initialCameraPosition;
                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;
                    camera.position.y = 10;
                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
                    camera.lookAt(target);
                } else {
                    controls.update();
                }
                renderer.render(scene, camera);
            };
            return ()=>{
                console.log('unmount');
                cancelAnimationFrame(req);
                renderer.dispose();
            };
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener('resize', handleWindowResize, false);
        return ()=>{
            window.removeEventListener('resize', handleWindowResize, false);
        };
    }, [
        renderer1,
        handleWindowResize
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(voxel_dog_loader/* DogContainer */.Oi, {
        ref: refContainer,
        children: loading && /*#__PURE__*/ jsx_runtime_.jsx(voxel_dog_loader/* DogSpinner */.j_, {
        })
    }));
};
/* harmony default export */ const voxel_dog = (VoxelDog);


/***/ })

};
;