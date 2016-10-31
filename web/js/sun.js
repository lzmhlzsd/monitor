var Sun = function(options) {
    this.a = 1;
    var default_options = {

    }
    for (var op in options){
        default_options[op] = options[op];
    }

    //
    this._init();

    this._createRender();
    this._createControls();
    this.createGround();
    //this.render(this.scene, this.camera);
}

Sun.prototype._init = function() {
    this.container = document.createElement('div');
    document.body.appendChild(this.container);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.y = 500;
    this.camera.position.z = 500;
    this.scene.add(this.camera);
}

Sun.prototype._createRender = function() {
    this.renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    this.renderer.setClearColor(0xEEEEEE, 1.0);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.container.appendChild(this.renderer.domElement);
}

Sun.prototype._createControls = function() {
        var self = this;
        var controls = new THREE.OrbitControls(self.camera, self.renderer.domElement);
        controls.damping = 0.2;
        controls.addEventListener('change', function(e, b) {
            console.log(this.object.position.x, this.object.position.y, this.object.position.z)
            self.render(self.scene, self.camera);
        }, true);
        controls.addEventListener('mousedown', function(a, b) {
            console.log(a)
        });
    }
    //创建地面
Sun.prototype.createGround = function() {
        var planeGeometry = new THREE.PlaneGeometry(200, 200, 1, 1);
        var planeMaterial = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide
        });
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;


        plane.rotation.x = -0.5 * Math.PI; //90度
        plane.position.y = -199;
        plane.position.z = 0;

        this.scene.add(plane);
    }
    //墙
Sun.prototype.createWall = function() {

    }
    //工厂地面      
Sun.prototype.createFactoryGround = function() {
    //
}



Sun.prototype.render = function(scene, camera) {
    this.renderer.render(scene, camera);
    //console.log(12)
}
Sun.prototype.mousedown = function(a, b) {
    console.log(1)
}

//注册模型
Sun.prototype.createMazak = function(value) {
        //dae加载
        //文本框绘制
        this.c = value;
    }
    //模型设置数据
Sun.prototype.createMazak.prototype.setData = function() {
    console.log(this.c);
}
