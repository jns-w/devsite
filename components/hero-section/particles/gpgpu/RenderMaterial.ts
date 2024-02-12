import {shaderMaterial} from "@react-three/drei";
import {extend} from "@react-three/fiber";

const RenderMaterial = shaderMaterial(
    {uPosition: null, uColor: null, uMouse: null},
    `
    attribute vec2 reference;
    varying vec2 vRef;
    varying vec2 vUv;
    uniform sampler2D uPosition;
    uniform vec3 uColor;
    varying vec3 vColor;
    void main() {
        vUv = uv;
        vColor = uColor;
        vRef = reference;       
        vec3 pos = texture2D(uPosition, reference).rgb;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = 4.0;
    }`,
    `
    varying vec2 vRef;
    varying vec2 vUv;
    varying vec3 vColor;
    void main() {
    vec3 color = vec3(0, 0, 0);
      gl_FragColor.rgba = vec4(vColor, 0.5);
    }
    `
)

extend({RenderMaterial});